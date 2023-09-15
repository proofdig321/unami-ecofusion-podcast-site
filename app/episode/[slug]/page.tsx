import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { cache } from "react";
import SlugHero from "../SlugHero";
import Container from "@/app/components/Container";
import MediaLink from "@/app/components/MediaLink";
import EpisodeSlugContainer from "./EpisodeSlugContainer";
import Loader from "@/app/components/loader/Loader";
import ClientOnly from "@/app/components/ClientOnly";
import { Page } from "@/app/type/types";
import RelatedEpisodes from "../RelatedEpisodes";
import AudioPlayer from "@/app/episodes/AudioPlayer";
import { Metadata } from 'next';
import episode from "@/sanity/schemas/episode";
const util = require('util');



type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 60;

export async function generateMetadata({ params: { slug } }: Props): Promise<Metadata> {
  try {
    const query = groq`*[_type=="episode" && slug.current == $slug][0] {
      title,
      description,
      "coverArtUrl": coverArt.asset->url
    }`;

    const clientFetch = cache(client.fetch.bind(client));
    const post = await clientFetch(query, { slug });

    if (!post) {
      return {
        title: "Not Found",
        description: "The page you are looking for does not exist.",
        openGraph: {
          title: "Not Found",
          description: "The page you are looking for does not exist.",
          url: process.env.SITE_URL,
          type: "website",
        },
        meta: [
          // No need for og:image in the meta section
        ],
      };
    }

    const coverArtUrl = post.coverArtUrl || "https://example.com/default-image.jpg";

    return {
      title: post.title,
      description: post.description,
      openGraph: {
        title: post.title,
        description: post.description,
        url: `${process.env.SITE_URL}/episode/${slug}`,
        type: "website",
        images: [
          {
            url: coverArtUrl,
            width: 1200,
            height: 630,
            alt: "Cover Art",
          },
        ],
      },
      meta: [
        // No need for og:image in the meta section
      ],
    };
  } catch (error) {
    console.error(error);
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist.",
      openGraph: {
        title: "Not Found",
        description: "The page you are looking for does not exist.",
        url: process.env.SITE_URL,
        type: "website",
      },
      meta: [
        // No need for og:image in the meta section
      ],
    };
  }
}

{/*
export async function generateMetadata({ params: { slug } }: Props) {
  try {
    const query = groq`*[_type=="episode" && slug.current == $slug][0] {
      title,
      description,
      "coverArtUrl": coverArt.asset->url
    }`;

    const clientFetch = cache(client.fetch.bind(client));
    const post = await clientFetch(query, { slug });

    if (!post) {
      return {
        title: "Not Found",
        description: "The page you are looking for does not exist.",
        openGraph: {
          title: "Not Found",
          description: "The page you are looking for does not exist.",
          url: process.env.SITE_URL,
          type: "website",
        },
        meta: [
          // No need for og:image in the meta section
        ],
      };
    }

    const coverArtUrl = post.coverArtUrl || "https://example.com/default-image.jpg";

    return {
      title: post.title,
      description: post.description,
      openGraph: {
        title: post.title,
        description: post.description,
        url: `${process.env.SITE_URL}/episode/${slug}`,
        type: "website",
        // Provide a LinkedIn-specific image URL directly in the openGraph object
        image: coverArtUrl,
      },
      meta: [
        // No need for og:image in the meta section
      ],
    };
  } catch (error) {
    console.error(error);
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist.",
      openGraph: {
        title: "Not Found",
        description: "The page you are looking for does not exist.",
        url: process.env.SITE_URL,
        type: "website",
      },
      meta: [
        // No need for og:image in the meta section
      ],
    };
  }
}

*/}
 
export async function generateStaticParams() {
  const query = groq`*[__type == "episode"]
  {
    slug
  }`;

  const slugs = await client.fetch<Page[]>(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map(async (slug) => ({
    slug,
   

  }));
}



//const BlogPost = async ({ params: { slug } }: Props) => {
const BlogPost = async ({ params: { slug }}: Props) => {

  const query = groq`*[_type=="episode" && slug.current == $slug][0]  {
    ...,
    categories[]->,
    sponsors[]->,
    relatedEpisodes[]->
  }`;
  
  const clientFetch = cache(client.fetch.bind(client));
  const post = await clientFetch(query, { slug });
  for(let d in post?.coverArt.asset){
  console.log("hi: "+JSON.stringify(d, null, 4));
  }

  if (!post) return null;



  return (
    <>
    <ClientOnly>

    <Loader />
    <div className="bg-gray">
        <SlugHero />
        <div className="max-w-[2250px] mx-auto xl:px-20 md:px-10 sm:px-2 px-0">
                <EpisodeSlugContainer post={post} />
             
        </div>
        {
          post.relatedEpisodes && <RelatedEpisodes posts={post.relatedEpisodes} />

        }
        <MediaLink />
        <div className='fixed bottom-0 left-0  w-full'>
        {
            post.fileUrl && <AudioPlayer fileUrl={post.fileUrl} />
            
        }
        </div>
        
    </div>
    </ClientOnly>

    </>
  );
}

export default BlogPost
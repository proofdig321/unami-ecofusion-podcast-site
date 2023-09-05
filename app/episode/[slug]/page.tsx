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
          "og:title": "Not Found",
          "og:description": "The page you are looking for does not exist.",
          "og:url": process.env.SITE_URL,
          "og:type": "website",
          "og:image": "https://example.com/default-image.jpg",
          "og:site_name": "Unami Ecofusion Podcast Blog",
        },
        meta: [
          { property: "og:image", content: "" },
        ],
      };
    }

    const coverArtUrl = post.coverArtUrl || "https://example.com/default-image.jpg";

    return {
      title: post.title,
      description: post.description,
      openGraph: {
        "og:title": post.title,
        "og:description": post.description,
        "og:url": `${process.env.SITE_URL}/episode/${slug}`,
        "og:image": coverArtUrl,
        "og:type": "website",
        "og:site_name": "Unami Ecofusion Podcast Blog",
      },
      meta: [
        { property: "og:image", content: coverArtUrl },
      ],
    };
  } catch (error) {
    console.error(error);
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist.",
      openGraph: {
        "og:title": "Not Found",
        "og:description": "The page you are looking for does not exist.",
        "og:url": process.env.SITE_URL,
        "og:type": "website",
        "og:image": "https://example.com/default-image.jpg",
        "og:site_name": "Unami Ecofusion Podcast Blog",
      },
      meta: [
        { property: "og:image", content: "" },
      ],
    };
  }
}


{/*
//working fine
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
          images: [
            {
              url: "https://example.com/default-image.jpg",
              width: 800,
              height: 600,
            },
          ],
          locale: "en_US",
          fbAppId: "651424070289695",
        },
        meta: [
          { property: "og:image", content: "" },
        ],
      };
    }

    const coverArtUrl = post.coverArtUrl || "https://example.com/default-image.jpg";

    return {
      title: post.title,
      description: post.description,
      image: coverArtUrl,
      openGraph: {
        title: post.title,
        description: post.description,
        url: `${process.env.SITE_URL}/episode/${slug}`,
        images: [
          {
            url: coverArtUrl,
            width: 800,
            height: 600,
          },
          {
            url: "https://example.com/default-image.jpg",
            width: 1800,
            height: 1600,
            alt: "My custom alt",
          },
        ],
        locale: "en_US",
        type: "website",
        fbAppId: "651424070289695",
      },
      meta: [
        { property: "og:image", content: coverArtUrl },
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
        images: [
          {
            url: "https://example.com/default-image.jpg",
            width: 800,
            height: 600,
          },
        ],
        locale: "en_US",
        fbAppId: "651424070289695", 
      },
      meta: [
        { property: "og:image", content: "" },
      ],
    };
  }
}
/*}
{/* use this for metadata

export async function generateMetadata({ params: { slug } }: Props) {
  try {
    const query = groq`*[_type=="episode" && slug.current == $slug][0] {
      title,
      description,
      coverArt
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
          images: [
            {
              url: "https://example.com/default-image.jpg",
              width: 800,
              height: 600,
            },
          ],
          locale: "en_US",
          fbAppId: "651424070289695",
        },
        meta: [
          { property: "og:image", content: "" },
        ],
      };
    }

    const coverArtUrl = post.coverArt?.asset.url || "https://example.com/default-image.jpg";

    return {
      title: post.title,
      description: post.description,
      image: coverArtUrl,
      openGraph: {
        title: post.title,
        description: post.description,
        url: `https:www.unamipodcast.site/episode/${slug}`,
        images: [
          {
            url: coverArtUrl,
            width: 800,
            height: 600,
          },
          {
            url: "https://example.com/default-image.jpg",
            width: 1800,
            height: 1600,
            alt: "My custom alt",
          },
        ],
        locale: "en_US",
        type: "website",
        fbAppId: "651424070289695",
      },
      meta: [
        { property: "og:image", content: coverArtUrl },
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
        images: [
          {
            url: "https://example.com/default-image.jpg",
            width: 800,
            height: 600,
          },
        ],
        locale: "en_US",
        fbAppId: "651424070289695",
      },
      meta: [
        { property: "og:image", content: "" },
      ],
    };
  }
}
*/}


{/*
export async function generateMetadata({ params: { slug } }: Props) {
  try {
  const query = groq`*[_type=="episode" && slug.current == $slug][0]  {
    title,
    description,
    coverArt

  }`;
  
  const clientFetch = cache(client.fetch.bind(client));
  const post = await clientFetch(query, { slug });
    if (!post)
      return {
        title: "Not Found",
        description: "The page you are looking for does not exist.",
      };
    return {
      title: post.title,
      description: post.description,
      // Use the image URL from the fetched data
      image: post.coverArt?.asset.url || "https://mobisoftinfotech.com/resources/wp-content/uploads/2022/04/next-JS-framework.png", // Use the coverArt URL from the fetched data
      openGraph: {
        title: post.title,
        description: post.description,
        url: `https:www.unamipodcast.site/episode/${slug}`,
        images: [
          {
            url: post.coverArt?.asset.url,
            width: 800,
            height: 600,
          },
          {
            url: 'https://mobisoftinfotech.com/resources/wp-content/uploads/2022/04/next-JS-framework.png',
            width: 1800,
            height: 1600,
            alt: 'My custom alt',
          },
        ],
        locale: 'en_US',
        type: 'website',
        fbAppId: '651424070289695',
      },
    // Add the 'og:image' tag to the metadata
    meta: [
      { property: "og:image", content: post.coverArt?.asset.url || "" },
    ],
    
    };
  } catch (error) {
    console.error(error);
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist.",
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
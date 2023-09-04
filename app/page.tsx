// Home.tsx
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Hero from './components/hero/Hero';
import Brands from './components/Brands';
import Usection from './components/Us';
import MediaLink from './components/MediaLink';
import Categories from './components/Categories';
import Host from './components/Host/Host';
import FavoriteMost from './components/FavoriteMost';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import Loader from './components/loader/Loader';
import FaqSection from './components/Faq';
import ClientOnly from './components/ClientOnly'; // Import the ClientOnly component

interface Episode {
  title: string;
  coverArt: string;
  summary: string;
  description: string;
  blogContent: string;
  fileUrl: string;
  host: string;
  categories: { title: string; slug: string }[];
}

const Home: React.FC = () => {
  const [hosts, setHosts] = useState<Episode[]>([]);
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    const fetchHosts = async () => {
      try {
        const query = groq`
          *[_type == 'episode']{
            ...,
            title,
            coverArt,
            summary,
            description,
            blogContent,
            fileUrl,
            host,
            "categories": *[_type=='category' && references(^._id)] {
              title,
              slug,
              ...,
            },
          }
        `;
        const hostQuery = groq`
          *[_type == 'host']{
            name,
            picture {
              alt,
              asset->{
                url
              }
            }
          }
        `;

        const categoryQuery = groq`
          *[_type == 'category']{
            ...,
          }
        `;

        const episodes: Episode[] = await client.fetch(query);
        const hostsData = await client.fetch(hostQuery);
        const categoriesData = await client.fetch(categoryQuery);

        setHosts(episodes);
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchHosts();
  }, []);

  const filterposts = hosts.filter((post: Episode, index: number) => index < 4);

  return (
    <main>
      <ClientOnly> {/* Wrap the components that use useState with ClientOnly */}
        <Loader />
        <Hero />
        <Brands />
        <Usection />
        <MediaLink />
        <Categories categories={categories} />
        <Host />
        <FavoriteMost filterposts={filterposts} />
        <FaqSection />
      </ClientOnly>
    </main>
  );
};

export default Home;

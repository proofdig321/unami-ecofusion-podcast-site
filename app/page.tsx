// Home.js
import { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import Hero from './components/hero/Hero';
import Brands from './components/Brands';
import Usection from './components/Us';
import MediaLink from './components/MediaLink';
import Categories from './components/Categories';
import Host from './components/Host/Host';
import FavoriteMost from './components/FavoriteMost';
import Loader from './components/loader/Loader';
import FaqSection from './components/Faq';
import ClientOnly from './components/ClientOnly';

export default function Home() {
  const [host, setHost] = useState(null);
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  const hostQuery = groq`
    *[_type == 'host']{
      name,
      picture,
    }[0]
  `;

  const query = groq`
    *[_type == 'episode']{
      ...,
      title,
      coverArt,
      summary,
      description,
      blogContent,
      fileUrl,
      "categories": *[_type=='category' && references(^._id)] {
        title,
        slug,
        ...,
      },
    }
  `;

  const categoryQuery = groq`
    *[_type == 'category']{
      ...,
    }
  `;

  useEffect(() => {
    const fetchHost = async () => {
      try {
        const response = await client.fetch(hostQuery);
        setHost(response);
      } catch (error) {
        console.error('Error fetching host data:', error);
      }
    };

    fetchHost();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPosts = await client.fetch(query);
        setPosts(fetchedPosts);
        
        const fetchedCategories = await client.fetch(categoryQuery);
        setCategories(fetchedCategories);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <ClientOnly>
        <Loader />
        <Hero />
        <Brands />
        <Usection />
        <MediaLink />
        <Categories categories={categories} />
        {host && <Host host={host} />}
        <FavoriteMost filterposts={posts} />
        <FaqSection />
      </ClientOnly>
    </main>
  );
}

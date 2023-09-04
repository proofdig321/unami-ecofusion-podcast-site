'use client'

import React from 'react';
import getYouTubeId from 'get-youtube-id';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import Image from 'next/image';
import Link from 'next/link';
import urlFor from '@/sanity/lib/urlFor'; // Adjust import path as needed

interface ImageProps {
  value: {
    url: string;
  };
}

interface YoutubeProps {
  value: {
    url: string;
  };
}

interface AudioProps {
  value: {
    url: string;
    mimeType: string;
  };
}

export const RichTextComponents = {
  types: {
    image: ({ value }: ImageProps) => {
      return (
        <div className="relative w-full h-96 m-10 mx-auto">
          <Image
            className="object-contain"
            src={urlFor(value).url()}
            alt="Blog Post Image"
            fill
          />
        </div>
      );
    },
    youtube: ({ value }: YoutubeProps) => {
      const id = getYouTubeId(value.url);

      // Check if id is a valid string before rendering the component
      if (id) {
        return (
          <div className="my-4">
            <LiteYouTubeEmbed id={id} title={''} />
          </div>
        );
      }

      // Handle the case when id is null or invalid (optional)
      return <p>Invalid YouTube URL</p>;
    },
    audio: ({ value }: AudioProps) => {
      return (
        <audio controls>
          <source src={value.url} type={value.mimeType} />
          Your browser does not support the audio tag.
        </audio>
      );
    },
  },
  list: {
    bullet: ({ children }: React.PropsWithChildren<{}>) => (
      <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }: React.PropsWithChildren<{}>) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: React.PropsWithChildren<{}>) => (
      <h1 className="text-5xl py-10 font-bold">{children}</h1>
    ),
    h2: ({ children }: React.PropsWithChildren<{}>) => (
      <h2 className="text-4xl py-10 font-bold">{children}</h2>
    ),
    h3: ({ children }: React.PropsWithChildren<{}>) => (
      <h3 className="text-3xl py-10 font-bold">{children}</h3>
    ),
    h4: ({ children }: React.PropsWithChildren<{}>) => (
      <h4 className="text-2xl py-10 font-bold">{children}</h4>
    ),
    blockquote: ({ children }: React.PropsWithChildren<{}>) => (
      <blockquote className="border-l-[#8F00FF] border-l-4 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({
      children,
      value,
    }: React.PropsWithChildren<{ value: { href: string } }>) => {
      const rel = !value.href.startsWith('/')
        ? 'noopener noreferrer'
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoreration-[#8F00FF] hover:decoration-black"
        >
          {children}
        </Link>
      );
    },
  },
};

export default RichTextComponents;

{/*
import React from 'react';
import getYouTubeId from 'get-youtube-id';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import Image from 'next/image';
import Link from 'next/link';
import urlFor from '@/sanity/lib/urlFor'; // Adjust import path as needed

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 m-10 mx-auto">
          <Image
            className="object-contain"
            src={urlFor(value).url()}
            alt="Blog Post Image"
            fill
          />
        </div>
      );
    },
    youtube: ({ value }: any) => {
      const id = getYouTubeId(value.url);

      // Check if id is a valid string before rendering the component
      if (id) {
        return (
          <div className="my-4">
            <LiteYouTubeEmbed id={id} title={''} />
          </div>
        );
      }

      // Handle the case when id is null or invalid (optional)
      return <p>Invalid YouTube URL</p>;
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-5xl py-10 font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl py-10 font-bold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-3xl py-10 font-bold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl py-10 font-bold">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-[#8F00FF] border-l-4 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/')
        ? 'noopener noreferrer'
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoreration-[#8F00FF] hover:decoration-black"
        >
          {children}
        </Link>
      );
    },
  },
};

export default RichTextComponents;
*/}
'use client'
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Button from "../components/Button";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import Heading from "../components/Heading";

const CurrentEpisode = ({ posts }: any) => {
  const router = useRouter();

  const filter = posts.filter((post: any, index: number) => index < 1);

  const handlePlayEpisode = (fileUrl: string) => {
    const audio = new Audio(fileUrl);
    audio.play();
  };

  return (
    <div className="">
      <Heading title="Just dropped" color="text-white" />
      

      {filter.map((post: any, index: number) => (
        <div key={post._id} className="text-white h-auto bg-black p-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <Image
                src={urlForImage(post.coverArt).url()}
                alt={post.title}
                width={300}
                height={500}
                className="w-full"
              />
            </div>
            <div>
              <h1>{post.title}</h1>
              

              <div>{post.summary}</div>
              


              <div className="flex flex-col md:flex-row gap-4  my-4">
                <Button
                  label="Play Episode"
                  color="primary"
                  bgcolor="bg-white"
                  icon={AiFillPlayCircle}
                  onClick={() => handlePlayEpisode(post.fileUrl)}
                />
                <Button
                  label="More"
                  color="white"
                  bgcolor="bg-primary"
                  icon={BsArrowUpRightCircleFill}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    router.push(`/episode/${post.slug.current}`);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CurrentEpisode;




{/*
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Button from "../components/Button";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import Heading from "../components/Heading";
import AudioPlayer from "./AudioPlayer";

const CurrentEpisode = ({ posts }: any) => {
  const router = useRouter();

  const filter = posts.filter((post: any, index: number) => index < 1);

  return (
    <div className="">
      <Heading title="Just dropped" color="text-white" />
      

      {filter.map((post: any, index: number) => (
        <div key={post._id} className="text-white h-auto bg-black p-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <Image
                src={urlForImage(post.coverArt).url()}
                alt={post.title}
                width={300}
                height={500}
                className="w-full"
              />
            </div>
            <div>
              <h1>{post.title}</h1>
              

              <div>{post.summary}</div>
              


              <div className="flex flex-col md:flex-row gap-4  my-4">
                <Button
                  label="Play Episode"
                  color="primary"
                  bgcolor="bg-white"
                  icon={AiFillPlayCircle}
                  onClick={() => {
                    // Play the audio from the external URL
                    window.open(post.fileUrl, "_blank");
                  }}
                />
                <Button
                  label="More"
                  color="white"
                  bgcolor="bg-primary"
                  icon={BsArrowUpRightCircleFill}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    router.push(`/episode/${post.slug.current}`);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CurrentEpisode;

{/*
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Button from "../components/Button";
import { AiFillPlayCircle } from "react-icons/ai";
import { useRef, useState, useEffect } from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import Heading from "../components/Heading";
import AudioPlayer from "./AudioPlayer";
import sanityClient from "@sanity/client";

const CurrentEpisode = ({ posts }: any) => {
  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [trackUrls, setTrackUrls] = useState<string[]>([]);

  // Initialize the Sanity client
  const client = sanityClient({
    projectId: "your_project_id",
    dataset: "your_dataset",
    token: "your_token", // If your dataset requires authentication
    useCdn: false, // Set to true for production
  });

  useEffect(() => {
    // Function to fetch track urls from Sanity CMS
    const fetchTrackUrls = async () => {
      try {
        const urls = await Promise.all(
          posts.map(async (post: any) => {
            const result = await client.fetch(
              `*[_id == '${post._id}'].fileUrl[0]`
            );
            return result;
          })
        );
        setTrackUrls(urls);
      } catch (error) {
        console.error("Failed to fetch track URLs:", error);
      }
    };

    fetchTrackUrls();
  }, []);

  const filter = posts.filter((post: any, index: number) => index < 1);

  return (
    <div className="">
      <Heading title="Just dropped" color="text-white" />
      

      {filter.map((post: any, index: number) => (
        <div key={post._id} className="text-white h-auto bg-black p-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <Image
                src={urlForImage(post.coverArt).url()}
                alt={post.title}
                width={300}
                height={500}
                className="w-full"
              />
            </div>
            <div>
              <h1>{post.title}</h1>
              

              <div>{post.summary}</div>
              


              <div className="flex flex-col md:flex-row gap-4  my-4">
                <Button
                  label="Play Episode"
                  color="primary"
                  bgcolor="bg-white"
                  icon={AiFillPlayCircle}
                  onClick={() => {
                    // Play the audio
                    if (audioRef.current) {
                      audioRef.current.play();
                    }
                  }}
                />
                <Button
                  label="More"
                  color="white"
                  bgcolor="bg-primary"
                  icon={BsArrowUpRightCircleFill}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    router.push(`/episode/${post.slug.current}`);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="bg-primary-1 md:w-1/2 md:mx-auto my-4 text-black">
            <AudioPlayer ref={audioRef} fileUrl={trackUrls[index]} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CurrentEpisode;

{/*
import { urlForImage } from "@/sanity/lib/image"
import Image from "next/image"
import Button from "../components/Button"
import { AiFillPlayCircle } from "react-icons/ai"
import { useRef, useState } from "react"

import { BsArrowUpRightCircleFill } from "react-icons/bs"
import { useRouter } from "next/navigation"
import Heading from "../components/Heading"
import AudioPlayer from "./AudioPlayer"


const CurrentEpisode = ({posts} : any) => {
    const router = useRouter()
    const audioRef = useRef<HTMLAudioElement>(null);


    const filter = posts.filter((post : any, index: number) => index < 1);


  return (
    <div className="">
        <Heading title="Just dropped" color="text-white" />
        <br />
        {
            filter.map((post : any) => (
                <div key={post._id} className="text-white h-auto bg-black p-4">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div>
                            <Image src={urlForImage(post.coverArt).url()} alt={post.title} width={300} height={500} className="w-full" />
                        </div>
                        <div >
                            <h1>{post.title}</h1>
                            <br />
                            <div>
                                {post.summary} 
                            {/* <br />
                            
                            </div>
                            
                            <br/>

                            <div className="flex flex-col md:flex-row gap-4  my-4">

                                <Button label="Play Episode" color="primary" bgcolor="bg-white" icon={AiFillPlayCircle} onClick={() => {}} />
                                <Button label="More" color="white" bgcolor="bg-primary" icon={BsArrowUpRightCircleFill} onClick={() => {
                                    window.scrollTo(0, 0);
                                    router.push(`/episode/${post.slug.current}`)}
                                }/>
                            </div>

                        </div>
                    
                    </div>
                    <div className="bg-primary-1 md:w-1/2 md:mx-auto my-4 text-black">
                        <AudioPlayer fileUrl={post.fileUrl} />
                    </div>
                    
                </div>
            ))
        }
    </div>
  )
}

export default CurrentEpisode
*/}
'use client'

{/*
'use client'

import Image from "next/image"
import Container from "./Container"
import Heading from "./Heading"


const Subscribe = () => {
  return (
    <div className="bg-primary-1 px-4 sm:px-16 py-16">
        <Container>
      <div className="max-w-5xl mx-auto">
            <Heading center title="Subsribe for new episode in your inbox" color="text-black" />
            <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-center items-center py-8">
                <input type="email" className="bg-primary-1 text-black border placeholder:text-black p-4 w-full md:w-[400px] outline-none focus:outline focus:outline-2 focus:outline-black" placeholder="Enter your email address" />
                <button className="bg-black text-primary-1 w-full md:w-fit block p-4 md:px-8">
                    Subscribe
                </button>
            </div>
      </div>
        </Container>

        <Image src='/flower.png' alt='flower' width={50} height={50} className="object-contain absolute" />

    </div>
  )
}

export default Subscribe
*/}

import React from "react";
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";

import Image from "next/image";
import Container from "./Container";
import Heading from "./Heading";

const Subscribe = () => {
  const url = "https://site.us14.list-manage.com/subscribe/post?u=d6ebd745257089d2f17b787df&amp;id=a2b0d3bbff&amp;f_id=004b9fe0f0"; // Replace with your MailChimp subscribe URL

  const { loading, error, success, message, handleSubmit } = useMailChimpForm(url);

  const { fields, handleFieldChange } = useFormFields({
    EMAIL: "",
  });

  const handleFormSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    handleSubmit(fields);
  };

  return (
    <div className="bg-primary-1 px-4 sm:px-16 py-16">
      <Container>
        <div className="max-w-5xl mx-auto">
          <Heading center title="Subscribe for new episodes in your inbox" color="text-black" />
          <form onSubmit={handleFormSubmit}>
            <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-center items-center py-8">
              <input
                type="email"
                id="EMAIL"
                autoFocus
                value={fields.EMAIL}
                onChange={handleFieldChange}
                className="bg-primary-1 text-black border placeholder:text-black p-4 w-full md:w-[400px] outline-none focus:outline focus:outline-2 focus:outline-black"
                placeholder="Enter your email address"
              />
              <button
                type="submit"
                className="bg-black text-primary-1 w-full md:w-fit block p-4 md:px-8"
              >
                Subscribe
              </button>
            </div>
          </form>
          {loading && "Submitting..."}
          {error && message}
          {success && message}
        </div>
      </Container>
      <Image src="/flower.png" alt="flower" width={50} height={50} className="object-contain absolute" />
    </div>
  );
};

export default Subscribe;

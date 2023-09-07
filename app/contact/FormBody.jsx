'use client'

import Button from '../components/Button';

import React from 'react';

const FormBody = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const result = form.querySelector("#result");
    const formData = new FormData(form);
    const object = {};

    formData.forEach((value, key) => {
      object[key] = value;
    });

    const json = JSON.stringify(object);

    result.innerHTML = "Please wait...";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const responseData = await response.json();

      if (response.status === 200) {
        result.innerHTML = responseData.message;
        result.classList.remove("text-gray-500");
        result.classList.add("text-green-500");
      } else {
        console.log(response);
        result.innerHTML = responseData.message;
        result.classList.remove("text-gray-500");
        result.classList.add("text-red-500");
      }
    } catch (error) {
      console.error(error);
      result.innerHTML = "Something went wrong!";
    } finally {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 5000);
    }
  };

  return (
    <div>
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        id="form"
        onSubmit={handleSubmit} // Add the form submit handler here
      >
        <input type="hidden" name="access_key" value="bf36a384-65b3-4e78-a50f-c86559d97517" />
        <input type="hidden" name="subject" value="New Submission from Web3Forms" />
        <input type="checkbox" name="botcheck" style={{ display: 'none' }} />
        
        <div className="my-8">
          <label className="block text-base font-bold mb-2 md:text-xl">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-4 rounded-xl border border-black outline-none focus:outline focus:outline-black"
          />
        </div>

        <div className="my-8">
          <label className="block text-base md:text-xl font-bold">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-4 rounded-xl border border-black outline-none focus:outline focus:outline-black"
          />
        </div>

        <div className="my-8">
          <label className="block text-base md:text-xl font-bold mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="w-full p-4 rounded-xl border border-black outline-none focus:outline focus:outline-black"
          />
        </div>

        <div className="my-8">
          <label className="block text-base md:text-xl font-bold mb-2">
            Subject
          </label>
          <input
            type="text"
            placeholder="Enter your subject"
            className="w-full p-4 rounded-xl border border-black outline-none focus:outline focus:outline-black"
          />
        </div>

        <div className="my-8">
          <label className="block text-base md:text-xl font-bold mb-2">
            Message
          </label>
          <textarea
            placeholder="Your message"
            className="w-full h-[200px] p-4 rounded-xl border border-black outline-none focus:outline focus:outline-black"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 inline-block text-black no-underline hover:text-indigo-100 py-4 px-4 rounded-sm focus:outline-none"
          >
            Send Message
          </button>
        </div>
        <p className="text-base text-center text-gray-400" id="result"></p>
      </form>
    </div>
  );
}

export default FormBody;

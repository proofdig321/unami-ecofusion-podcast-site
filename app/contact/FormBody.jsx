'use client'

import Button from '../components/Button';
import React, { useState, useRef } from 'react';

const FormBody = () => {
  const [submissionMessage, setSubmissionMessage] = useState('');
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
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
        // Customize the success message based on the form data
        const successMessage = `A new form has been submitted on your website. Details below.\nName: ${object.name}\nEmail: ${object.email}\nPhone Number: ${object.phone}\nSubject: ${object.subject}\nMessage: ${object.message}`;
        
        setSubmissionMessage(successMessage);

        result.innerHTML = successMessage;
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
        onSubmit={handleSubmit}
        ref={formRef}
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
            name="name" // Add the name attribute
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
            name="email" // Add the email attribute
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
            name="phone" // Add the phone attribute
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
            name="subject" // Add the subject attribute
            placeholder="Enter your subject"
            className="w-full p-4 rounded-xl border border-black outline-none focus:outline focus:outline-black"
          />
        </div>

        <div className="my-8">
          <label className="block text-base md:text-xl font-bold mb-2">
            Message
          </label>
          <textarea
            name="message" // Add the message attribute
            placeholder="Your message"
            className="w-full h-[200px] p-4 rounded-xl border border-black outline-none focus:outline focus:outline-black"
          ></textarea>
        </div>

        <div>
        <button
          type="submit"
          className="undefined text-center text-black bg-primary-1 font-bold text-sm sm:text-lg capitalize rounded-lg hover:opacity-80 transition w-full md:w-fit py-4 px-4 md:px-8"
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

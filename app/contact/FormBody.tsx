'use client'

import Button from '../components/Button';
import React, { useState, useRef } from 'react';

const FormBody = () => {

  return (
    
<div>
      <form action="https://api.web3forms.com/submit" method="POST" id="form">
          <input type="hidden" name="access_key" value="bf36a384-65b3-4e78-a50f-c86559d97517" />
          <input type="hidden" name="subject" value="New Submission from Web3Forms" />
          {/*<input type="checkbox" name="botcheck" id="" style="display: none;" /> */} 
        <div className="my-8">
          <label className="block text-base font-bold mb-2 md:text-xl">
            Name
          </label>
          <input type="text" placeholder="Enter your" className="w-full p-4 rounded-xl border border-black outline-none focus:outline focus:outline-black" />
        </div>

        <div className="my-8">
          <label className="block text-base md:text-xl font-bold">
            Email
          </label>
          <input type="email" placeholder="Enter your"  className="w-full p-4 rounded-xl border border-black outline-none focus:outline focus:outline-black"/>
        </div>

        <div className="my-8">
          <label className="block text-base md:text-xl font-bold mb-2">
            Phone Number
          </label>
          <input type="tel" placeholder="Enter your"  className="w-full p-4 rounded-xl border border-black outline-none focus:outline focus:outline-black"/>
        </div>

        <div className="my-8">
          <label className="block text-base md:text-xl font-bold mb-2">
            Subject
          </label>
          <input type="text" placeholder="Enter your"  className="w-full p-4 rounded-xl border border-black outline-none focus:outline focus:outline-black" />
        </div>

        <div className="my-8">
          <label className="block text-base  md:text-xl font-bold mb-2">
            Message
          </label>
          <textarea placeholder="Your message"  className="w-full h-[200px] p-4 rounded-xl border border-black outline-none focus:outline focus:outline-black" ></textarea>
        </div>

        <div>
        <button type="submit" className="w-full bg-indigo-600 inline-block text-white no-underline hover:text-indigo-100 py-4 px-4 rounded-sm focus:outline-none">
              Send Message
            </button>
          </div>
          <p className="text-base text-center text-gray-400" id="result"></p>
      </form>
    </div>
  )
}

export default FormBody

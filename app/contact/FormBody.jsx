'use client'


import React, { useState } from 'react';
import Button from '../components/Button';

export default function FormBody() {
  async function handleSubmit(event) {
      event.preventDefault();
      const formData = new FormData(event.target);

      formData.append("access_key", "231a110a-833c-4030-a18c-d2d9b20334c3");

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
      });
      const result = await response.json();
      if (result.success) {
          console.log(result);
      }
  }

return (
  <>
    <form onSubmit={handleSubmit}>
      <input type="text" name="name"/>
      <input type="email" name="email"/>
      <textarea name="message"></textarea>
      <Button type="submit">Submit Form</Button>
    </form>
  </>
);
}



{/*
const FormBody = () => {

  return (
    <div>
      <form>
        <div className='my-8'>
          <label className='block text-base font-bold mb-2 md:text-xl'>
            Name
          </label>
          <input type="text" placeholder='Enter your' className='w-full p-4 rounded-xl border border-black outline-none focus:outline focus:outline-black' />
        </div>

        <div className='my-8'>
          <label className='block text-base md:text-xl font-bold'>
            Email
          </label>
          <input type="email" placeholder='Enter your'  className='w-full p-4 rounded-xl border border-black outline-none focus:outline focus:outline-black'/>
        </div>

        <div className='my-8'>
          <label className='block text-base md:text-xl font-bold mb-2'>
            Phone Number
          </label>
          <input type="tel" placeholder='Enter your'  className='w-full p-4 rounded-xl border border-black outline-none focus:outline focus:outline-black'/>
        </div>

        <div className='my-8'>
          <label className='block text-base md:text-xl font-bold mb-2'>
            Subject
          </label>
          <input type="text" placeholder='Enter your'  className='w-full p-4 rounded-xl border border-black outline-none focus:outline focus:outline-black' />
        </div>

        <div className='my-8'>
          <label className='block text-base  md:text-xl font-bold mb-2'>
            Message
          </label>
          <textarea placeholder='Your message'  className='w-full h-[200px] p-4 rounded-xl border border-black outline-none focus:outline focus:outline-black' ></textarea>
        </div>

        <div>
          <Button bgcolor='bg-primary-1' label='send message' color='black' onClick={() => {}} />
        </div>
      </form>
    </div>
  )
}

export default FormBody
*/}
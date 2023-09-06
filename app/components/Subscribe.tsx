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

import Image from "next/image";
import Container from "./Container";
import Heading from "./Heading";

import React from "react";

const Subscribe: React.FC = () => {
  return (
    <div id="mc_embed_shell">
      <link
        href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
        rel="stylesheet"
        type="text/css"
      />
      <style>
        {`
        #mc_embed_signup{background: #fff; clear: left; font: 14px Helvetica,Arial,sans-serif; width: 600px;}
        /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
           We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
        `}
      </style>
      <div id="mc_embed_signup">
        <form
          action="https://site.us14.list-manage.com/subscribe/post?u=d6ebd745257089d2f17b787df&amp;id=a2b0d3bbff&amp;f_id=004b9fe0f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
        >
          <div id="mc_embed_signup_scroll">
            <h2>Subscribe</h2>
            <div className="indicates-required">
              <span className="asterisk">*</span> indicates required
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
              <input
                type="email"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                required
              />
              <span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span>
            </div>
            <div id="mce-responses" className="clear foot">
              <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
              <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
            </div>
            <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
              <input
                type="text"
                name="b_d6ebd745257089d2f17b787df_a2b0d3bbff"
                tabIndex={-1}
                value=""
              />
            </div>
            <div className="optionalParent">
              <div className="clear foot">
                <input
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                  value="Subscribe"
                />
                <p style={{ margin: "0px auto" }}>
                  <a href="http://eepurl.com/iy-Dxc" title="Mailchimp - email marketing made easy and fun">
                    <span style={{ display: "inline-block", backgroundColor: "transparent", borderRadius: "4px" }}>
                      <img
                        className="refferal_badge"
                        src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                        alt="Intuit Mailchimp"
                        style={{
                          width: "220px",
                          height: "40px",
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                      />
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
      <script src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js" />
      <script
        dangerouslySetInnerHTML={{
          __html: `(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);`
        }}
      ></script>
    </div>
  );
};

export default Subscribe;

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function PrivacyNPolicy() {
  return (
    <>
      <div className="sticky top-0 flex z-10">
        <Navbar />
      </div>
      <h2 className="text-white mx-8 md:mx-28 lg:mx-28 xl:mx-28 2xl:mx-28 text-5xl font-bold">
        Privacy and Policy
      </h2>
      <p className="text-white paragraph text-lg text-justify mt-6 mb-6 mx-8 md:mx-28 lg:mx-28 xl:mx-28 2xl:mx-28">
        Welcome to PadhaiPlanet's Privacy Policy. This document explains how we
        collect, use, and protect your personal information. By using
        PadhaiPlanet, you consent to the practices outlined in this policy.
      </p>

      <div className="md:mx-28 mx-8 lg:mx-28 xl:mx-28 2xl:mx-28 text-white">
        <h4 className="font-bold underline">Information We Collect:</h4>
        <p className="mb-4">
          <ol>
            a. Personal information such as name, email address, and other
            details provided during the account creation process.{" "}
          </ol>{" "}
          <ol>
            b. Usage data, including IP address, browser type, and device
            information.{" "}
          </ol>{" "}
          <ol>c. Any additional information voluntarily submitted by users.</ol>
        </p>

        <h4 className="font-bold underline">Use of Information:</h4>
        <p className="mb-4">
          <ol>
            a. Personal information is used to create and manage user accounts.{" "}
          </ol>
          <ol>
            b. Usage data is collected for analytics purposes to improve our
            services.
          </ol>{" "}
          <ol>
            c. We may use your email address to send updates, newsletters, or
            other relevant information.
          </ol>
        </p>

        <h4 className="font-bold underline">Data Security:</h4>
        <p className="mb-4">
          <ol>
            a. PadhaiPlanet employs industry-standard security measures to
            protect your information.
          </ol>{" "}
          <ol>
            b. However, no method of transmission over the internet or
            electronic storage is 100% secure.
          </ol>
        </p>

        <h4 className="font-bold underline">Disclosure of Information: </h4>
        <p className="mb-4">
          <ol>
            {" "}
            a. PadhaiPlanet may disclose personal information to comply with
            legal requirements or protect our rights.
          </ol>{" "}
          <ol>
            b. We do not sell or share personal information with third parties
            for marketing purposes.
          </ol>
        </p>

        <h4 className="font-bold underline">Cookies:</h4>
        <p className="mb-4">
          PadhaiPlanet uses cookies to enhance user experience and gather
          information about site usage.
        </p>

        <h4 className="font-bold underline">Third-Party Links:</h4>
        <p className="mb-4">
          PadhaiPlanet may contain links to third-party websites. We are not
          responsible for the privacy practices of these websites.
        </p>

        <h4 className="font-bold underline">Changes to Privacy Policy:</h4>
        <p className="mb-4">
          PadhaiPlanet reserves the right to update this Privacy Policy at any
          time. Any changes will be posted on this page.
        </p>

        <h4 className="font-bold underline">Contact Us:</h4>
        <p className="mb-4">
          If you have any questions or concerns about this Privacy Policy,
          please contact us at [contact@padhaiplanet.com].
        </p>
      </div>
      <p className="text-white paragraph text-lg text-justify mt-6 mb-6 md:mx-28 mx-8 lg:mx-28 xl:mx-28 2xl:mx-28">
        By using PadhaiPlanet, you acknowledge that you have read and understood
        these terms and conditions, as well as our Privacy Policy
      </p>
      <Footer />
    </>
  );
}

export default PrivacyNPolicy;

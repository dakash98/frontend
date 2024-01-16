import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function TermsNConditions() {
  return (
    <>
      <div className="sticky top-0 flex z-10">
        <Navbar />
      </div>
      <h2 className="text-white mx-8 md:mx-28 lg:mx-28 xl:mx-28 2xl:mx-28 text-5xl font-bold">
        Terms and Conditions
      </h2>
      <p className="text-white paragraph text-lg text-justify mt-6 mb-6 mx-8 md:mx-28 lg:mx-28 xl:mx-28 2xl:mx-28">
        Welcome to PadhaiPlanet! Before you start using our services, please
        read the following terms and conditions carefully. By accessing and
        using the PadhaiPlanet website, you agree to comply with and be bound by
        these terms. If you do not agree with any part of these terms, please do
        not use our website.
      </p>
      <div className="md:mx-28 mx-8 lg:mx-28 xl:mx-28 2xl:mx-28 text-white">
        <h4 className="font-bold underline">Acceptance of Terms: </h4>
        <p className="mb-4">
          By accessing or using the PadhaiPlanet website, you agree to be bound
          by these terms and conditions. If you disagree with any part of these
          terms, you may not access the website.
        </p>

        <h4 className="font-bold underline">User Account:</h4>
        <p className="mb-4">
          <ol>
            {" "}
            a. You must create an account to access certain features of
            PadhaiPlanet.
          </ol>{" "}
          <ol>
            {" "}
            b. You are responsible for maintaining the confidentiality of your
            account information.
          </ol>{" "}
          <ol>
            {" "}
            c. You are responsible for all activities that occur under your
            account.{" "}
          </ol>{" "}
          <ol>
            {" "}
            d. PadhaiPlanet reserves the right to terminate or suspend your
            account at any time without notice if we believe you have violated
            these terms.{" "}
          </ol>
        </p>

        <h4 className="font-bold underline">Use of Content:</h4>
        <p className="mb-4">
          <ol>
            {" "}
            a. The question papers provided on PadhaiPlanet are for educational
            purposes only.
          </ol>{" "}
          <ol>
            b. You may only view question papers for personal, non-commercial
            use only.
          </ol>
          <ol>
            c. You may not modify, distribute, transmit, display, reproduce, or
            publish any content from PadhaiPlanet without our prior written
            consent.
          </ol>
        </p>

        <h4 className="font-bold underline">Privacy:</h4>
        <p className="mb-4">
          <ol>
            a. PadhaiPlanet collects and processes personal information in
            accordance with our Privacy Policy.
          </ol>{" "}
          <ol>
            b. By using our website, you consent to the collection and use of
            your personal information as outlined in the Privacy Policy.
          </ol>
        </p>

        <h4 className="font-bold underline">Disclaimer:</h4>
        <p className="mb-4">
          <ol>
            a. PadhaiPlanet provides question papers as-is, without any warranty
            or guarantee of accuracy.
          </ol>{" "}
          <ol>
            b. We are not responsible for any errors, omissions, or inaccuracies
            in the content provided on the website.
          </ol>{" "}
          <ol>
            c. PadhaiPlanet reserves the right to modify, suspend, or
            discontinue any part of the website at any time without notice.
          </ol>
        </p>

        <h4 className="font-bold underline"> Limitation of Liability:</h4>
        <p className="mb-4">
          PadhaiPlanet shall not be liable for any direct, indirect, incidental,
          special, or consequential damages arising out of or in any way
          connected with the use of our website.
        </p>

        <h4 className="font-bold underline">Changes to Terms: </h4>
        <p className="mb-4">
          <ol>
            a. PadhaiPlanet reserves the right to change or modify these terms
            at any time without notice.
          </ol>{" "}
          <ol>
            b. Your continued use of the website after such changes will
            constitute your acceptance of the new terms.
          </ol>
        </p>

        <h4 className="font-bold underline">Governing Law:</h4>
        <p className="mb-4">
          {" "}
          These terms and conditions are governed by and constructed in
          accordance with the laws of the jurisdiction in which PadhaiPlanet
          operates.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default TermsNConditions;

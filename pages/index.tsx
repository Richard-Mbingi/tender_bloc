//TODO: Button hover color

import React from "react";
import Image from "next/image";
import {
  FaFacebookSquare,
  FaTwitter,
  FaLinkedinIn,
  FaGooglePlay,
} from "react-icons/fa";

import logo from "../public/images/logo.png";
import fullstop from "../public/images/fullstop.png";
import Link from "next/link";

const StatCard = ({
  percentage,
  description,
}: {
  percentage: number;
  description: string;
}) => {
  return (
    <div className="bg-secondary bg-opacity-20 rounded w-72 py-10 px-8">
      <h3 className="font-mono font-bold text-3xl">{percentage}%</h3>
      <p className="text-lg">{description}</p>
    </div>
  );
};

export default function Landing() {
  return (
    <>
      <div className="bg-primary flex flex-col justify-between px-16 py-8">
        {/* Navbar */}
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center space-x-2">
            <Image src={logo} alt="logo" height={50} width={50} />
            <h1 className="font-logo font-bold text-2xl">Tenderbloc</h1>
          </div>
          <div className="space-x-3">
            <Link href="/">Services</Link>
            <Link href="/">Features</Link>
            <Link href="/">Payment</Link>
            <Link href="/">Pricing</Link>
          </div>
          <div className="space-x-3">
            <Link href="/">Sign in</Link>
            <button className="button hover:bg-primary">Sign Up</button>
          </div>
        </div>
        {/* Section One */}
        <div className="flex justify-center h-screen items-center">
          <h1 className="font-mono text-4xl text-center">
            Consetetur sadipscing <br />
            elitr
            <Image src={fullstop} alt="fullstop" height={10} width={10} />
          </h1>
        </div>
        {/* Section Two */}
        {/* Section Three */}
        <div className="grid grid-cols-3">
          <h2 className="font-mono text-4xl font-bold col-span-3">
            Lorem ipsum dolor sit amet,
            <br />
            consetetur sadipscing elitr.
          </h2>
          <div>{/* Dont touch this div! */}</div>
          <div className="grid grid-cols-2 gap-4 col-span-2">
            <StatCard
              percentage={12.9}
              description="Last year performance above SMP"
            />
            <StatCard
              percentage={12.9}
              description="Last year performance above SMP"
            />
            <StatCard
              percentage={12.9}
              description="Last year performance above SMP"
            />
            <StatCard
              percentage={12.9}
              description="Last year performance above SMP"
            />
          </div>
        </div>
        {/* Section Four */}
        <div className="flex flex-col items-center">
          <h2 className="font-mono text-4xl font-bold">Contact Us</h2>
          <div>
            <form action="" method="post" className="grid grid-cols-2 gap-4 align-middle">
              <input
                placeholder="First Name"
                type="text"
                name="first"
                id="first"
              />
              <input
                placeholder="Second Name"
                type="text"
                name="second"
                id="second"
              />
              <input placeholder="Email" type="email" name="email" id="email" />
              <input placeholder="Phone" type="tel" name="phone" id="phone" />
              <input
                placeholder="Send us a message"
                type="text"
                name="message"
                id="message"
              />
              <button
                type="submit"
                className="button col-span-2 mt-4 justify-center"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="bg-secondary text-primary p-8">
        <div className="flex flex-row justify-between p-4">
          <div>
            <h2 className="font-mono font-bold text-3xl">
              Download the <br /> free app today
            </h2>
          </div>
          <div className="flex flex-row space-x-4 items-center">
            <p className="opacity-25">Only Available on Android</p>
            <button type="submit" className="button">
              <FaGooglePlay className="mr-2 " />
              Download for Free
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-between p-4">
          <Link href="/">Terms and Conditions</Link>
          <Link href="/">Privacy policy</Link>
          <p className="opacity-25">© 2021 Natural. All rights reserved</p>
          <div className="flex flex-row space-x-4 text-primary">
            <FaFacebookSquare />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </>
  );
}

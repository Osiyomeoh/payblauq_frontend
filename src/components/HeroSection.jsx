import React from "react";
import { group497, phoneImg2 } from "../assets";
import Navbar from "./Navbar";

// class="bg-gradient-to-r from-sky-500 to-indigo-500"

function HeroSection() {
  return (
    <div className="bg-[url('./assets/bg1.png')]">
      <Navbar />
      <div className="flex">
        <div>
          <div className="w-4/5 pl-10 pt-10 pb-5 font-bold text-white text-6xl">
            Financial infrastructure for the internet
          </div>
          <div className="text-white w-5/6 px-10 text-xs justify-straight">
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Payblauq's software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </div>
          <div className="px-10 py-5">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full text-sm">
              Start now
            </button>
          </div>
        </div>
        <div className="flex">
          <div>
            <img src={group497} alt="image" width={800} height={800} />
          </div>
          <div className="pr-5 pt-20">
            <img src={phoneImg2} alt="image" width={300} height={400} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

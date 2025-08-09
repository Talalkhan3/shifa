"use client";

import { Globe, Heart, ShieldCheck } from "lucide-react";
import React from "react";

const About_us = () => {
  return (
    <div>
      <section id="about" className="py-20 bg-white">
        <div className=" px-4 lg:px-14 md:px-10 xl:px-32">
          <div className="text-center space-y-4 mb-16">
            <span className="bg-blue-100 text-blue-800 py-1.5 px-2.5 rounded-md">
              About Shifa Healthcare
            </span>
            <h2 className="text-3xl font-bold text-blue-900 sm:text-4xl mt-1.5">
              Bridging Global Healthcare to Africa
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Founded with a mission to make quality healthcare accessible
              across Africa, we specialize in importing certified pharmaceutical
              products from trusted global manufacturers.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="border-0 shadow-lg rounded-lg p-7 hover:shadow-xl transition-shadow">
              <div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-blue-900 font-bold">Global Network</div>
              </div>
              <div>
                <p className="text-gray-600">
                  Partnerships with certified manufacturers across 50+
                  countries, ensuring diverse and reliable supply chains.
                </p>
              </div>
            </div>

            <div className="border-0 shadow-lg hover:shadow-xl rounded-lg p-7 transition-shadow">
              <div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-blue-900 font-bold">Quality Assurance</div>
              </div>
              <div>
                <p className="text-gray-600">
                  Rigorous quality control processes and compliance with
                  international pharmaceutical standards.
                </p>
              </div>
            </div>

            <div className="border-0 shadow-lg hover:shadow-xl rounded-lg p-7 transition-shadow">
              <div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-blue-900 font-bold">Healthcare Impact</div>
              </div>
              <div>
                <p className="text-gray-600">
                  Committed to improving healthcare outcomes and accessibility
                  across African communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About_us;

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <section
        id="home"
        className=" py-20 md:py-32 bg-gradient-to-br from-blue-50 to-green-50"
      >
        <div className="px-4 lg:px-14 xl:px-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="bg-green-100 text-green-800 hover:bg-green-100 py-0.5 px-1.5 rounded-sm border border-green-800/50">
                  Trusted Healthcare Partner
                </span>
                <h1 className="text-4xl font-bold tracking-tight text-blue-900 sm:text-5xl md:text-6xl">
                  Delivering Healing,{" "}
                  <span className="text-green-600">Empowering Africa</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl">
                  We import certified medicines and pharmaceutical products from
                  around the world to Rwanda and across Africa, ensuring quality
                  healthcare reaches every community.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#services"
                  className="flex items-center justify-center gap-x-3  bg-blue-600 hover:bg-blue-700 text-white hover:cursor-pointer py-2 px-2 rounded-md md:px-6"
                >
                  Explore Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="#partner"
                  className="border-blue-600 text-center border text-blue-600 hover:bg-blue-50 hover:cursor-pointer py-2 rounded-md px-8"
                >
                  Partner With Us
                </Link>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-900">7+</div>
                  <div className="text-sm text-gray-600">Countries Sourced</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-900">1000+</div>
                  <div className="text-sm text-gray-600">Products Imported</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-900">5+</div>
                  <div className="text-sm text-gray-600">African Markets</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/bg-hero.jpg"
                alt="African healthcare workers"
                width={750}
                height={750}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

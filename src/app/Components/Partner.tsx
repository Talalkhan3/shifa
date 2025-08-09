import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Partner = () => {
  return (
    <div>
      <section id="partner" className="py-20">
        <div className=" px-4 xl:px-32">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="bg-green-100 text-green-800 hover:bg-green-100 py-0.5 px-1.5 rounded-sm border border-green-800/50 ">
                Partnership Opportunities
              </span>
              <h2 className="text-3xl font-bold text-blue-900 sm:text-4xl mb-6">
                Join Our Mission to Transform African Healthcare
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Partner with Shifa Healthcare to expand your reach across
                African markets. We offer comprehensive support for
                pharmaceutical companies looking to make a meaningful impact.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-900">
                      Market Access
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Direct access to 15+ African markets with established
                      distribution networks
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-900">
                      Regulatory Expertise
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Complete regulatory support and compliance management
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-900">
                      Local Partnerships
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Strong relationships with healthcare providers and
                      institutions
                    </p>
                  </div>
                </div>
              </div>
              <Link href="#contact">
                <button className="flex items-center justify-center gap-x-2  bg-blue-600 hover:bg-blue-700 text-white hover:cursor-pointer py-2 px-4 rounded-md md:px-6">
                  Become a Partner
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </Link>
            </div>

            <div className="relative">
              <Image
                src="/partner.jpg"
                alt="Partnership meeting"
                width={800}
                height={500}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partner;

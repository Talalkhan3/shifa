import { Stethoscope, Truck, Users } from "lucide-react";
import Image from "next/image";

const Service = () => {
  return (
    <div>
      <section id="services" className="py-20 ">
        <div className=" px-4 xl:px-32">
          <div className="text-center space-y-4 mb-16">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-sm">Our Services</span>
            <h2 className="text-3xl font-bold text-blue-900 sm:text-4xl">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From sourcing to delivery, we provide end-to-end pharmaceutical
              import services tailored to meet Africa &lsquo s healthcare needs.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <div className=" shadow-lg p-7 rounded-md border border-neutral-200">
                <div className="flex flex-row items-center space-y-0 pb-4">
                  <div className="w-10 h-10 flex items-center justify-center mr-4 rounded-md border border-neutral-200 bg-neutral-100 text-neutral-500 ">
                    <Stethoscope className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h1 className="text-blue-900 font-bold">Pharmaceutical Imports</h1>
                    <p>Certified medicines and medical supplies</p>
                  </div>
                </div>
                <div>
                  <p className="text-gray-600">
                    Import of prescription drugs, over-the-counter medications,
                    and specialized treatments from approved manufacturers
                    worldwide.
                  </p>
                </div>
              </div>

              <div className="shadow-lg p-7 rounded-md border border-neutral-200">
                <div className="flex flex-row items-center space-y-0 pb-4">
                  <div className="w-10 h-10 flex items-center justify-center mr-4 rounded-md border border-neutral-200 bg-neutral-100 text-neutral-500 ">
                    <Truck className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h1 className="text-blue-900 font-bold">
                      Logistics & Distribution
                    </h1>
                    <p>Efficient supply chain management</p>
                  </div>
                </div>
                <div>
                  <p className="text-gray-600">
                    Temperature-controlled storage and distribution network
                    ensuring product integrity from import to final delivery
                    across Africa.
                  </p>
                </div>
              </div>

              <div className=" shadow-lg p-7 rounded-md border border-neutral-200">
                <div className="flex flex-row items-center space-y-0 pb-4">
                  <div className="w-10 h-10 flex items-center justify-center mr-4 rounded-md border border-neutral-200 bg-neutral-100 text-neutral-500 ">
                    <Users className="h-5 w-5 text-blue-600 " />
                  </div>
                  <div>
                    <h1 className="text-blue-900 font-bold">Regulatory Support</h1>
                    <p>Compliance and documentation assistance</p>
                  </div>
                </div>
                <div>
                  <p className="text-gray-600">
                    Complete regulatory support including import permits,
                    customs clearance, and compliance with local pharmaceutical
                    regulations.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/bg-ser.jpg"
                alt="Pharmaceutical logistics"
                width={800}
                height={700}
                className="rounded-2xl shadow-xl "
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;

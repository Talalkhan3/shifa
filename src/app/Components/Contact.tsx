import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <div>
      <section id="contact" className="py-20 bg-white">
        <div className=" px-4 md:px-6 xl:px-32">
          <div className="text-center space-y-4 mb-16">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-sm">
              Contact Us
            </span>
            <h2 className="text-3xl font-bold text-blue-900 sm:text-4xl">
              Ready to Transform Healthcare Together?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get in touch with our team to discuss your pharmaceutical import
              needs or partnership opportunities.
            </p>
          </div>

          <div className="w-full px-4 xl:px-32">
            <div className="space-y-8 flex items-center justify-center max-md:flex-col gap-x-32">
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Phone className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-blue-900">Phone</p>
                      <p className="text-gray-600">+250 788 123 456</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-blue-900">Email</p>
                      <p className="text-gray-600">info@shifahealthcare.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-blue-900">Address</p>
                      <p className="text-gray-600">
                        Kigali, Rwanda
                        <br />
                        East Africa
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl">
                <h4 className="font-bold text-blue-900 mb-2">Business Hours</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className=" bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl flex flex-col items-center mt-10">
                <div className="py-3">
                    <h1 className="text-4xl max-w-[600px] font-bold text-center text-blue-900">Share your Feedback or Partner with us!</h1>
                </div>
                <Link href="https://form.typeform.com/to/RjcsaIW4" className=" text-center bg-blue-800 rounded-md text-xl py-3 font-bold text-white mt-5 px-10">
                Lets Talk !
                </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

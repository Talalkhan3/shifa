import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      {" "}
      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className=" px-4 md:px-6 xl:px-32">
          <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4 flex flex-col justify-center items-center max-w-[400px]">
              <Image src="/logo.svg" alt="Logo" width={200} height={30} />

              <p className="text-blue-100 text-sm">
                Delivering healing and empowering Africa through quality
                pharmaceutical imports and healthcare solutions.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-blue-100">
                <li>
                  <Link
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#partner"
                    className="hover:text-white transition-colors"
                  >
                    Partnerships
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-blue-100">
                <li>+250 788 123 456</li>
                <li>info@shifahealthcare.com</li>
                <li>Kigali, Rwanda</li>
                <li>East Africa</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-sm text-blue-100">
            <p>
              &copy; {new Date().getFullYear()} Shifa Healthcare. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

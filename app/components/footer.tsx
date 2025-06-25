import React from "react";
import Image from "next/image";
import y4s from "@/public/y4s.png";
import effm from "@/public/effm.jpg"
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";

import { SiWhatsapp } from "react-icons/si";

import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1A1D2B] pt-12 pb-6 px-10 tracking-wide">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-6">
          <div className="space-y-4">
            <div>

            <Link href="/" legacyBehavior>
              <a>
                <div className="grid items-center grid-cols-2 space-x-2 text-2xl font-medium gap-2">
                  <Image
                    src={effm}
                    style={{
                      width: "200px",
                      display: "block",
                      cursor: "pointer",
                      border: "1px solid white",
                      background: "white",
                    }}
                    alt="gallery images"
                    width={0}
  height={0}
                  />

<Image
                    src={y4s}
                    style={{
                      width: "200px",
                      display: "block",
                      cursor: "pointer",
                      border: "1px solid white",
                      background: "white",
                    }}
                    alt="gallery images"
                    width={0}
  height={0}
                  />
                </div>
              </a>
              </Link>
              <br />
              <p className="text-gray-300 mb-5">
                Elijah&apos;s fire faith ministry & Yes4Save Foundation.
              </p>
            </div>

            <div className="flex space-x-3 items-center">

              <p className="font-semibold text-white">
            Effm: 
            </p>
            <Link href="https://www.facebook.com/people/Eff-M/pfbid0zq5hjCndZpBZ2gecViT7KgB5FLns7qpnPnXH7jjy33b4urGCbLgXB6nvSnXvvt8nl/" legacyBehavior>
              <a
                target="_blank"
                className="text-gray-200 hover:text-gray-200"
              >
                <FaFacebookSquare />
              </a>
              </Link>

              <Link href="https://www.instagram.com/ikkalaeliyah" legacyBehavior>
              <a
                target="_blank"
                className="text-gray-200 hover:text-gray-200"
              >
                <FaInstagram />
              </a>
              </Link>

              <Link href="https://chat.whatsapp.com/CgCE8Legr5RJMRnh9JehuU" legacyBehavior>
              <a
                target="_blank"
                className="text-gray-200 hover:text-gray-200"
              >
                <SiWhatsapp />
              </a>
              </Link>

              <Link href="https://youtube.com/@effm_yes4save?si=yF9Plm9FvV4-wxbt" legacyBehavior>
              <a
                target="_blank"
                className="text-gray-200 hover:text-gray-200"
              >
                <FaYoutube />
              </a>
              </Link>
            </div>
            
            <div className="flex space-x-3 items-center">
              <p className="font-semibold text-white">
            Yes4save:
            </p>
            <Link href="https://www.facebook.com/share/19NFAmtccv/?mibextid=wwXIfr" legacyBehavior>
              <a
                target="_blank"
                className="text-gray-200 hover:text-gray-200"
              >
                <FaFacebookSquare />
              </a>
              </Link>

              <Link href="https://www.instagram.com/yes4save?igsh=MXF6cDE2aml4aHE4ZA==" legacyBehavior>
              <a
                target="_blank"
                className="text-gray-200 hover:text-gray-200"
              >
                <FaInstagram />
              </a>
              </Link>

              <Link href="https://wa.me/918123678440" legacyBehavior>
              <a
                target="_blank"
                className="text-gray-200 hover:text-gray-200"
              >
                <SiWhatsapp />
              </a>
              </Link>

              <Link href="https://youtube.com/@effm_yes4save?si=yF9Plm9FvV4-wxbt" legacyBehavior>
              <a
                target="_blank"
                className="text-gray-200 hover:text-gray-200"
              >
                <FaYoutube />
              </a>
              </Link>
            </div>

          </div>
          
          <div>
          <span className="mb-3 flex size-10 flex-col items-center justify-center rounded-full bg-accent">
              <Mail className="h-5 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold text-white">Email Us</p>
            <p className="mb-3 text-gray-400 text-xs">
              For feedbacks & assistance.
            </p>
             <Link href="mailto:ikkalaeliyah@gmail.com" legacyBehavior>
            <a className="font-semibold hover:underline text-white">
            Effm: ikkalaeliyah@gmail.com
            </a>
            </Link> <br/>
            <Link href="mailto:yes4save@gmail.com" legacyBehavior>
            <a className="font-semibold hover:underline text-white">
            Yes4save: yes4save@gmail.com
            </a>
            </Link>
          </div>

          <div className="mr-8 mb-5">
          <span className="mb-3 flex size-10 flex-col items-center justify-center rounded-full bg-accent">
              <Phone className="h-5 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold text-white"> Call Us</p>
            <p className="mb-3 text-gray-400 text-xs">
              We&apos;re available Mon-Fri, 9am-5pm.
            </p>
             <Link href="tel:9092392831" legacyBehavior>
            <a className="font-semibold hover:underline text-white">
             Effm: +91-9092392831
            </a>
            </Link><br/>
            <Link href="tel:8123678440" legacyBehavior>
            <a className="font-semibold hover:underline text-white">
             Yes4save: +91-8123 678440
            </a>
            </Link>
          </div>

          <div>
            <span className="mb-3 flex size-10 flex-col items-center justify-center rounded-full bg-accent">
              <MapPin className="h-5 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold text-white">Visit Us</p>
            <p className="mb-3 text-gray-400 text-xs">
              Drop by our office for a chat.
            </p>

            
            <address className="font-semibold text-white not-italic">
            No: 2/432, Kandhasamy Nagar, 7th Street, palavakkam, chennai-41.
            </address>
           
          </div>
        </div>

        <h3 className="text-md font-semibold leading-6 text-white pt-10 underline underline-offset-2">Useful links</h3>

        
                    <div className="md:grid md:grid-cols-3 grid-cols-3 md:gap-8 pb-5">
                        <div>
                            
                            <ul role="list" className="mt-6 space-y-4">
                                <li>
                                <Link href="/donate?modal=1" legacyBehavior>
                                    <a
                                        className="text-md leading-6 text-gray-300 hover:text-gray-50">Donate
                                    </a>
                                    </Link>
                                </li>
                                <li>
                                <Link href="/volunteer" legacyBehavior>
                                    <a
                                        className="text-md leading-6 text-gray-300 hover:text-gray-50">Volunteer
                                    </a>
                                </Link>
                                </li>
                                <li>
                                <Link href="/prayer" legacyBehavior>
                                    <a
                                        className="text-md leading-6 text-gray-300 hover:text-gray-50">Prayer Request
                                    </a>
                                    </Link>
                                </li>
                                <li>
                                <Link href="/help" legacyBehavior>
                                    <a
                                        className="text-md leading-6 text-gray-300 hover:text-gray-50">Help Request
                                    </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-10 md:mt-0">
                            
                            <ul role="list" className="mt-6 space-y-4">
                          
                                <li>
                                <Link href="/about/effm" legacyBehavior>
                                    <a
                                        className="text-md leading-6 text-gray-300 hover:text-gray-50">Elijah&apos;s Fire Faith Ministry
                                    </a>
                                    </Link>
                                </li>

                                <li>

                                <Link href="/about/y4s" legacyBehavior>
                                    <a
                                        className="text-md leading-6 text-gray-300 hover:text-gray-50">Yes4Save Foundation
                                    </a>
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>

                        <div className="mt-10 md:mt-0">
                            
                            <ul role="list" className="mt-6 space-y-4">
                                <li>
                                <Link href="/gallery" legacyBehavior>
                                    <a 
                                        className="text-md leading-6 text-gray-300 hover:text-gray-50">Image Gallery
                                    </a>
                                    </Link>
                                </li>
                                <li>
                                <Link href="/contact" legacyBehavior>
                                    <a
                                        className="text-md leading-6 text-gray-300 hover:text-gray-50">Contact details
                                    </a>
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    
                
            

        <p className="text-gray-200 text-xs mt-5">
          for websites & webapps contact @ JAI - 8610636851
        </p>
        <hr />
        <p className="text-gray-200 text-sm mt-5">
          © Yes4Save Foundation. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

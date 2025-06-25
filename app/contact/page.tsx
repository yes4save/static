import React from 'react'
import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaYoutube  } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import contactimage from "@/public/29.png"
import Image from 'next/image';

const page = () => {
  return (
    <div><section>
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
        <h1
          className="
            my-6
            lg:text-4xl text-3xl
            text-blue-900
            font-oswald
            leading-[3.5rem] lg:leading-[4rem]
            font-semibold
            relative
            text-center
          "
        >
          Contact Us
          <span className="block h-1 w-40 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 rounded mt-2 mx-auto" />
        </h1>
<p className="lg:text-2xl  md:text-xl text-xl lg:px-2 text-gray-800 pb-3">Welcome! If you&apos;re looking for prayer, have questions about our mission, or feel inspired to connect, we&apos;re here for you. At <b>Elijah&apos;s Fire Faith Ministry and Yes4save Foundation</b>, every voice is valued and every heart is seen. Let us walk together in faith and love.
</p>
        </div>
        <div className="mt-16 lg:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="rounded-lg overflow-hidden border-2">
                    <Image
                    src={contactimage}
                    style={{
                      width: "100%",
                      display: "block",
                      cursor: "pointer",
                      border: "1px solid white",
                      background: "white",
                    }}
                    alt="contact image"
                  />
                </div>
                <div>
                    <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                        <div className="px-6 py-4">
                            <h3 className="text-lg font-medium text-gray-900">Our Address</h3>
                            <address className="mt-1 text-gray-600 not-italic">No: 2/432, Kandhasamy Nagar, 7th Street, palavakkam, chennai-41.</address>
                        </div>

                        
                        <div className="border-t border-gray-400 px-6 py-4">
                            <h3 className="text-lg font-medium text-gray-900">Contact</h3>
                            <p className="mt-1 text-gray-600">Email: yes4save@gmail.com</p>
                            <p className="mt-1 text-gray-600">Phone: +91 8123 678440</p>
                        </div>

                        <div className="px-6 py-4 border-t border-gray-400">
                        <h3 className="text-lg font-medium text-gray-900">Social Media</h3>
                        <div className="flex space-x-3 mt-1">
            <Link href="https://www.facebook.com/share/19NFAmtccv/?mibextid=wwXIfr" legacyBehavior>
              <a
                target="_blank"
                className="text-gray-600 hover:text-gray-400"
              >
                <FaFacebookSquare />
              </a>
              </Link>

              <Link href="https://www.instagram.com/yes4save?igsh=MXF6cDE2aml4aHE4ZA==" legacyBehavior>
              <a
                target="_blank"
                className="text-gray-600 hover:text-gray-400"
              >
                <FaInstagram />
              </a>
              </Link>

              <Link href="https://wa.me/918123678440" legacyBehavior>
              <a
                target="_blank"
                className="text-gray-600 hover:text-gray-400"
              >
                <SiWhatsapp />
              </a>
              </Link>

              <Link href="https://youtube.com/@effm_yes4save?si=yF9Plm9FvV4-wxbt" legacyBehavior>
              <a
                target="_blank"
                className="text-gray-600 hover:text-gray-400"
              >
                <FaYoutube  />
              </a>
              </Link>
            </div>
            </div>

                    </div>
                </div>
            </div>

            <div className="pt-20 mx-auto">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdEvX5DvwZQcYjBN24v8bxbnjXYuPw2D8ElRM9cVpcLM8U1ig/viewform?embedded=true" width="100%" height="700" frameBorder="0">Loading…</iframe></div>
            
        </div>
    </div>
</section></div>
  )
}

export default page
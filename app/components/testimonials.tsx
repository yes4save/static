"use client"
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel" 
import { BsQuote } from "react-icons/bs";
import Image from 'next/image';

import Autoplay from "embla-carousel-autoplay"

const Testimonials = () => {
  const plugin = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: true }))
  return (
    <>
  <section className="flex flex-col items-center justify-center gap-8 lg:px-44 sm:px-5 md:px-5 overflow-hidden pt-16 lg:pb-10 border-b-rose-400 border-b-2 rounded-b-md">
    <h1 className="text-3xl lg:text-4xl font-bold text-center text-blue-900 mb-6 tracking-tight">
  Testimonials
  <span className="block mx-auto mt-2 h-1 w-24 bg-gradient-to-r from-rose-400 via-red-400 to-amber-400 rounded-full" />
</h1>
     <p className="text-center text-gray-600 max-w-2xl mx-auto text-lg px-3">
    At Elijah&apos;s Fire Faith Ministry and Yes4save Foundation, we believe that the power of testimonial is a powerful tool to encourage faith and inspire others. God is doing incredible things through our ministries, and we want to share those stories of transformation, healing and miracles with you.
  </p>
    <BsQuote className="size-10 text-gray-500 -mt-4" />
    
    <Carousel
      opts={{ align: "start" }}
      className="w-72 md:w-xl lg:w-full max-w-5xl mt-10"
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="-mt-1 h-[1350px] md:h-[1000px] lg:h-[500px] text-lg font-serif">
        {/* === Testimonial Item 1 === */}
        <CarouselItem className="pt-1 md:basis-1/1">
          <div className="mx-auto bg-blue-50 shadow-md overflow-hidden rounded-md">
            <div className="md:flex">
              <div className="md:shrink-0">
                <Image
                  src="/test1.jpg"
                  alt="Indhumathi"
                  width={250}
                  height={250}
                  className="mx-auto border bg-white"
                />
              </div>
              <div className="px-2 pb-4">
                <p className="mt-2 text-gray-900">
                  &quot;I got married in 2016 and faced many struggles early in my married life. For 5 years, I didn&apos;t have a child, and it was mentally very hard. I shared my problems with my college friend Raghavi, and she encouraged me to pray and trust Jesus.
                  <br /><br />
                  I&apos;ve loved Jesus since school, but at home, I was scolded for reading the Bible, so I had stopped. Still, my heart was always with Jesus. Quietly, I started joining prayer again. Sister Deepa gave me a lot of guidance. Through Raghavi and Deepa, Jesus called me back to Him.
                  <br /><br />
                  I began reading the Bible daily on my phone and joined night prayers. In 2022, I became pregnant, but during that time, I lost my father, who meant the world to me. I prayed, and Jesus gave me strength.
                  <br /><br />
                  By God&apos;s grace, though my baby girl was born prematurely, she is healthy now, and family problems were also resolved. Truly, nothing is impossible for God. Those who trust in Jesus will never be forsaken.&quot;
                </p>
                <div className="mt-4">
                  <span className="text-slate-900">Praise the Lord Jesus… Amen.</span>
                  <span className="text-slate-900 font-bold"> - Sis. Indhumathi</span>
                </div>
              </div>
            </div>
          </div>
        </CarouselItem>

        {/* === Testimonial Item 2 === */}
        <CarouselItem className="pt-1 md:basis-1/1">
          <div className="mx-auto bg-blue-50 shadow-md overflow-hidden rounded-md">
            <div className="md:flex">
              <div className="md:shrink-0">
                <Image
                  src="/test2.jpg"
                  alt="Sis. Bhuvana"
                  width={250}
                  height={250}
                  className="mx-auto border bg-white"
                />
              </div>
              <div className="px-2 pb-4">
                <p className="mt-2 text-gray-900">
                  &quot;Praise be to the Holy Name of the Lord! 🙏
                  <br /><br />
                  Last month, I had to take my mother for an orthopedic check-up. Last year was a tough time, but by God&apos;s grace, He protected her life and helped her walk without a walker within four months. I thank God and pray He blesses everyone who supported us. 👏
                  <br /><br />
                  After a year, we were unsure if the rod needed to be removed and whether her bones had healed. But we continued to pray in faith. God gave us a promise: &quot;I will make your bones strong.&quot; He led us to a nearby hospital, and to our joy, the doctor said her bones had healed perfectly, and the rod didn&apos;t need to be removed.
                  <br /><br />
                  I thank and praise Jesus for healing my mother and making her walk again. A special thanks to Yes4Save Foundation, who helped us with her medical expenses on time.&quot;
                </p>
                <div className="mt-4">
                  <span className="text-slate-900">May God richly bless them. 🙏</span>
                  <span className="text-slate-900 font-bold"> - Sis. Bhuvana</span>
                </div>
              </div>
            </div>
          </div>
        </CarouselItem>

        {/* === Testimonial Item 3 === */}
        <CarouselItem className="pt-1 md:basis-1/1">
          <div className="mx-auto bg-blue-50 shadow-md overflow-hidden rounded-md">
            <div className="md:flex">
              <div className="md:shrink-0">
                <Image
                  src="/test3.jpg"
                  alt="Sis. Amruta"
                  width={250}
                  height={250}
                  className="mx-auto border bg-white"
                />
              </div>
              <div className="px-2 pb-4">
                <p className="mt-2 text-gray-900">
                  &quot;Glory to God.. This ministry is a powerful prayer ministry.. A few months back, they collected names of unmarried people and prayed for 21 days for 1 hour on Zoom as led by the Holy Spirit.
                  <br /><br />
                  By God&apos;s grace I got engaged even before completing the 21 days of prayer.
                  <br /><br />
                  My friend Subha also got married whose name was also mentioned in the list. We both waited for many years for our marriage and finally it happened soon after the 21 days of prayer.
                  <br /><br />
                  Thanks to our loving Daddy Jesus who heard the prayers of this ministry. Thanks to Raghavi sis who initiated this prayer by obeying God&apos;s voice.&quot;
                </p>
                <div className="mt-4">
                  <span className="text-slate-900">Praise the Lord… Amen.</span>
                  <span className="text-slate-900 font-bold"> - Sis. Amruta</span>
                </div>
              </div>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>

      <CarouselPrevious className="cursor-pointer" />
      <CarouselNext className="cursor-pointer" />
    </Carousel>
  </section>

</>

  )
}

export default Testimonials
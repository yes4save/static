"use client"

import React from "react"
import Autoplay from "embla-carousel-autoplay"

import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

import Image from "next/image"

import Link from "next/link";

import image1 from '@/public/34.jpg'
import image2 from '@/public/10.jpg'
import image3 from '@/public/32.jpg'
import image4 from '@/public/7.jpg'
import image5 from '@/public/35.jpg'
import image6 from '@/public/5.jpg'
import image7 from '@/public/33.jpg'
import image8 from '@/public/6.jpg'
import image9 from '@/public/9.jpg'
import image10 from '@/public/2.jpg'
import image11 from '@/public/23.png'
import image12 from '@/public/4.jpg'
import image13 from '@/public/39.jpeg'
import image14 from '@/public/40.jpeg'
import image15 from '@/public/25.png'
import image16 from '@/public/8.jpg'


export function Slider() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))
  

  return (
    <>
  <div className="overflow-hidden px-6 py-16 border-b-rose-400 border-b-2 rounded-b-md">
    <div className="text-center mb-10">
      <h1 className="text-3xl lg:text-4xl font-bold text-center text-blue-900 mb-6 tracking-tight">
  Gallery
  <span className="block mx-auto mt-2 h-1 w-24 bg-gradient-to-r from-rose-400 via-red-400 to-amber-400 rounded-full" />
</h1>
     <p className="text-center text-gray-600 max-w-2xl mx-auto text-lg px-3">
    Take a glimpse into the moments of hope and change we&apos;ve created.
  </p>
    </div>

    <Carousel
      plugins={[plugin.current]}
      className="lg:w-full w-72 md:w-xl max-w-5xl mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="gap-8">
        {[image9, image3, image1, image2, image5, image4, image10, image8, image7, image6,image11, image12, image13, image14, image15,image16,].map((img, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/2 flex justify-center items-center p-2"
          >
            <div className="w-[90%] max-w-sm overflow-hidden rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition duration-300 flex justify-center items-center bg-white cursor-pointer">
              <Image
                src={img}
                alt={`Gallery image ${index + 1}`}
                className="object-contain max-h-80"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="mt-2 cursor-pointer" />
      <CarouselNext className="mt-2 cursor-pointer" />
    </Carousel>

    <Link href="/gallery" legacyBehavior>
      <a className="mt-10 flex items-center justify-center text-red-700 text-base md:text-lg font-semibold transition-colors group">
        View more
        <MdOutlineKeyboardDoubleArrowRight className="ml-2 mt-1 size-5 transition-transform group-hover:translate-x-1" />
      </a>
    </Link>
  </div>
</>

  )
}


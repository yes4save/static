
import {Heart} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


const Hero = ({
  heading = "Elijah's Fire Faith Ministry & Yes4save Foundation",
  description = `"The Spirit of the Lord God is upon me,because the Lord has anointed meto bring good news to the poor; he has sent me to bind up the brokenhearted, to proclaim liberty to the captives,and the opening of the prison to those who are bound;" - Isaiah 61:1`,
  buttons = {
    primary: {
      text: "DONATE",
      url: "/donate?modal=1",
    },
    secondary: {
      text: "VOLUNTEER",
      url: "/volunteer",
    },
  },
  image = {
    src: "/1.jpg",
    alt: "Hero image",
  },
}) => {
  
  return (
    <section className="relative pt-20 pb-10 bg-gradient-to-b from-[#FFFAF7] to-[#FFF5EE] lg:px-20 px-6 lg:pt-32 lg:pb-16  overflow-hidden border-b-rose-400 border-b-2 rounded-b-3xl">
  {/* Slight pink shade overlay */}
  <div className="absolute inset-0 bg-pink-50 opacity-30 pointer-events-none -z-10"></div>

  <div className="container mx-auto relative z-10">
    <div className="grid items-center gap-8 lg:grid-cols-2">
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
        <h1
          className="
            my-6
            text-4xl lg:text-6xl
            text-blue-900
            font-oswald
            leading-[3.5rem] lg:leading-[4rem]
            font-semibold
            relative
          "
        >
          {heading}
          <span className="block h-1 w-full lg:w-40 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 rounded mt-2" />
        </h1>
        <p
          className="
            mb-8
            max-w-xl
            text-gray-700
            lg:text-xl
            font-unna
            italic
          "
        >
          {description}
        </p>
        <div className="flex w-full flex-col justify-center gap-4 sm:flex-row lg:justify-start">
          {buttons.primary && (
            <Link href={buttons.primary.url} legacyBehavior>
              <a>
                <Button
                  className="
                    w-full sm:w-auto
                    bg-gradient-to-r from-[#e91347] via-[#fc144d] to-[#e91347]
                    text-white
                    py-4 px-6
                    font-semibold
                    rounded-lg
                    shadow-lg
                    transition
                    duration-300
                    ease-in-out
                    flex items-center gap-3
                    group
                    hover:shadow-2xl
                    hover:scale-105
                    focus:outline-none
                    focus:ring-4
                    focus:ring-red-400
                    focus:ring-opacity-50
                    cursor-pointer
                  "
                >
                  {buttons.primary.text}
                  <Heart
                    className="
                      w-5 h-5
                      transition-transform
                      duration-300
                      ease-in-out
                      group-hover:animate-bounce
                    "
                  />
                </Button>
              </a>
            </Link>
          )}
        </div>
      </div>

      <div className="flex justify-center">
        <Image
          src={image.src}
          alt={image.alt}
          className="max-h-96 w-full rounded-sm object-cover shadow-lg"
          width={600}
          height={400}
          loading="lazy"
        />
      </div>
    </div>
  </div>
</section>


  );
};

export default Hero;

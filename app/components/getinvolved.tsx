import { Heart, Hand, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link";
import { FaHandsHelping, FaCross } from "react-icons/fa";





const GetInvolved = () => {
  return (
    <div className="container mx-auto py-16 px-4 md:px-6 lg:px-20 border-b-rose-400 border-b-2 rounded-b-md bg-gradient-to-b from-[#FFFAF7] to-[#FFF5EE]">
  <h1 className="text-3xl lg:text-4xl font-bold text-center text-blue-900 mb-6 tracking-tight">
  Support Our Community
  <span className="block mx-auto mt-2 h-1 w-24 bg-gradient-to-r from-rose-400 via-red-400 to-amber-400 rounded-full" />
</h1>
  <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
    Join us in making a difference through donations, volunteering, prayer, or requesting assistance.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {[
      {
        title: "Donate",
        description: "Your generosity helps us continue our mission and support those in need.",
        icon: <Heart className="h-6 w-6 text-white" />,
        iconBg: "bg-rose-500",
        buttonBg: "bg-rose-500",
        buttonHover: "hover:bg-rose-600",
        image: "/7.jpg",
        button: "Make a donation",
        url: "/donate?modal=1",
      },
      {
        title: "Volunteer",
        description: "Join our team of volunteers and make a meaningful impact in our community.",
        icon: <Hand className="h-6 w-6 text-white" />,
        iconBg: "bg-blue-500",
        buttonBg: "bg-blue-500",
        buttonHover: "hover:bg-blue-600",
        image: "/34.jpg",
        button: "Become a volunteer",
        url: "/volunteer",
      },
      {
        title: "Prayer Request",
        description: "Share your prayer needs with our community.",
        icon: <FaCross className="h-6 w-6 text-white" /> ,
        iconBg: "bg-amber-400",
        buttonBg: "bg-amber-400",
        buttonHover: "hover:bg-amber-500",
        image: "/22.webp",
        button: "Request prayer",
        url: "/prayer",
      },
      {
        title: "Request Help",
        description: "If you or someone you know need help, we're here to help with resources.",
        icon: <FaHandsHelping className="h-6 w-6 text-white" />,
        iconBg: "bg-emerald-500",
        buttonBg: "bg-emerald-500",
        buttonHover: "hover:bg-emerald-600",
        image: "/4.jpg",
        button: "Get help",
        url: "/help",
      },
    ].map((item, index) => (
      <Link href={item.url} key={index} legacyBehavior>
      <Card
        className="group cursor-pointer overflow-hidden border-0 rounded-2xl shadow-lg hover:shadow-xl transform transition-transform duration-500 hover:-translate-y-1 h-[300px] relative"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0 group-hover:scale-105 transition-transform duration-700 ease-in-out"
          style={{ backgroundImage: `url('${item.image}')` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-90" />

        {/* Content */}
        <div className="absolute top-0 left-0 w-full h-full p-6 flex flex-col justify-between z-20">
          {/* Icon with individual color */}
          <div
            className={`w-12 h-12 rounded-full ${item.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md`}
          >
            {item.icon}
          </div>

          {/* Text */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-white/90 transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-white/90 mb-4 text-sm leading-relaxed">{item.description}</p>
            <Button
              className={`${item.buttonBg} ${item.buttonHover} text-white text-sm border-none transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg flex items-center px-4 py-2 cursor-pointer`}
            >
              {item.button}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </Card>
      </Link>
    ))}
  </div>
</div>


  );
};

export { GetInvolved };

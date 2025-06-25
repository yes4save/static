import { BookHeart, Goal} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import banner from '@/public/banner.jpg'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";


interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
  icon?: React.ReactNode;
}

interface Feature73Props {
  heading?: string;
  description?: string;
  linkUrl?: string;
  linkText?: string;
  features?: Feature[];
}

const Welcome = ({
  
  features = [
    {
      id: "feature-1",
      title: "OUR MISSION",
      description:"As a startup Ministry and NGO, our mission is to ignite the fire of God’s Spirit  through evangelism, revival events and humanitarian outreach. We are dedicated to transforming lives,  spreading the Gospel and bringing  hope to those in need.",
      image: "2.jpg",
      icon: <Goal className="size-7 shrink-0 ml-2" />,
    },
    {
      id: "feature-2",
      title: "OUR VISION AND VALUES",
      description:"We believe in a world where no one is forgotten, where love and kindness reach every corner, and where faith moves mountains. Guided by Christ’s teachings, we strive to uplift the poor, feed the hungry, and bring hope to the brokenhearted.",
      image: "35.jpg",
      icon: <BookHeart className="size-7 shrink-0 ml-2" />,
    },
  ],
}: Feature73Props) => {
  return (
    <section className="pb-10 bg-gray-50 pt-10 border-b-rose-400 border-b-2 rounded-b-md">
  <div className="container mx-auto flex flex-col gap-16 px-4 lg:px-36">

    {/* Title & Description */}
    <div className="text-center bg-white px-4 py-10 rounded-xl shadow-md border-b-gray-400 border-b-2">
      
      <Image
      src={banner}
      alt="about banner"
      className="w-full border border-gray-300 bg-white rounded-lg mb-10"
    />
      <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-serif max-w-5xl mx-auto">
        Welcome to <span className="font-semibold">Elijah&apos;s Fire Faith Ministry and Yes4Save Foundation</span>,
        where our mission is to ignite the fire of God&apos;s Spirit through evangelism, revival events, and humanitarian outreach.
        We are dedicated to transforming lives, spreading the Gospel, and bringing hope to those in need.
      </p>
       
       <div className="grid md:grid-cols-2 lg:w-1/2 mx-auto">

    <Link href="/about/effm" legacyBehavior>
      <a className="mt-2 flex items-center justify-center text-red-700 text-base md:text-lg font-semibold transition-colors group">
        View more about our Ministry
        <MdOutlineKeyboardDoubleArrowRight className="ml-2 mt-1 size-5 transition-transform group-hover:translate-x-1" />
      </a>
    </Link>

    <Link href="/about/y4s" legacyBehavior>
      <a className="mt-2 flex items-center justify-center text-red-700 text-base md:text-lg font-semibold transition-colors group">
        View more about our NGO
        <MdOutlineKeyboardDoubleArrowRight className="ml-2 mt-1 size-5 transition-transform group-hover:translate-x-1" />
      </a>
    </Link>
    
    </div>

    </div>

    {/* Features Grid */}
    <div className="grid gap-8 md:grid-cols-2">
      {features.map((feature) => (
        <div
          key={feature.id}
          className="rounded-2xl overflow-hidden bg-white shadow-md border-b-gray-400 border-b-2 transition-shadow"
        >
          <Image
            src={feature.image}
            alt={feature.title}
            className="w-full h-72 object-cover"
            width={100}
            height={100}
          />
          <div className="p-6 lg:p-8">
            <h3 className="text-xl lg:text-2xl font-semibold text-blue-800 flex items-center gap-2 mb-4">
              {feature.title} {feature.icon}
            </h3>
            <p className="text-gray-600 text-base lg:text-lg font-serif leading-relaxed">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

  );
};

export default Welcome ;

  
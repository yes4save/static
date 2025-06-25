import React from 'react'
import Image from 'next/image';
import banner from '@/public/banner.jpg'
import Link from 'next/link';




const MinistryPage = () => {
  return (
    <div>
      
      <div className="overflow-hidden">
      <div className="container text-center mt-10 py-5 mx-auto lg:max-w-5xl md:max-w-xl rounded-md">
      <Image
                    src={banner}
                    style={{
                      width: "100%",
                      display: "block",
                      cursor: "pointer",
                      border: "1px solid white",
                      background: "white",
                    }}
                    alt="about banner"
                  />
                  <div>
                    <p></p>
      <Link href="mailto:ikkalaeliyah@gmail.com" legacyBehavior>
            <a className="font-semibold hover:underline text-black">
            Mail to our ministry: ikkalaeliyah@gmail.com
            </a>
            </Link><br/>
            <Link href="tel:9092392831" legacyBehavior>
            <a target="_blank" className="font-semibold hover:underline text-black">
            Speak to our Ministry: +91-9092392831
            </a>
            </Link>
            <br/>
            <Link href="https://chat.whatsapp.com/CgCE8Legr5RJMRnh9JehuU" legacyBehavior>
            <a target="_blank" className="font-semibold hover:underline text-black">
            Join our Ministry&apos;s Whatsapp group
            </a>
            </Link>

            <div className="px-6 pt-5 border-t border-gray-400">
  
                       
            </div>

            </div>
      </div>
    </div>
      
    <section className="pb-16 ">
      <div className="container max-w-6xl mx-auto">
        <div className="relative grid gap-16 md:grid-cols-2">
          <div className="top-40 h-fit md:sticky px-5">

            <h1
          className="
            mb-6
            lg:text-4xl text-3xl
            font-oswald
            leading-[3.5rem] lg:leading-[4rem]
            font-semibold
            relative
          "
        >
          <span className="text-red-600">Elijah&apos;s Fire Faith Ministry</span> (Evangelism & Outreach)
          <span className="block h-1 w-full lg:w-40 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 rounded mt-2" />
        </h1>
            
            <p className="mt-4 text-gray-800 text-lg">
            We spread the Gospel through local and global outreach programs, revival, healing prayer meet  as  online evangelism. Our mission is to bring the light of Christ to the world and help transform lives. The following are our ministry activities:
            </p>


          </div>
          <div className="flex flex-col gap-12 md:gap-20">
            
              <div  className="rounded-xl border-2 p-2 m-2">
              <iframe width="auto" height="auto" src="https://www.youtube.com/embed/tXkNOIxTNAQ?si=XVh8bG7SMGBHWyNl" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className='lg:h-60 lg:w-96 mx-auto'></iframe>
                <div className="p-6">
                  <h3 className="mb-1 text-2xl font-semibold text-red-600">
                  Revival & Healing Meetings
                  </h3>
                  <p className="text-gray-800">Through powerful revival events, we aim to  ignite faith, see  miracles  happend and experience spiritual renewal. Our focus is on healing, deliverance and reviving hearts for God.</p>
                </div>
              </div>


              <div  className="rounded-xl border-2 p-2 m-2">
              <iframe width="auto" height="auto" src="https://www.youtube.com/embed/1E1F544KQPU?si=2Z89jiRCwO9qBYRh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className='lg:h-60 lg:w-96 mx-auto'></iframe>
                <div className="p-6">
                  <h3 className="mb-1 text-2xl font-semibold text-red-600">
                  Children & Youth Outreach
                  </h3>
                  <p className="text-gray-800">Mentorship programs, tutoring, and faith-based youth activities that empower the next generation with God&apos;s truth, academic support and positive role models.</p>
                </div>
              </div>


              <div  className="rounded-xl border-2 p-2 m-2">
              <iframe width="auto" height="auto" src="https://www.youtube.com/embed/kAiYICtKF-0?si=jdGN9vlNJ-XEDvkt" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className='lg:h-60 lg:w-96 mx-auto'></iframe>
                <div className="p-6">
                  <h3 className="mb-1 text-2xl font-semibold text-red-600">
                  Worship & Music Ministry
                  </h3>
                  <p className="text-gray-800">Leading worship sessions, gospel concerts, and musical outreach to bring people together in praise and experience the joy of the Lord.</p>
                </div>
              </div>


              <div  className="rounded-xl border-2 p-2 m-2">
              <iframe width="auto" height="auto" src="https://www.youtube.com/embed/Tdem0fL8st8?si=9PpmhLhuAP4mq5Vw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className='lg:h-60 lg:w-96 mx-auto'></iframe>
                <div className="p-6">
                  <h3 className="mb-1 text-2xl font-semibold text-red-600">
                  Digital Evangelism & Online Ministry
                  </h3>
                  <p className="text-gray-800">Sharing devotionals, sermons, and testimonies through social media, livestreams, and online Bible studies—spreading the Gospel globally.</p>
                </div>
              </div>


              <div  className="rounded-xl border-2 p-2 m-2">
              <iframe width="auto" height="auto" src="https://www.youtube.com/embed/ghljqb9gios?si=cF0-jXb9ZPnS7BdG" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className='lg:h-60 lg:w-96 mx-auto'></iframe>
                <div className="p-6">
                  <h3 className="mb-1 text-2xl font-semibold text-red-600">
                  Seasonal Outreach Events
                  </h3>
                  <p className="text-gray-800">Christmas toy drives, Thanksgiving meals, and back-to-school events—bringing joy and relief during key moments throughout the year.</p>
                </div>
              </div>

          
          </div>

          

         


        </div>
      </div>
    </section>
    </div>
  );
};

export default MinistryPage ;
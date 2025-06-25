'use client'

import React, {useState} from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Image from "next/image";
import { FaChevronLeft, FaChevronRight,FaTimes } from "react-icons/fa";

import image1 from '@/public/4.jpg'
import image2 from '@/public/10.jpg'
import image3 from '@/public/2.jpg'
import image4 from '@/public/1.jpg'
import image5 from '@/public/34.jpg'
import image6 from '@/public/5.jpg'
import image7 from '@/public/3.jpg'
import image8 from '@/public/6.jpg'
import image9 from '@/public/7.jpg'
import image10 from '@/public/35.jpg'
import image11 from '@/public/11.webp'
import image12 from '@/public/20.jpg'
import image13 from '@/public/13.jpeg'
import image14 from '@/public/14.png'
import image15 from '@/public/15.jpeg'
import image16 from '@/public/16.png'
import image17 from '@/public/17.png'
import image18 from '@/public/18.webp'
import image19 from '@/public/32.jpg'
import image20 from '@/public/33.jpg'
import image21 from '@/public/21.png'
import image22 from '@/public/22.webp'
import image23 from '@/public/23.png'
import image24 from '@/public/24.jpeg'
import image25 from '@/public/25.png'
import image26 from '@/public/26.webp'
import image27 from '@/public/27.webp'
import image28 from '@/public/28.jpg'
import image29 from '@/public/12.webp'
import image30 from '@/public/30.webp'
import image31 from '@/public/29.png'
import image32 from '@/public/9.jpg'
import image33 from '@/public/8.jpg'
import image34 from '@/public/19.png'
import image35 from '@/public/31.png'
import image36 from '@/public/36.jpeg'
import image37 from '@/public/37.jpeg'
import image38 from '@/public/38.jpeg'
import image39 from '@/public/39.jpeg'
import image40 from '@/public/40.jpeg'
import image41 from '@/public/41.jpeg'
import image42 from '@/public/42.jpeg'
import image43 from '@/public/43.jpeg'
import image44 from '@/public/44.jpeg'

const images = [
    image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,image13,image14,image15,image16,image17,image18,image19,image20,image21,image22,image23,image24,image25,image26,image27,image28,image29,image30,image31,image32,image33,image34,image35,image36,image37,image38,image39,image40,image41,image42,image43,image44,
 ]

const PhotoGallery = () => {

    const [data, setData] = useState({img:'', i: 0})

   const viewImage = (img, i) => {
       setData({img,i})
   }

   const imgAction = (action) => {
      let i = data.i;
      if(action === 'nxt-img'){
         setData({img: images[i+1], i: i+1});
      }
      if(action === 'pre-img'){
         setData({img: images[i-1], i: i-1});
      }
      if(!action){
         setData({img:'', i: 0});
      }
   }

  return (
    <div className="pt-24">
        
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
          Image Gallery
          <span className="block h-1 w-40 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 rounded mt-2 mx-auto" />
        </h1>

         {data.img &&
         <div style={{
            width:'100%',
            height:'100vh',
            background:'black',
            position: 'fixed',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            top:0,
            marginTop: '35px',
            cursor : 'pointer',
         }}>
            <button onClick={()=> imgAction()}
            style={{position:'absolute', top:'50px', right:'150px', color:'white', cursor : 'pointer'}}><FaTimes className="text-3xl" /></button>
            <button onClick={()=> imgAction('pre-img')}
               style={{color:'white', cursor : 'pointer'}} ><FaChevronLeft className="text-3xl"/></button>
            <Image src={data.img} style={{width:'auto', maxWidth:'90%', maxHeight:'90%'}} alt="slideshow" width={0}
  height={0} />
            <button onClick={()=> imgAction('nxt-img')}
               style={{color:'white', cursor : 'pointer'}} ><FaChevronRight className="text-3xl"/></button>
         </div>
         }

      <div style={{padding:"20px"}}>
        <ResponsiveMasonry
                columnsCountBreakPoints={{350: 2, 750: 2, 900: 3}}
            >
        <Masonry columnsCount={3} gutter='20px'>

         {images.map((image, i) => (
               <Image key={i}
                src={image}
                style={{width:"100%", display:"block", cursor: "pointer", border:'1px solid rgb(173, 173, 173)'}}
                alt="gallery images"
                onClick={()=> viewImage(image,i)} width={0}
                height={0} className="rounded-md hover:shadow-xl transition duration-300"/>

         ))}

         

        </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  )
}

export default PhotoGallery
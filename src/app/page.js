"use client"

import Image from "next/image";
import styles from "./page.module.css";
import Carousel from "@/components/TestimonialCarousel/TestimonialCarousel";
import { useState } from "react";
import TestimonialCarousel from "@/components/TestimonialCarousel/TestimonialCarousel";

// import { useSession, signIn, signOut } from "next-auth/react";


// function Component() {
//   const { data: session } = useSession()
//   if (session) {
//     return (
//       <>
//         Signed in as {session.user.email} <br />
//         <button onClick={() => signOut()}>Sign out</button>
//       </>
//     )
//   }
//   return (
//     <>
//       Not signed in <br />
//       <button onClick={() => signIn("google", {redirect: false})}>Sign in</button>
//     </>
//   )
// }

export default function Home() {

  const images = ["/png/hero1.png", "/png/hero1.png", "/png/hero1.png", "/png/hero1.png"];
   const testimonials = [
  {
    image: '/png/testimonial.png',
    name: 'Ananya Sharma',
    review: "Absolutely love the quality of the fabric. It's my go-to outfit now!",
  },
  {
    image: '/png/testimonial.png',
    name: 'Ritika Malhotra',
    review: "The stitching and fitting are perfect. I received so many compliments at the party!",
  },
  {
    image: '/png/testimonial.png',
    name: 'Neha Bansal',
    review: "Super comfy and the color is exactly what I expected. Worth every penny.",
  },
  {
    image: '/png/testimonial.png',
    name: 'Meera Iyer',
    review: "Such a vibrant dress! Perfect for summer outings. I'm ordering another one soon.",
  },
  {
    image: '/png/testimonial.png',
    name: 'Divya Kapoor',
    review: "The ethnic design is elegant and traditional. My mom loved it too!",
  },
  {
    image: '/png/testimonial.png',
    name: 'Pooja Verma',
    review: "Looks exactly like the picture. The packaging was neat and delivery was quick!",
  }
];

  const [current, setCurrent] = useState(0);

  return (
    <div>
      <div className={styles.heroContainer}>
        <div className={styles.heroText}>
          <div style={{fontSize: '24px', fontWeight: '700'}}>Keep the look</div>
          <div>Elevate your clothes with our matching clothes and potlies</div>
          <button type="button" className={styles.heroBtn}>Design Now!!!!</button>
        </div>
        <img src={images[current]} alt="hero1" className={styles.heroImg} />
        <div className={styles.caroselContainer}>
    {images.map((img, index) => (
            <div
              key={index}
              className={`${styles.thumbnail} ${
                current === index ? styles.activeThumbnail : ''
              }`}
              onClick={() => setCurrent(index)}
            >
              <Image
                src={img}
                alt={`thumbnail-${index}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.page}>
        <div className={styles.aboutUs}>
          <h3>ABOUT US</h3>
          <p>Baliye offers a stunning collection of ethnic Indian clothing, blending traditional artistry with modern design. From sarees and lehengas to<br />kurtas and suits, each piece is crafted with intricate details and premium fabrics. Perfect for weddings, festivals, and special occasions, Baliye<br />brings the essence of Indian culture to your wardrobe. Celebrate timeless elegance with Baliye.</p>
        </div>

        <h2 style={{textAlign: 'center'}}>LUXURIOUS and CONTEMPORARY APPEAL for EVERY WOMAN</h2>
      </div>
      <div style={{display: 'flex', alignItems: 'center', gap: '5px', marginTop: '30px', marginBottom: '30px'}}>
        <div className="hr" />
        <img src="/png/flower.png" alt="" />
        <div className="hr" />
      </div>

      <div className={styles.page}>
        <div className={styles.categoryWrapper}>
          <div className={styles.categoryText}>
            <div style={{fontSize: '24px', fontWeight: '700'}}>Keep the look</div>
            <div>Elevate your clothes with our matching clothes and potlies</div>
            <button type="button" className={styles.heroBtn}>Design Now!!!!</button>
          </div>
          <img src="/png/suit.png" alt="" className={styles.catImg} />
        </div>
        <div className={styles.categoryWrapper}>
          <div className={styles.categoryTextRight}>
            <div style={{fontSize: '24px', fontWeight: '700'}}>Keep the look</div>
            <div>Elevate your clothes with our matching clothes and potlies</div>
            <button type="button" className={styles.heroBtn}>Design Now!!!!</button>
          </div>
          <img src="/png/potli.png" alt="" className={styles.catImg} />
        </div>
      </div>

      <img src="/png/video_placeholder.png" style={{height: '80vh'}} alt="video" className={styles.heroImg} />
      <div className={styles.page}>
        <TestimonialCarousel testimonials={testimonials} />
      </div>
       <div style={{display: 'flex', alignItems: 'center', gap: '5px', marginTop: '30px', marginBottom: '30px'}}>
        <div className="hr" />
        <img src="/png/flower.png" alt="" />
        <div className="hr" />
      </div>
      <div className={styles.page}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px'}}>
          <h2>Message from the founders</h2>
          <p>Welcome to Baliye ! We founded this brand with one simple goal: to help you express your unique style through custom clothing and accessories. Each piece is made with care, quality, and a personal touch, ensuring that it’s as distinctive as you are. Thank you for choosing us to be part of your style journey—we can’t wait to see what you create!</p>
          <img src="/png/mof.png" alt="" style={{width: '100%'}} />
        </div>
      </div>
    </div>
  );
}

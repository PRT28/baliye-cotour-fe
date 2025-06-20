'use client';
import { useState } from 'react';
import styles from './TestimonialCarousel.module.css';
import Image from 'next/image';

export default function TestimonialCarousel({testimonials}) {
  const [index, setIndex] = useState(0);

  const visibleTestimonials = testimonials.slice(index, index + 3);

  const handlePrev = () => {
    setIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIndex(prev => (prev + 1) % testimonials.length);
  };

  const getTestimonial = (i) => testimonials[i % testimonials.length];

  return (
    <div className={styles.carouselWrapper}>
      <h2 className={styles.heading}>Let customers speak for us</h2>
      <div className={styles.carousel}>
        <button onClick={handlePrev} className={styles.arrow}>&lt;</button>

        <div className={styles.cardsWrapper}>
          {[0, 1, 2].map((offset) => {
            const testimonial = getTestimonial(index + offset);
            return (
              <div key={offset} className={styles.card}>
                <img src={testimonial.image} alt={testimonial.name} className={styles.image} />
                <p className={styles.stars}>★★★★★</p>
                <p className={styles.review}>{testimonial.review}</p>
                <p className={styles.name}><i>- {testimonial.name}</i></p>
              </div>
            );
          })}
        </div>

        <button onClick={handleNext} className={styles.arrow}>&gt;</button>
      </div>
    </div>
  );
}
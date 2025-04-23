"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      {/* Top Deals Bar */}
      <div className={styles.dealsBar}>
        <p>Free shipping on orders over $50</p>
      </div>

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="/Logo-4.svg"></img>
        </div>

        <div className={styles.nav}>
          <Link href="/shop">SHOP</Link>
          <Link href="/collections">COLLECTIONS</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/barbers">BARBERS</Link>
        </div>

        <div className={styles.socialIconsHeader}>
          <a href="#" aria-label="Search">
            <img src="/search.svg"></img>
          </a>
          <a href="#" aria-label="Account">
            <img src="/account.svg"></img>
          </a>
          <a href="#" aria-label="Like">
            <img src="/heart.svg"></img>
          </a>
          <a href="#" aria-label="Bag">
            <img src="/tote.svg"></img>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <img
            src="/hero-image.png"
            alt="PureTect Hero Image"
            className={styles.heroImage}
          />
          <h1>THE NEW STANDARD IN SANITATION.</h1>
          <p>PROFESSIONAL. NON-TOXIC. SAFE TO TOUCH.</p>
          <button className={styles.heroButton}>Shop Now</button>
        </div>
      </div>

      {/* Product Carousel */}
      <div className={styles.carousel}>
        <h2>FEATURED PRODUCTS</h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          <SwiperSlide className={styles.carouselItem}>
            <Image src="/thebag1.png" alt="The Tabs" width={400} height={400} />
            <p>THE TABS</p>
          </SwiperSlide>
          <SwiperSlide className={styles.carouselItem}>
            <Image
              src="/thebottle2.png"
              alt="The Spray"
              width={300}
              height={400}
            />
            <p>THE SPRAY</p>
          </SwiperSlide>
          <SwiperSlide className={styles.carouselItem}>
            <Image
              src="/thejar1.png"
              alt="Product 3"
              width={400}
              height={400}
            />
            <p>THE JAR</p>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; 2025 PureTect PRO. All rights reserved.</p>
      </footer>
    </div>
  );
}

// app/survey/page.js

"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function SurveyPage() {
  useEffect(() => {
    // Only load the Typeform script once
    const script = document.createElement("script");
    script.src = "https://embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Optional cleanup: remove the script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={styles.container}>
      {/* Top Deals Bar */}
      <div className={styles.feedback}>
        <p>WE APPRECIATE YOUR FEEDBACK!</p>
      </div>

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="/Logo-4.svg"></img>
        </div>

        {/* <div className={styles.nav}>
          <Link href="/shop">SHOP</Link>
          <Link href="/collections">COLLECTIONS</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/barbers">BARBERS</Link>
        </div> */}

        {/* <div className={styles.socialIconsHeader}>
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
        </div> */}
      </header>

      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className="p-8">
            <h1 className="text-2xl mb-4">We’d love your feedback!</h1>
            <div data-tf-live="01JVX06FDFK9VVG399M6EEC5KQ"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

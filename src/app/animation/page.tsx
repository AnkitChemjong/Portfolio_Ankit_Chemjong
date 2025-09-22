"use client";
import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function App() {
  const scrollRef = useRef(null);
  const scrollY = useMotionValue(0);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    scroll.on("scroll", (args) => {
      scrollY.set(args.scroll.y);
    });

    return () => {
      scroll.destroy();
    };
  }, [scrollY]);

  // Map scroll position to vertical and horizontal movement
  const y = useTransform(scrollY, [0, 600], [0, 800]); // moves down
  const x = useTransform(scrollY, [0, 600], [0, 300]); // moves to the right
  const scale = useTransform(scrollY, [0, 600], [1, 1.2]); // optional zoom effect

  return (
    <div data-scroll-container ref={scrollRef}>
      {/* First section */}
      <section
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#111",
        }}
      >
        <motion.img
          src="https://i.pinimg.com/736x/9c/c5/2a/9cc52ab4497893f4d33904aa4451477b.jpg"
          alt="Coke Bottle"
          style={{
            width: 200,
            y,      // vertical scroll movement
            x,      // horizontal scroll movement
            scale,  // optional zoom
          }}
        />
      </section>

      {/* Extra sections so you can scroll */}
      <section style={{ height: "100vh", background: "#e63946" }} />
      <section style={{ height: "100vh", background: "#457b9d" }} />
    </div>
  );
}

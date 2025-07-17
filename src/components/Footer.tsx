"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.footer
      ref={ref}
      initial={{ y: 60 }}
      animate={inView ? { y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-black text-white px-6 py-20"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        <p className="text-lg font-semibold text-center">
          Aro Cafe — The first ever Matcha Cafe in MG Marg, Gangtok. Experience the taste of Japan in Sikkim!
        </p>
        <div className="flex items-center gap-2 text-blue-200">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl" />
          <span>MG Marg, Gangtok, Sikkim</span>
        </div>
        <div className="flex gap-6 mt-2">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} className="text-2xl hover:text-blue-400 transition" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} className="text-2xl hover:text-blue-400 transition" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FontAwesomeIcon icon={faXTwitter} className="text-2xl hover:text-blue-400 transition" />
          </a>
        </div>
        <p className="text-xs text-neutral-400 mt-4">&copy; {new Date().getFullYear()} Aro Cafe. All rights reserved.</p>
      </div>
    </motion.footer>
  );
}

"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
	const { ref } = useSectionInView("About");

	return (
		<motion.section
			ref={ref}
			className="mb-28 max-w-[45rem] text-center 
            leading-8 sm:mb-40 scroll-mt-28"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id="about"
		>
			<SectionHeading>About Me</SectionHeading>
			<p className="mb-3">
				I am a recent{" "}
				<span className="font-medium">Computer Science</span> graduate
				with a strong foundation in software development and a growing
				interest in IT support and cybersecurity. My recent internship
				in quality engineering sparked a passion for ensuring system
				reliability and security. This summer, I am pursuing{" "}
				<span className="font-medium">CompTIA A+ and Security+</span>{" "}
				certifications to further solidify my expertise in the IT field.
			</p>
		</motion.section>
	);
}

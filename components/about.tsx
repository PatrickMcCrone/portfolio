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
				I am approaching graduation in May of 2025 with a degree in{" "}
				<span className="font-medium">Computer Science</span>. I decided
				to pursue Computer Science because of my passion for programming
				that I found while I was in high school. My favorite part of
				programming is the problem-solving aspect. I chase the feeling
				of figuring out a solution to a problem. My strong suits are
				Python, C# (.NET), and C++. Also, I am familiar with Game
				Development (Unity/C#), Web Development
				(HTML/CSS/ReactJS/NodeJS), Multi-Platform Development (.NET
				MAUI), and Mobile Development (iOS/Swift). I am always looking
				to learn new technologies. I am currently looking for a
				full-time position as a software developer or software quality
				assurance engineer.
			</p>
			When I&apos;m not coding, I enjoy being active, learning new things,
			and spending time with friends and family. I am currently learning
			about game development in Unity and Full-Stack Development.<p></p>
		</motion.section>
	);
}

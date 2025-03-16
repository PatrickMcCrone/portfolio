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
				Currently, I am approaching graduation in May with a degree in{" "}
				<span className="font-medium">Computer Science</span>. I decided
				to pursue Computer Science because of my passion for programming
				that I found while I was in high school. My favorite part of
				programming is the{" "}
				<span className="italic">problem-solving</span> aspect. I{" "}
				<span className="underline">love</span> the feeling of finally
				figuring out a solution to a problem. My strong suits are{" "}
				<span className="font-medium">Python, C# (.NET), and C++</span>.
				I am also familiar with Game Development (Unity/C#), Web
				Development (HTML/CSS/ReactJS/NodeJS), Multi-Platform
				Development (.NET MAUI), and Mobile Development (iOS/Swift). I
				am always looking to learn new technologies. I am currently
				looking for a{" "}
				<span className="font-medium">full-time position</span> as a
				software developer or software quality assurance engineer.
			</p>
			<span className="italic">When I'm not coding</span>, I enjoy playing
			video games and going to the gym. I also enjoy{" "}
			<span className="font-medium">learning new things</span>. I am
			currently learning about{" "}
			<span className="font-medium">game development in Unity</span>. I'm
			also learning about{" "}
			<span className="font-medium">Full-Stack Development</span>.<p></p>
		</motion.section>
	);
}

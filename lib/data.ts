import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { LuLifeBuoy } from "react-icons/lu";
import { LuWrench } from "react-icons/lu";
import conductorImg from "@/public/conductor.png";
import flappyBirdImg from "@/public/flappy_bird.png";
import portfolioWebsiteImg from "@/public/portfolio_website.png";

export const links = [
	{
		name: "Home",
		hash: "#home",
	},
	{
		name: "About",
		hash: "#about",
	},
	{
		name: "Projects",
		hash: "#projects",
	},
	{
		name: "Skills",
		hash: "#skills",
	},
	{
		name: "Experience",
		hash: "#experience",
	},
	{
		name: "Contact",
		hash: "#contact",
	},
] as const;

export const experiencesData = [
	{
		title: "Computer Science Student",
		location: "Fredonia, NY",
		description:
			"Currently, I am a computer science student at SUNY Fredonia. I am pursuing a Bachelor's degree in Computer Science. I expect to graduate this May of 2025.",
		icon: React.createElement(LuGraduationCap),
		date: "2021 - present",
	},
	{
		title: "Quality Engineering Intern",
		location: "Buffalo, NY",
		description:
			"I worked as a quality engineering intern at 3AM Innovations for 4 months, where I learned a lot about software testing and automation. It was a very valuable experience.",
		icon: React.createElement(LuWrench),
		date: "2024",
	},
	{
		title: "Assistant Head Swim Coach and Head Lifeguard",
		location: "Orchard Park, NY",
		description:
			"I worked as a swim coach and head lifeguard at Eagle Ridge Recreation Association for 7 years. I was responsible for coaching the swim team and leading the team of lifeguards.",
		icon: React.createElement(LuLifeBuoy),
		date: "2018 - 2024",
	},
] as const;

export const projectsData = [
	{
		title: "Conductor",
		description:
			"This is the project I worked on at 3AM Innovations. It is a Python app meant for automating the testing of 3AM's FLORIAN software.",
		tags: ["Python", "TKinter GUI"],
		imageUrl: conductorImg,
	},
	{
		title: "Flappy Bird Clone",
		description:
			"A clone of the popular mobile game, Flappy Bird. I made this project using Unity and C# as part of a game development class I took in college.",
		tags: ["Unity", "C#"],
		imageUrl: flappyBirdImg,
	},
	{
		title: "Portfolio Website",
		description:
			"This website is one of, if not, my largest project. It is built on the Next.js framework and is hosted on Vercel.",
		tags: [
			"TypeScript",
			"React",
			"Next.js",
			"Tailwind",
			"Framer",
			"Resend",
			"Vercel",
		],
		imageUrl: portfolioWebsiteImg,
	},
] as const;

export const skillsData = [
	"Python",
	"C#",
	"C++",
	".NET MAUI",
	"Unity",
	"HTML",
	"CSS",
	"JavaScript",
	"TypeScript",
	"React",
	"Next.js",
	"Node.js",
	"Git",
	"Tailwind",
	"Express",
	"PostgreSQL",
] as const;

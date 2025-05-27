import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { LuLifeBuoy } from "react-icons/lu";
import { LuWrench } from "react-icons/lu";
import conductorImg from "@/public/conductor.png";
import eventAppImg from "@/public/EventApp.png";
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
		title: "Computer Science Graduate",
		location: "Fredonia, NY",
		description:
			"I am a recent computer science graduate from SUNY Fredonia. I graduated with a Bachelor of Science in Computer Science.",
		icon: React.createElement(LuGraduationCap),
		date: "2021 - 2025",
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
			"A project I worked on at 3AM Innovations. It is a Python app meant for automating the testing of 3AM's FLORIAN software.",
		tags: ["Python", "TKinter GUI"],
		imageUrl: conductorImg,
	},
	{
		title: "Event Manager App",
		description:
			"A web-based event management app I built with 3 other students in my Software Engineering class in college. It is designed for faculty to manage and keep track of meetings and events.",
		tags: ["Next.js", "Node.js", "PostgreSQL", "Jira"],
		imageUrl: eventAppImg,
	},
	{
		title: "Portfolio Website",
		description:
			"A full-stack website built on the Next.js framework hosted on Vercel.",
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
	"IT Fundamentals",
	"Hardware Configuration",
	"Hardware Troubleshooting",
	"PC Building",
	"Python",
	"C#",
	"C++",
	"Node.js",
	".NET MAUI",
	"Unity",
	"Git",
	"Jira",
] as const;

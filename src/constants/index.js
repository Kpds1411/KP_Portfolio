import { navOptions, navTitle } from "./header";

import {
  greetingMessage,
  ownerName,
  typoGraphyContent,
  currentRole,
  profileImage as heroProfileImage,
} from "./heroSection";

import {
  aboutContent,
  skills,
  profileImage as aboutProfileImage,
  projectsCompleted,
  linkedinUrl,
  resume,
} from "./about";

import { experienceData, educationData } from "./experience";

import { contactInfo } from "./contact";

import { achivementData } from "./achivement";

const darkColors = {
  background: "bg-gray-900",
  text: "text-white",
  heading: "text-gray-100",
  link: "text-blue-600",
  button: "bg-blue-600",
  buttonHover: "hover:bg-blue-700",
  cardBackground: "bg-gray-800",
  cardText: "text-white",
  skillProgressColor: "bg-green-500",
};

const lightColors = {
  background: "bg-gray-50",
  text: "text-gray-900",
  heading: "text-gray-900",
  link: "text-blue-600",
  button: "bg-blue-600",
  buttonHover: "hover:bg-blue-700",
  cardBackground: "bg-white",
  cardText: "text-gray-800",
  skillProgressColor: "bg-yellow-500",
};

const transitionDuration = "duration-300";

const colors = {
  dark: darkColors,
  light: lightColors,
};

const transition = {
  duration: transitionDuration,
};

export {
  navOptions,
  navTitle,
  greetingMessage,
  ownerName,
  typoGraphyContent,
  currentRole,
  heroProfileImage,
  aboutContent,
  skills,
  aboutProfileImage,
  projectsCompleted,
  linkedinUrl,
  resume,
  experienceData,
  educationData,
  contactInfo,
  colors,
  transition,
  achivementData,
};

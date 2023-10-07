import {
  type Link,
  type SocialLink,
  type SiteConfig,
  type Project,
} from "~/types";

export const NAV_LINKS: Link[] = [
  {
    name: "Home",
    href: "/",
  },
];

const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: "socials/fa6-brands/gitlab",
    name: "GitLab",
    href: "https://gitlab.com/jhilker98/",
  },
  {
    icon: "socials/fa6-brands/github",
    name: "GitHub",
    href: "https://github.com/jhilker98/",
  },
  {
    icon: "socials/fa6-brands/linkedin-in",
    name: "LinkedIn",
    href: "https://linked.com/in/jhilker/",
  },
  {
    icon: "socials/fa6-brands/dev",
    name: "Dev.to",
    href: "https://dev.to/jhilker",
  },
  {
    icon: "socials/fa6-brands/codepen",
    name: "CodePen",
    href: "https://codepen.io/hilkerj/",
  },
  {
    icon: "heroicons/home-solid",
    name: "Main site",
    href: "https://jhilker.com",
  },
];

export const SITE_META: SiteConfig = {
  title: "Frontend Mentor Challenges",
  description: "My frontendmentor.io challenges, all on one site.",
  author: "Jacob Hilker",
  tagline:
    "A front-end developer, who enjoys using Emacs, Hugo, Python, and Tailwind.",
  socialLinks: SOCIAL_LINKS,
};

export const FEATURED_PROJECTS: Project[] = [
  {
    name: "Advice Generator app",
    description:
      "My solution for the advice generator app challenge from frontendmentor.io.",
    url: "/advice-generator-app",
  },
  {
    name: "Stats card component",
    description:
      "My solution for the stats card component challenge from frontendmentor.io.",
    url: "/stats-card",
  },
];

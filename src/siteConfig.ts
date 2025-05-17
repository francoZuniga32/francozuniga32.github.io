import type {
  SiteConfiguration,
  NavigationLinks,
  SocialLinks,
} from "@/types.ts";

export const SITE: SiteConfiguration = {
  title: "Franco Z.",
  description:
    "Blog de desarrollo y personal, podras encontrar reflexiones, resumenes y proyectos.",
  href: "https://francozuniga32.github.io/",
  author: "Franco Zuñiga.",
  locale: "es-AR",
};

export const NAV_LINKS: NavigationLinks = {
  blog: {
    path: "/blog",
    label: "Blog",
  },
  projects: {
    path: "/projects",
    label: "Projects",
  },
  documentation: {
    path: "/traking",
    label: "Traking",
  },
};

export const SOCIAL_LINKS: SocialLinks = {
  email: {
    label: "Email",
    href: "mailto:franco.ojeda@est.fi.uncoma.edu.ar",
  },
  github: {
    label: "GitHub",
    href: "https://github.com/francoZuniga32",
  }
};

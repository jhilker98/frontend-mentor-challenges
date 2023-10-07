interface LinkProps {
  name: string;
  children?: undefined;
  href: string;
}
interface ContainerProps {
  name: string;
  children: LinkProps[];
  href?: undefined;
}

export type Link = LinkProps | ContainerProps;

export type SocialLink = Omit<Link, "children"> & {
  href: string;
  icon: string;
};

export interface SiteConfig {
  title: string;
  description: string;
  author: string;
  tagline: string;
  socialLinks?: SocialLink[];
}

export type Project = {
  name: string;
  description: string;
  url: string;
};

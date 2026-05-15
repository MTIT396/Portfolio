export interface TechIcon {
  name: string;
  iconUrl: string;
}
export interface Social {
  title: string;
  subtitle: string;
  iconUrl: string;
  href: string;
}

export enum SectionId {
  HERO = "hero",
  ABOUT = "about",
  PORTFOLIO = "portfolio",
  CONTACT = "contact",
}

/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module "*/jobs.yml" {
  interface Job {
    title: string;
    where: string;
    link: string;
    description: string;
    time: string;
    when: "short-time" | "mid-time" | "long-time";
    repo: string;
    relation: string;
    tech: string[];
  }

  const content: Job[];
  export default content;
}

declare module "*/social.yml" {
  interface Social {
    name: string;
    link: string;
    icon: string;
  }

  const content: Social[];
  export default content;
}

declare module "*/homeNav.yml" {
  interface Nav {
    title: string;
    link: string;
    hue: number;
    icon: string;
    sub: string;
  }

  const content: { [key: string]: Nav };
  export default content;
}

declare module "*.yml" {
  const content: any;
  export default content;
}

import type { FunctionComponent, SVGProps } from 'react';

export interface Skill {
  name: string,
  icon: FunctionComponent<SVGProps<SVGSVGElement>>,
  color: string
}

export interface Project {
  name: string,
  description: string,
  image: string,
  url?: string,
  repository?: string,
  tags: string[]
}

export interface ExperienceInfo {
  company: string,
  position: string,
  date: string,
  description: string[]
}
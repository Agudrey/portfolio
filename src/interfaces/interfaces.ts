export interface Skill {
  name: string,
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
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
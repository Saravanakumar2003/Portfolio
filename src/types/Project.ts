
export interface Tag {
  id: string
  name: string
  icon: string
  color: string
  rgb: string
}

export interface Tech {
  id: string
  name: string
  icon: string
  color: string
  rgb: string
}

export interface Print {
  id: string
  img: string
  name: string
  description: string
}

export interface Team {
  id: string
  name: string
  role: string
  img: string
  github: string
  linkedin: string
  twitter: string
  instagram: string
}

export interface Project {
  icon: string
  banner: string
  imgUrl: string
  id: string
  title: string
  description: string
  type: string
  github: string
  web: string
  url: string
  gif: string
  year: string
  status: string
  video: string
  backgroundImage: string
  blog: string
  trelloboard: string
  trelloedit: string
  tech: Tech[]
  tags: Tag[]
  print: Print[]
  team: Team[]
}

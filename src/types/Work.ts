export interface Tag {
  id: string
  name: string
  icon: string
}

export interface Print {
  id: string
  image: string
  name: string
  description: string
  date: string
  url: string
  urltitle: string
}

export interface Work {
  id: string
  url: string
  imgUrl: string
  title: string
  title2: string
  title3: string
  subTitle: string
  description: string
  tags: Tag[]
  prints: Print[]
  date: string
}
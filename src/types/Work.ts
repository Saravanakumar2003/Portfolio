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
  id: number
  url: string
  imgUrl: string
  title: {
    en: string
    ta: string
  }
  title2: {
    en: string
    ta: string
  }
  title3: {
    en: string
    ta: string
  }
  subTitle: {
    en: string
    ta: string
  }
  description: {
    en: string
    ta: string
  }
  tags: Array<{
    name: string
    icon: string
  }>
  date: {
    en: string
    ta: string
  }
  prints: Array<{
    name: {
      en: string
      ta: string
    }
    image: string
    date: {
      en: string
      ta: string
    }
    description: {
      en: string
      ta: string
    }
    url?: string
    urltitle?: {
      en: string
      ta: string
    }
  }>
}
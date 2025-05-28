export interface PersonalInfo {
  name: string
  title: string
  photo: string
  age: number
  residence: string
  freelance: string
  address: string
}

export interface ContactInfo {
  phone: string
  email: string

}

export interface Language {
  name: string
  percentage: number
}

export interface ProgrammingLanguage {
  name: string
  percentage: number
}

export interface Skill {
  name: string
}

export interface Knowledge {
  id: string
  title: string
  description: string
  icon: string
}

export interface Education {
  id: string
  institution: string
  degree: string
  period: string
  status: string
  description: string
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  detailedDescription: string
  technologies: string[]
  githubUrl?: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
  color: string
}

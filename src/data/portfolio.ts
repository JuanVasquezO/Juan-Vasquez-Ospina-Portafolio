import type {
  PersonalInfo,
  ContactInfo,
  Language,
  ProgrammingLanguage,
  Skill,
  Knowledge,
  Education,
  Project,
  SocialLink,
} from "@/types"

// Información personal básica y general del usuario
export const personalInfo: PersonalInfo = {
  name: "Juan David Vásquez Ospina",
  title: "Systems Engineer", // Título profesional o rol principal
  photo: "/assets/Foto.png", // Ruta a la foto del perfil
  age: 21,
  residence: "Colombia",
  freelance: "Available", // Disponibilidad para trabajo freelance
  address: "Medellín, Antioquia",
}

// Información de contacto principal
export const contactInfo: ContactInfo = {
  phone: "+57 321 356 7865",
  email: "juan.vasquez.ospina2@gmail.com",
}

// Idiomas y nivel de dominio (porcentaje)
export const languages: Language[] = [
  { name: "English", percentage: 65 },
  { name: "Spanish", percentage: 100 },
]

// Lenguajes de programación conocidos con nivel de dominio (porcentaje)
export const programmingLanguages: ProgrammingLanguage[] = [
  { name: "PYTHON", percentage: 80 },
  { name: "JAVA", percentage: 50 },
  { name: "JS", percentage: 80 },
]

// Habilidades adicionales sin porcentaje, solo nombre
export const extraSkills: Skill[] = [
  { name: "Git & GitHub" },
  { name: "React" },
  { name: "Node.js & Express" },
  { name: "Agile / Scrum" },
  { name: "OWASP Top 10" },
  { name: "Secure Coding Practices" },
  { name: "Penetration Testing (Nmap, Metasploit)" }
]

// Conocimientos generales con título, descripción e ícono representativo
export const knowledgeData: Knowledge[] = [
  {
    id: "1",
    title: "Software Development",
    description: "Full-stack Web Applications, Backend & Frontend",
    icon: "code",
  },
  {
    id: "2",
    title: "UI/UX Design",
    description: "Responsive Web & Mobile Interfaces, User-Centered Design",
    icon: "palette",
  },
  {
    id: "3",
    title: "Cybersecurity",
    description: "Penetration Testing, Vulnerability Assessment, OWASP",
    icon: "shield-check",
  },
  {
    id: "4",
    title: "Database Management",
    description: "Data Modeling, SQL & NoSQL, Performance Optimization",
    icon: "database",
  },
  {
    id: "5",
    title: "Project Collaboration",
    description: "Agile Methodologies, Multidisciplinary Teamwork",
    icon: "users",
  },
  {
    id: "6",
    title: "Sound Application Development",
    description: "Music Recommendation Systems, Audio Processing",
    icon: "mic",
  },
]

// Formación académica y cursos/training con estado y descripción
export const educationData: Education[] = [
  {
    id: "1",
    institution: "Colegio Santa Teresita",
    degree: "High School Diploma",
    period: "2008 - 2019",
    status: "Completed",
    description:
      "Completed secondary education with strong academic performance. Joined the institution in 1th grade and graduated in 2019.",
  },
  {
    id: "2",
    institution: "University of Antioquia",
    degree: "Systems Engineering",
    period: "2020 - Present",
    status: "In progress",
    description:
      "Comprehensive training in systems engineering with emphasis on software development, databases, and cybersecurity. Actively involved in multidisciplinary projects and continuous learning.",
  },
  {
    id: "3",
    institution: "Cybersecurity Evaluation – Colegio Mayor del Cauca",
    degree: "Workshop / Training",
    period: "2023",
    status: "Completed",
    description:
      "Conducted penetration tests, vulnerability scanning, and exploitation of web applications. Used tools such as Nessus, OWASP ZAP, Burp Suite, and information gathering techniques.",
  },
]

// Proyectos con descripción breve, imagen, descripción detallada, tecnologías usadas y repositorio GitHub
export const projectsData: Project[] = [
  {
    id: "1",
    title: "GasolFind ",
    description: "An app to locate nearby gas stations with real-time price updates and route planning.",
    image: "/assets/Gasol.png",
    detailedDescription:
      "GasolFind helps users find the closest gas stations, compare fuel prices, and get directions easily. It integrates GPS location services, live price data, and an intuitive map interface to optimize refueling stops.",
    technologies: ["Flutter", "Google Maps API", "Firebase"],
    githubUrl: "https://github.com/MaritzaTC/Gasol_Find.git",
  },
  {
    id: "2",
    title: "Soundsuggest",
    description: "Recommends music based on your personal tastes using intelligent analysis.",
    image: "/assets/LogoSound.png",
    detailedDescription:
      "Soundsuggest is an app that provides personalized music recommendations based on user preferences. It uses recommendation algorithms and audio analysis to deliver a unique music experience.",
    technologies: ["React", "MongoDB", "Spark", "Spotify API"],
    githubUrl: "https://github.com/JohanSH7/SoundSuggest"
  },
  {
    id: "3",
    title: "Sylvie",
    description: "A holographic virtual assistant with a chatbot focused on environmental information.",
    image: "/assets/Sylvie.png",
    detailedDescription:
      "Sylvie is a holographic virtual assistant powered by a custom chatbot designed to provide environmental information about the S.AS. project. It combines artificial intelligence with holographic visualization for natural and contextual interaction.",
    technologies: ["React", "Node.js", "OpenAI API"],
    githubUrl: "https://github.com/MaritzaTC/holographic-assistant"
  },
  {
    id: "4",
    title: "Pokedex",
    description: "An interactive Pokédex that lets you explore all Pokémon using the PokéAPI.",
    image: "/assets/Poke.png",
    detailedDescription:
      "This interactive Pokédex allows users to view detailed information about all Pokémon, including images, stats, types, and more. It uses the PokéAPI to fetch real-time data and offers a user-friendly interface.",
    technologies: ["HTML", "CSS", "JavaScript", "PokéAPI"],
    githubUrl: "https://github.com/20251-Ingenieria-WEB/taller-html-Juan-Vasquez-Ospina"
  }
]

// Enlaces a redes sociales con nombre, url, icono y color representativo
export const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/juan_vasquezos?igsh=MTM5ZW02dWprN3o5dQ==",
    icon: "instagram",
    color: "#E4405F",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/juan-vasquez-o/",
    icon: "linkedin",
    color: "#0A66C2",
  },
  {
    name: "GitHub",
    url: "https://github.com/JuanVasquezO",
    icon: "github",
    color: "#333",
  },
]

import { PortfolioLayout } from "@/components/templates/PortfolioLayout"
import { ProfileSection } from "@/components/organisms/ProfileSection"
import { KnowledgeSection } from "@/components/organisms/KnowledgeSection"
import { EducationSection } from "@/components/organisms/EducationSection"
import { PortfolioSection } from "@/components/organisms/PortfolioSection"
import { Footer } from "@/components/organisms/Footer"
import {
  personalInfo,
  contactInfo,
  languages,
  programmingLanguages,
  extraSkills,
  knowledgeData,
  educationData,
  projectsData,
  socialLinks,
} from "@/data/portfolio"

export default function Home() {
  return (
    <PortfolioLayout
      personalInfo={personalInfo}
      contactInfo={contactInfo}
      languages={languages}
      programmingLanguages={programmingLanguages}
      extraSkills={extraSkills}
      socialLinks={socialLinks}
    >
      <ProfileSection personalInfo={personalInfo} contactInfo={contactInfo} />
      <KnowledgeSection knowledge={knowledgeData} />
      <EducationSection education={educationData} />
      <PortfolioSection projects={projectsData} />
      <Footer />
    </PortfolioLayout>
  )
}

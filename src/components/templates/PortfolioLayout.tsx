import type React from "react"
import { LeftSidebar } from "@/components/organisms/LeftSidebar"
import { RightSidebar } from "@/components/organisms/RightSidebar"
import type { PersonalInfo, ContactInfo, Language, ProgrammingLanguage, Skill, SocialLink } from "@/types"

interface PortfolioLayoutProps {
  children: React.ReactNode
  personalInfo: PersonalInfo
  contactInfo: ContactInfo
  languages: Language[]
  programmingLanguages: ProgrammingLanguage[]
  extraSkills: Skill[]
  socialLinks: SocialLink[]
}

export const PortfolioLayout: React.FC<PortfolioLayoutProps> = ({
  children,
  personalInfo,
  contactInfo,
  languages,
  programmingLanguages,
  extraSkills,
  socialLinks,
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <LeftSidebar
        personalInfo={personalInfo}
        contactInfo={contactInfo}
        languages={languages}
        programmingLanguages={programmingLanguages}
        extraSkills={extraSkills}
      />

      {/* Main Content */}
      <main className="lg:ml-80 lg:mr-20">
        <div className="min-h-screen overflow-y-auto pb-20 lg:pb-0">{children}</div>
      </main>

      <RightSidebar socialLinks={socialLinks} />
    </div>
  )
}

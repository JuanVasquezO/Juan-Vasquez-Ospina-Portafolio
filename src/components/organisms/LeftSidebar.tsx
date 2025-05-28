"use client"

import type React from "react"
import { useState } from "react"
import { Avatar } from "@/components/atoms/Avatar"
import { SkillItem } from "@/components/molecules/SkillItem"
import type { PersonalInfo, ContactInfo, Language, ProgrammingLanguage, Skill } from "@/types"

interface LeftSidebarProps {
  personalInfo: PersonalInfo
  contactInfo: ContactInfo
  languages: Language[]
  programmingLanguages: ProgrammingLanguage[]
  extraSkills: Skill[]
}

export const LeftSidebar: React.FC<LeftSidebarProps> = ({
  personalInfo,
  languages,
  programmingLanguages,
  extraSkills,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg border border-gray-200"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOpen(false)} />
      )}

      {/* Sidebar */}
      <div
        className={`
        w-80 bg-white border-r border-gray-200 h-screen overflow-y-auto fixed left-0 top-0 z-40
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
      `}
      >
        {/* Mobile Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="lg:hidden absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-4 sm:p-6">
          {/* Personal Info */}
          <div className="flex flex-col items-center mb-8">
           <div className="mb-6">
             <Avatar src={personalInfo.photo} alt={personalInfo.name} size="xl" className="ml-2" />
          </div>
             <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">{personalInfo.name}</h2>
             <p className="text-yellow-600 font-medium text-sm sm:text-base">{personalInfo.title}</p>
          </div>

          {/* Contact Info */}
          <div className="mb-6 sm:mb-8">
            <div className="space-y-2 sm:space-y-3">
              <div className="flex justify-between">
                <span className="text-xs sm:text-sm text-gray-600">Age:</span>
                <span className="text-xs sm:text-sm font-medium">{personalInfo.age}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs sm:text-sm text-gray-600">Residence:</span>
                <span className="text-xs sm:text-sm font-medium">{personalInfo.residence}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs sm:text-sm text-gray-600">Freelance:</span>
                <span className="text-xs sm:text-sm font-medium text-green-600">{personalInfo.freelance}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs sm:text-sm text-gray-600">Address:</span>
                <span className="text-xs sm:text-sm font-medium">{personalInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">Languages</h3>
            {languages.map((language, index) => (
              <SkillItem key={index} name={language.name} percentage={language.percentage} />
            ))}
          </div>

          {/* Programming Languages */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">Programming Languages</h3>
            {programmingLanguages.map((lang, index) => (
              <SkillItem key={index} name={lang.name} percentage={lang.percentage} />
            ))}
          </div>

          {/* Extra Skills */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">Extra Skills</h3>
            <ul className="space-y-2">
              {extraSkills.map((skill, index) => (
                <li key={index} className="text-xs sm:text-sm text-gray-600 flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 flex-shrink-0"></span>
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

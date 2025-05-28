import type React from "react"
import { EducationCard } from "@/components/molecules/EducationCard"
import type { Education } from "@/types"

interface EducationSectionProps {
  education: Education[]
}

export const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Education</h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
             Focused academic and practical background in systems engineering and cybersecurity, 
            with hands-on experience in multidisciplinary and technical environments.
          </p>
        </div>

        {/* Single column layout - like a list */}
        <div className="max-w-4xl mx-auto space-y-4">
          {education.map((item) => (
            <EducationCard
              key={item.id}
              institution={item.institution}
              degree={item.degree}
              period={item.period}
              status={item.status}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

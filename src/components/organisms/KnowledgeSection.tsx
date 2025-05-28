import type React from "react"
import { KnowledgeCard } from "@/components/molecules/KnowledgeCard"
import type { Knowledge } from "@/types"

interface KnowledgeSectionProps {
  knowledge: Knowledge[]
}

export const KnowledgeSection: React.FC<KnowledgeSectionProps> = ({ knowledge }) => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">My Knowledge</h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            A collection of technical skills and knowledge gained through academic training and hands-on experience. 
            It includes proficiency in programming languages, tools, development methodologies, 
            and foundational concepts in key areas such as software engineering, cybersecurity, and emerging technologies.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {knowledge.map((item) => (
            <KnowledgeCard key={item.id} title={item.title} description={item.description} icon={item.icon} />
          ))}
        </div>
      </div>
    </section>
  )
}

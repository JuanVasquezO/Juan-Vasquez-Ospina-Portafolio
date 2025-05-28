import type React from "react"
import { Icon } from "@/components/atoms/Icon"

interface KnowledgeCardProps {
  title: string
  description: string
  icon: string
}

export const KnowledgeCard: React.FC<KnowledgeCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
          <Icon name={icon} size={32} color="#EAB308" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

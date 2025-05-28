import type React from "react"
import { ProgressBar } from "@/components/atoms/ProgressBar"

interface SkillItemProps {
  name: string
  percentage: number
}

export const SkillItem: React.FC<SkillItemProps> = ({ name, percentage }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">{name}</span>
        <span className="text-sm text-gray-500">{percentage}%</span>
      </div>
      <ProgressBar percentage={percentage} />
    </div>
  )
}

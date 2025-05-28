import type React from "react"

interface EducationCardProps {
  institution: string
  degree: string
  period: string
  status: string
  description: string
}

export const EducationCard: React.FC<EducationCardProps> = ({ institution, degree, period, description }) => {
  return (
    <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Left Column - Institution Info */}
        <div className="space-y-3">
          {/* Institution Name */}
          <h3 className="text-base sm:text-lg font-semibold text-gray-800">{institution}</h3>

          {/* Student Status + Period aligned horizontally */}
          <div className="flex items-center gap-4">
            <p className="text-sm text-gray-600">Student</p>
            <span className="bg-yellow-500 text-white text-xs px-3 py-1 rounded">{period}</span>
          </div>
        </div>

        {/* Right Column - Certificate Info */}
        <div className="space-y-2">
          {/* Certificate Title */}
          <h4 className="text-base sm:text-lg font-semibold text-gray-800">{degree}</h4>

          {/* Description */}
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}

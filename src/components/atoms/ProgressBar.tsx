import type React from "react"

interface ProgressBarProps {
  percentage: number
  color?: string
  height?: string
  showPercentage?: boolean
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage,
  color = "bg-yellow-500",
  height = "h-2",
  showPercentage = true,
}) => {
  return (
    <div className="w-full">
      <div className={`w-full ${height} bg-gray-200 rounded-full overflow-hidden`}>
        <div
          className={`${height} ${color} rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showPercentage && <span className="text-xs text-gray-600 mt-1 block">{percentage}%</span>}
    </div>
  )
}

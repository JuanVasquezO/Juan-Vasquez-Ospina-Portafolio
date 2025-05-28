import type React from "react"
import { Icon } from "@/components/atoms/Icon"

interface SocialIconProps {
  name: string
  url: string
  icon: string
  color: string
}

export const SocialIcon: React.FC<SocialIconProps> = ({ name, url, icon, color }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-transform duration-200 hover:scale-110"
      style={{ backgroundColor: color }}
      title={name}
    >
      <Icon name={icon} size={20} color="white" />
    </a>
  )
}

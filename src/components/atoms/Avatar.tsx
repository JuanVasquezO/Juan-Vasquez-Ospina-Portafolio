import type React from "react"
import Image from "next/image"

interface AvatarProps {
  src: string
  alt: string
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt, size = "md", className = "" }) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-24 h-24",
  }

 return (
  <div
    className={`
      ${sizeClasses[size]} 
      rounded-full 
      overflow-hidden 
      transform ml-12 scale-125
      ${className}
    `}
  >
        <Image
      src={src || "/assets/Foto.png"}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, 256px"
      className="object-cover w-full h-full"
    />
  </div>
)


}

"use client"

import type React from "react"
import Image from "next/image"
import { Button } from "@/components/atoms/Button"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  onLearnMore: () => void
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, onLearnMore }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200 w-full sm:min-w-[300px] sm:max-w-[300px]">
      <div className="relative h-40 sm:h-48 bg-white flex items-center justify-center">
  <Image
    src={image}
    alt={title}
    fill
    className={`object-contain p-2 ${
      title === "Soundsuggest" ? "bg-black" : ""
    }`}
  />
</div>

      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">{title}</h3>

        {/* Contenedor con altura mínima para que las descripciones tengan espacio fijo */}
        <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed min-h-[4.5rem]">
          {description}
        </p>

        {/* Botón alineado al final */}
        <div className="mt-auto">
          <Button onClick={onLearnMore} size="sm" className="w-full sm:w-auto">
            Learn More →
          </Button>
        </div>
      </div>
    </div>
  )
}

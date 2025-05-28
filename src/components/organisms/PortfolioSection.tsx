"use client"

import type React from "react"
import { useState } from "react"
import { ProjectCard } from "@/components/molecules/ProjectCard"
import { Modal } from "@/components/molecules/Modal"
import { Button } from "@/components/atoms/Button"
import type { Project } from "@/types"
import Image from "next/image"


interface PortfolioSectionProps {
  projects: Project[]
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const handleLearnMore = (project: Project) => {
    setSelectedProject(project)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Portfolio</h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Curated selection of software development projects demonstrating technical proficiency, creative problem-solving,
             and practical application of engineering principles in real-world scenarios. 
            Includes individual and collaborative work across various technologies and platforms.
          </p>
        </div>

        {/* Desktop: Horizontal Scroll */}
        <div className="hidden sm:block overflow-x-auto">
          <div className="flex space-x-4 sm:space-x-6 pb-4" style={{ width: "max-content" }}>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                onLearnMore={() => handleLearnMore(project)}
              />
            ))}
          </div>
        </div>

        {/* Mobile: Vertical Grid */}
        <div className="sm:hidden grid grid-cols-1 gap-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              onLearnMore={() => handleLearnMore(project)}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
      <Modal isOpen={!!selectedProject} onClose={closeModal} title={selectedProject.title}>
        <div className="space-y-6">
          <div
            className={`relative w-full max-h-[300px] sm:max-h-[400px] rounded-lg overflow-hidden flex justify-center items-center ${
              selectedProject.title === "Soundsuggest" ? "bg-black" : "bg-white"
            }`}
          >
            <Image
              src={selectedProject.image}
              alt={selectedProject.title}
              width={300}
              height={175}
              className="object-contain"
            />
          </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Project Description</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {selectedProject.detailedDescription}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs sm:text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              {selectedProject.githubUrl && (
                <Button
                  onClick={() => window.open(selectedProject.githubUrl, "_blank")}
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  View Code
                </Button>
              )}
              
            </div>
          </div>
        </Modal>
      )}
    </section>
  )
}

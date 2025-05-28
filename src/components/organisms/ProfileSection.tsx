"use client"

import type React from "react"
import { useState } from "react"
import { Avatar } from "@/components/atoms/Avatar"
import { Button } from "@/components/atoms/Button"
import { Modal } from "@/components/molecules/Modal"
import type { PersonalInfo, ContactInfo } from "@/types"

interface ProfileSectionProps {
  personalInfo: PersonalInfo
  contactInfo: ContactInfo
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({ personalInfo, contactInfo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="bg-gray-50 py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-2 sm:mb-4">
              I am {personalInfo.name}
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-500 mb-4 sm:mb-6">
              {personalInfo.title}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0 text-justify">
              Systems Engineering student at the University of Antioquia, with a strong interest in software development
              and information technologies. Committed to continuous learning and professional growth, seeking
              opportunities to apply and expand knowledge through real-world projects.
            </p>
            <Button onClick={() => setIsModalOpen(true)} size="lg" className="w-full sm:w-auto">
              HIRE ME →
            </Button>
          </div>

          {/* Profile Image - Fixed circular container with aspect-square */}
          <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
           <div className="relative">
            {/* Contenedor circular */}
            <div className="w-48 sm:w-64 lg:w-80 aspect-square bg-white rounded-full shadow-lg overflow-hidden flex items-center justify-center">
              <Avatar
                      src={personalInfo.photo}
                      alt={personalInfo.name}
                      className="w-full h-full object-contain"
                    />
            </div>
          </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Let's Work Together!">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-2">
              <p className="text-sm sm:text-base">
                <strong>Email:</strong> {contactInfo.email}
              </p>
              <p className="text-sm sm:text-base">
                <strong>Phone:</strong> {contactInfo.phone}
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Why Choose Me?</h3>
            <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
              <li>• Strong academic foundation in Systems Engineering</li>
              <li>• Practical experience in cybersecurity tools and simulations</li>
              <li>• Skilled in modern web and mobile technologies (React, Next.js, Jetpack Compose)</li>
              <li>• Committed to writing clean and efficient code</li>
              <li>• Passionate about learning and solving real-world problems</li>
            </ul>
          </div>
          <div className="pt-4">
            <Button onClick={() => setIsModalOpen(false)} className="w-full">
              Get In Touch
            </Button>
          </div>
        </div>
      </Modal>
    </section>
  )
}

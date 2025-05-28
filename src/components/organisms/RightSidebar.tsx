import type React from "react"
import { SocialIcon } from "@/components/molecules/SocialIcon"
import type { SocialLink } from "@/types"

interface RightSidebarProps {
  socialLinks: SocialLink[]
}

export const RightSidebar: React.FC<RightSidebarProps> = ({ socialLinks }) => {
  return (
    <>
      {/* Desktop Right Sidebar */}
      <div className="hidden lg:block w-20 bg-white border-l border-gray-200 h-screen fixed right-0 top-0">
        <div className="flex flex-col items-center py-8">
          <h3 className="text-sm font-semibold text-gray-800 mb-6 transform -rotate-90 whitespace-nowrap">Links</h3>
          <div className="space-y-4">
            {socialLinks.map((social, index) => (
              <SocialIcon key={index} name={social.name} url={social.url} icon={social.icon} color={social.color} />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Social Links - Fixed at bottom */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-30">
        <div className="flex justify-center space-x-4 overflow-x-auto">
          {socialLinks.map((social, index) => (
            <div key={index} className="flex-shrink-0">
              <SocialIcon name={social.name} url={social.url} icon={social.icon} color={social.color} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

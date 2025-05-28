import type React from "react"

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-sm">© 2025 All Rights Reserved</p>
          <p className="text-xs text-gray-400 mt-2">Built with Next.js, TypeScript & TailwindCSS</p>
        </div>
      </div>
    </footer>
  )
}

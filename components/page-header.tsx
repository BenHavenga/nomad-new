import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface PageHeaderProps {
  title: string
  description?: string
  children?: ReactNode
}

export function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-black to-gray-900">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </div>
      <div className="container relative z-10 px-4 mx-auto text-center">
        <div>
          <Link
            href="/"
            className="inline-flex items-center mb-8 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
        <h1 className="mb-6 text-4xl font-bold md:text-5xl">{title}</h1>
        {description && <p className="max-w-2xl mx-auto text-gray-400">{description}</p>}
        {children}
      </div>
    </section>
  )
}

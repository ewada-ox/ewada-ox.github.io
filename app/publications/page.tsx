import { ResourceGrid } from '@/components/publications'

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            {'Publications'}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-pretty">
            {'Here, we maintain a list of publications of the EWADA project'}
          </p>
        </div>
        
        <ResourceGrid />
      </div>
    </main>
  )
}

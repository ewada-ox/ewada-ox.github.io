import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted" />
        <img
          src="/AdobeStock_217485588.jpeg"
          alt="Mobile and web"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-3xl md:text-3xl lg:text-3xl font-bold leading-tight text-balance">
              {'Ethical Web and Data Infrastructure in the Age of AI'}
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-pretty max-w-2xl">
              {'Ethical Web and Data Infrastructure in the Age of AI (EWADA) is an ambitious 3-year programme funded by the Oxford Martin School.Its mission is to reform the concentration of power on the World Wide Web by developing and deploying new forms of technical and legal infrastructure.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button oms variant="outline" size="lg">
              <Link href="https://www.oxfordmartin.ox.ac.uk" target="_blank" rel="noopener noreferrer">
                {'Learn More About EWADA'} <ExternalLink className="ml-2" size={20} />
              </Link>
            </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

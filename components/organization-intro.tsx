import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function OrganizationIntro() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              {'The EWADA Project'}
            </h2>
            <p className="text-lg leading-relaxed mb-4 text-pretty">
              {'Ethical Web and Data Infrastructure in the Age of AI (EWADA) is an ambitious 3-year programme funded by the [Oxford Martin School](https://www.oxfordmartin.ox.ac.uk) (OMS).'}
            </p>
            <p className="text-lg leading-relaxed mb-6 text-pretty">
              {'Its mission is to *reform the concentration of power on the World Wide Web* by developing and deploying new forms of technical and legal infrastructure.'}
            </p>
            <Button asChild variant="outline" size="lg">
              <Link href="https://www.oxfordmartin.ox.ac.uk" target="_blank" rel="noopener noreferrer">
                {'Learn More About EWADA'} <ExternalLink className="ml-2" size={20} />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-muted p-6 rounded-xl">
              <div className="text-4xl font-bold mb-2">{'4+'}</div>
              <div className="text-lg">{'Research Themes'}</div>
            </div>
            <div className="bg-muted p-6 rounded-xl">
              <div className="text-4xl font-bold mb-2">{'10+'}</div>
              <div className="text-lg">{'Active Projects'}</div>
            </div>
            <div className="bg-muted p-6 rounded-xl">
              <div className="text-4xl font-bold mb-2">{'20+'}</div>
              <div className="text-lg">{'Publications'}</div>
            </div>
            <div className="bg-muted p-6 rounded-xl">
              <div className="text-4xl font-bold mb-2">{'2019'}</div>
              <div className="text-lg">{'Since'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

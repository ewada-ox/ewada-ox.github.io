import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, BookOpen, Video, Download, Play, ExternalLink } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type ResourceItem = {
  title: string
  type: string
  href?: string
  external?: boolean
}

type ResourceSection = {
  category: string
  id: string
  icon: LucideIcon
  items: ResourceItem[]
}


const resources: ResourceSection[] = [
  {
    category: 'EWADA codebases',
    id: 'code',
    icon: BookOpen,
    items: [
      { title: 'SOLID Simply Explained', type: 'link', href: 'https://www.youtube.com/watch?v=qWVTjMsv7AE&ab_channel=SimplyExplained',external: true },
      { title: 'SOLID Research Paper', type: 'File', href: 'http://emansour.com/research/lusail/solid_protocols.pdf',external: true },
      { title: 'SOLID Project on GitHub', type: 'link', href: 'https://github.com/solid',external: true },
      { title: 'Slides: Solid: taking back the Web through decentralization by Ruben Verborgh', type: 'link', href: 'https://rubenverborgh.github.io/Slides-FOSDEM-2019/',external: true },
      { title: 'Paradigm shifts for the decentralized Web', type: 'link', href: 'https://ruben.verborgh.org/blog/2017/12/20/paradigm-shifts-for-the-decentralized-web/',external: true },  
    ]
  },
  {
    category: 'Documentation',
    id: 'documentation',
    icon: FileText,
    items: [
      { title: 'Solid Developer Tools and Libraries', type: 'link', href: 'https://github.com/solid/solidproject.org/blob/main/_posts/developers/apps/tools/2019-01-01-00_overview.md#authentication',external: true },
      { title: 'Solid UI React Docs', type: 'link', href: 'https://solid-ui-react.docs.inrupt.com/?path=/story/intro--page',external: true },
      { title: 'Solid Client Libraries Docs', type: 'link', href: 'https://docs.inrupt.com/developer-tools/javascript/client-libraries/',external: true },
      { title: 'solid-client-authn', type: 'link', href: 'https://docs.inrupt.com/developer-tools/javascript/client-libraries/authentication/',external: true },
      { title: 'Web Access Control Spec', type: 'link', href: 'https://solid.github.io/web-access-control-spec/',external: true },

      { title: 'RDF Lib with Solid', type: 'link', href: 'https://linkeddata.github.io/rdflib.js/Documentation/webapp-intro.html',external: true },
      { title: 'Using rdflib.js', type: 'link', href: 'https://github.com/solidos/solid-tutorial-rdflib.js',external: true },
      { title: 'Ontologies and vocabularies', type: 'link', href: 'https://github.com/solid/vocab',external: true },
      { title: 'List of Common Vocabularies', type: 'link', href: 'https://docs.inrupt.com/developer-tools/javascript/client-libraries/tutorial/use-vocabularies/',external: true },
      { title: 'Solid Namespace Library: Collection of common RDF namespaces', type: 'link', href: 'https://github.com/solid/solid-namespace',external: true }
    ]
  },
  {
    category: 'External SOLID Apps Repositories',
    id: 'apps',
    icon: FileText,
    items: [
      { title: 'Solid apps you can test and play around with', href: 'https://inrupt.com/solidApps/solid-app-listing',external: true },
      { title: 'Pixolid', href: 'https://github.com/carloss8/pixolid/',external: true },
      { title: 'MediaKraken', href: 'https://github.com/NoelDeMartin/media-kraken',external: true },
      { title: 'SOLID Focus Task Manager', href: 'https://github.com/NoelDeMartin/solid-focus',external: true },
      { title: 'SOLID Profile Viewer', href: 'https://gitlab.com/angelo-v/solid-profile-viewer',external: true },
      { title: 'SOLID Groups', href: 'https://gitlab.com/angelo-v/solid-groups',external: true },
      { title: 'SOLIDFlix', href: 'https://github.com/OxfordHCC/solid-media',external: true }
    ]
  },
  {
    category: 'Tutorials',
    id: 'tutorials:',
    icon: Download,
    items: [
      { title: 'Getting started as a Solid developer', href: 'https://solidproject.org/developers/tutorials/getting-started',external: true },
      { title: 'solidcommunity.net Walkthrough - User guide', href: 'https://github.com/SolidOS/userguide',external: true },
      { title: 'Hosting a Web Page On Your Pod', href: 'https://solid.gitbook.io/solid-hacks/static-pages/hosting-a-web-page-on-your-pod',external: true },
      { title: 'Building your first Solid app', href: 'https://solidproject.org//developers/tutorials/first-app',external: true },
      { title: 'How to Build a Solid To-Do App with React', href: 'https://www.freecodecamp.org/news/create-a-solid-to-do-app-with-react/?ref=morioh.com&utm_source=morioh.com',external: true }
    ]
  }
]

export function ResourceGrid() {
  return (
    <section className="mb-20">
      <div className="grid md:grid-cols-2 gap-8">
        {resources.map((resource) => {
          const Icon = resource.icon
          return (
            <Card key={resource.id} id={resource.id} className="p-8 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">{resource.category}</h3>
              </div>
              
              <ul className="space-y-4">
                {resource.items.map((item, i) => {
                  const ActionIcon = resource.category === 'Case Studies' ? FileText : item.external ? ExternalLink : Download

                  return (
                  <li key={i} className="flex items-center justify-between gap-4 p-3 rounded-lg hover:bg-muted transition-colors">
                    <div>
                      <div className="font-medium">{item.title}</div>
                      
                    </div>
                    {item.href ? (
                      <Button asChild variant="ghost" size="sm">
                        {item.external ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open ${item.title}`}
                          >
                            <ActionIcon className="w-4 h-4" />
                          </a>
                        ) : (
                          <a href={item.href} download aria-label={`Download ${item.title}`}>
                            <ActionIcon className="w-4 h-4" />
                          </a>
                        )}
                      </Button>
                    ) : (
                      <Button variant="ghost" size="sm" aria-label={`Download ${item.title}`} disabled>
                        <ActionIcon className="w-4 h-4" />
                      </Button>
                    )}
                  </li>
                  )
                })}
              </ul>
            </Card>
          )
        })}
      </div>
    </section>
  )
}

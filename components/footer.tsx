import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-card border-t py-12 mt-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">{'EWADA'}</h3>
            <p className="text-sm leading-relaxed text-pretty">
              {'Building Ethical Web and Data Infrastructure'}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{'Quick Links'}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-secondary">{'Home'}</Link></li>
              <li><Link href="/news" className="hover:text-secondary">{'News'}</Link></li>
              <li><Link href="/resources" className="hover:text-secondary">{'Resources'}</Link></li>
              <li><Link href="/publications" className="hover:text-secondary">{'Publications'}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{'Resources'}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/resources#code" className="hover:text-secondary">{'EWADA codebases'}</Link></li>
              <li><Link href="/resources#documentation" className="hover:text-secondary">{'Documentation'}</Link></li>
              <li><Link href="/resources#apps" className="hover:text-secondary">{'External SOLID Apps Repositories'}</Link></li>
              <li><Link href="/resources#tutorials" className="hover:text-secondary">{'Tutorials'}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{'External'}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://www.oxfordmartin.ox.ac.uk/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary flex items-center gap-1">
                  {'Oxford Martin School'} <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a href="https://famstudio.co/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary flex items-center gap-1">
                  {'EWADA @ OMS'} <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>{'© 2026 EWADA. Part of Oxford Martin School Programme.'}</p>
        </div>
      </div>
    </footer>
  )
}

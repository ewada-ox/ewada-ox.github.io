import { Card } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

const stakeholders = [
  {
    title: 'Professor Sir Nigel Shadbolt',
    image: 'img/people/nigel-shadbolt.jpg',
    description: 'Professor of Computing Science',
    url: 'https://www.cs.ox.ac.uk/people/nigel.shadbolt/'

  },
  {
    title: 'Tim Berners-Lee',
    image: 'img/people/tim-berners-lee.jpg',
    description: 'Professorial Research Fellow',
    url: 'https://www.oxfordmartin.ox.ac.uk/people/sir-tim-berners-lee'

  },
  {
    title: 'Jun Zhao',
    image: 'img/people/jun-zhao.jpg',
    description: 'Senior Research Fellow',
    url: 'https://www.cs.ox.ac.uk/people/jun.zhao/'
  },
  {
    title: 'Reuben Binns',
    image: 'img/people/reuben-binns.jpg',
    description: 'Associate Professor of Human-Computer Interaction',
    url: 'https://www.cs.ox.ac.uk/people/reuben.binns/'
  },
  {
    title: 'Max Van Kleek',
    image: 'img/people/max-van-kleek.jpg',
    description: 'Associate Professor of Human-Computer Interaction',
    url: 'https://www.cs.ox.ac.uk/people/max.vankleek/'
  },
  {
    title: 'Carissa Veliz',
    image: 'img/people/Carissa-Veliz.png',
    description: 'Associate Professor in Philosophy',
    url: 'https://www.carissaveliz.com'
  },
  {
    title: 'Professor Stefan Dercon',
    image: 'img/people/stefan-dercon.jpg',
    description: 'Professor of Economic Policy',
    url: 'https://www.bsg.ox.ac.uk/people/stefan-dercon'
  },
  {
    title: 'Sandra Wachter',
    image: 'img/people/Wachter_Sandra.png',
    description: 'Associate Professor',
    url: 'https://www.oii.ox.ac.uk/people/sandra-wachter/'
  },
  {
    title: 'Ruben Verborgh',
    image: 'img/people/ruben.jpg',
    description: 'OMS Visiting Scholar',
    url: 'https://ruben.verborgh.org'
  },
  {
    title: 'Naman Goel',
    image: 'img/people/goel.jpg',
    description: 'EWADA Senior Research Associate',
    url: 'https://goelnaman.github.io'
  },
  {
    title: 'Rui Zhao',
    image: 'img/people/rui.jpg',
    description: 'EWADA Postdoctoral Research Assistant (alumni)',
    url: 'https://me.ryey.icu/about/'
  },
  {
    title: 'Samantha-Kaye Johnston',
    image: 'img/people/sam.jpg',
    description: 'EWADA Research Assistant (alumni)',
    url: 'https://findanexpert.unimelb.edu.au/profile/1112922-samantha-kaye-johnston'
  },
  {
    title: 'Nitin Agrawal',
    image: 'img/people/nitin-agrawal.jpg',
    description: 'EWADA Privacy Researcher (alumni)',
    url: 'https://nitincic.github.io'
  },
  {
    title: 'Jake Stein',
    image: 'img/people/jake-stein.jpeg',
    description: 'EWADA DPhil Student',
    url: 'https://www.cs.ox.ac.uk/people/jake.stein/'
  },
  {
    title: 'Zhilin Zhang',
    image: 'img/people/zhilin-zhang.jpg',
    description: 'EWADA DPhil Student',
    url: 'https://www.cs.ox.ac.uk/people/zhilin.zhang/'
  },
  {
    title: 'Jesse Wright',
    image: 'img/people/jesse-wright.jpeg',
    description: 'EWADA DPhil Student',
    url: 'https://www.cs.ox.ac.uk/people/jesse.wright/'
  }



]

export function StakeholderSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            {'Core team'}
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-pretty">
            {'Our multidisciplinary approach brings together diverse stakeholders to create meaningful change'}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {stakeholders.map((stakeholder, index) => {
            
            return (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="hidden sm:block flex-shrink-0 w-[150px] h-[100px] md:w-[200px] md:h-[134px] relative rounded-md overflow-hidden bg-primary/5">
                      <Image
                        src={stakeholder.image}
                        alt={stakeholder.title}
                        fill
                        className="object-cover"
                      />                    
                  </div>
                </div>
                <Link href={`${stakeholder.url}`} className="group flex gap-6 md:gap-8">
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-secondary transition-colors text-balance leading-tight">
                      {stakeholder.title}
                    </h2>
                    <p className="text-base text-muted-foreground mb-3 line-clamp-2 text-pretty">
                      {stakeholder.description}
                    </p>
                  </div>
                  </Link>
                
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

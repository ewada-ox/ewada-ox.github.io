'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Calendar, Newspaper, Users, ChevronLeft, ChevronRight, FileText, Lightbulb, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'

const highlights = [
  {
    type: 'Publication',
    icon: FileText,
    title: 'Paper accepted at WWW2026',
    description: 'Toward Standardized and Transparent Model Licensing" has been accepted by the premier computer science conference WWW2026',
    date: 'Recent',
    link: '/news/2026-03-16-www'
  },
  {
    type: 'Publication',
    icon: FileText,
    title: 'Paper accepted at CHI2026',
    description: 'Attitudes, Imagined Roles, and Governance Boundaries for AI in Decentralized Social Media',
    date: 'Feb 2026',
    link: '/news/2026-03-16-chi'
  },
  {
    type: 'News',
    icon: Lightbulb,
    title: 'EWADA researchers co-organise Solid Symposium 2026',
    description: 'Convening the global community to advance people-first web technology',
    date: 'Feb 2026',
    link: '/news/2026-02-12-solid'
  },
  {
    type: 'Publication',
    icon: FileText,
    title: 'Two papers accepted at AAMAS and WWW2026',
    description: 'Launching Parent Bench, a framework for evaluating large language models designed to support parents in their digital parenting journey ethically and effectively.',
    date: 'Jan 2026',
    link: '/news/2026-01-20-publications'
  },
  {
    type: 'Workshop',
    icon: Calendar,
    title: 'Co-leading Oxford Edge Early Childhood Hackathon',
    description: 'Promoting ethical innovation in early childhood technology through collaborative hackathon focused on child-centered design principles.',
    date: 'November 2025',
    link: '/news/2025-11-22-ws'
  },
  {
    type: 'Workshop',
    icon: Calendar,
    title: 'EWADA researchers co-organised Workshop on Human-Centric Agentic Web',
    description: 'Co-located with the Distributed Artificial Intelligence (DAI) conference. ',
    date: 'November 2025',
    link: '/news/2025-11-22-ey'
  }
]

export function HighlightsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % highlights.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + highlights.length) % highlights.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % highlights.length)
  }

  const current = highlights[currentIndex]
  const Icon = current.icon

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          {'Latest Updates'}
        </h2>
        
        <Card className="p-8 md:p-12 relative overflow-hidden min-h-[320px]">
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors z-10"
            aria-label="Previous highlight"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors z-10"
            aria-label="Next highlight"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>

          <div className="flex items-start gap-6">
            <div className="hidden md:flex w-16 h-16 rounded-full bg-primary/10 items-center justify-center flex-shrink-0">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                  {current.type}
                </span>
                <span className="text-sm text-muted-foreground">{current.date}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-balance">
                {current.title}
              </h3>
              <p className="text-lg leading-relaxed text-pretty">
                {current.description}
              </p>
              
              <Button asChild variant="outline" size="sm">
                  <a
                    href={current.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={'Read More'}
                  >Read more
                  </a>
              </Button>
            </div>
          </div>

          <div className="flex gap-2 justify-center mt-8">
            {highlights.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-8 bg-primary' : 'bg-primary/30'
                }`}
                aria-label={`Go to highlight ${index + 1}`}
              />
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}
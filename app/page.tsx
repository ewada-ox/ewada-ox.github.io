import { Hero } from '@/components/hero'
import { HighlightsCarousel } from '@/components/highlights-carousel'
import { StakeholderSection } from '@/components/stakeholder-section'
import { MissionSection } from '@/components/mission-section'

export default function Home() {
  return (
    <main>
      <Hero />
      <MissionSection />
      <HighlightsCarousel />      
      <StakeholderSection />
    </main>
  )
}

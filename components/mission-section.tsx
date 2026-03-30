import { Award, Book, Scale, Users } from 'lucide-react'
import { Card } from '@/components/ui/card'

const missions = [
  {
    icon: Award,
    title: 'Data Autonomy',
    description: 'How can we support individuals to control, manage, maintain and use personal data?'
  },
  {
    icon: Users,
    title: 'Data Privacy',
    description: 'How can we provide privacy-preserving machine learning (PPML) methods that can perform AI training in a decentralised way?'
  },
  {
    icon: Scale,
    title: 'Accountability',
    description: 'How can we develop methods to assess whether AI or algorithmic decision making is fair, equitable and complies with regulatory requirements?'
  },
  {
    icon: Book,
    title: 'Data Sharing',
    description: 'How can we explore new institutional and legal constructs within which to hold data or algorithmic outputs? '
  },
]

export function MissionSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            {'Our mission'}
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-pretty">
            {'We aim to reform the concentration of power on the World Wide Web by developing and deploying new forms of technical and legal infrastructure.'}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {missions.map((mission, index) => {
            const Icon = mission.icon
            return (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{mission.title}</h3>
                  </div>
                </div>
                <p className="text-lg leading-relaxed mb-6 text-pretty">
                  {mission.description}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

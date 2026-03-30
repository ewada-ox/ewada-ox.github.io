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
    category: 'Design Principles',
    id: 'design-principles',
    icon: BookOpen,
    items: [
      { title: 'AI Ethics Principles for Children', type: 'Image', href: '/resources/ai_ethics_principles_for_children.webp' },
      { title: 'Framework for Designing Children\'s Agency', type: 'File', href: 'https://github.com/junszhao/ethical-design/blob/main/docs/',external: true }
    ]
  },
  {
    category: 'Research Publications',
    id: 'research-publications',
    icon: FileText,
    items: [
      { title: 'Challenges and Opportunities in Translating Ethical AI Principles into Practice for Children', type: 'Paper', href: '/resources/wang2024challenges.pdf'},
      { title: '12 Ways to Empower: Designing for Children\'s Digital Autonomy', type: 'Paper', href: '/resources/wang2023twelve.pdf'},
      { title: 'Co-designing with Children to Cope with Datafication Online', type: 'Paper', href: '/resources/wang2023treat.pdf' },
      { title: 'CHAITok: A Proof-of-Concept System Supporting Children\'s Sense of Data Autonomy on Social Media', type: 'Paper', href: '/resources/wang2024chaitok.pdf' }
    ]
  },
  {
    category: 'Case Studies',
    id: 'case-studies',
    icon: FileText,
    items: [
      {
        title: 'A child-centred AI ecosystem to transform early year education',
        type: 'GitHub Repo & Figma',
        href: 'https://github.com/junszhao/ethical-design/tree/main/case_studies/case%20study%200',
        external: true
      },
      { title: 'A child-centred system to support children with special education needs', 
        type: 'GitHub Repo & Figma', 
        href: 'https://github.com/junszhao/ethical-design/tree/main/case_studies/case%20study%201', 
        external: true
      },
      { title: 'A child-centred system to help parents support children\'s social emotion learning', 
        type: 'GitHub Repo & Figma', 
        href: 'https://github.com/junszhao/ethical-design/tree/main/case_studies/case%20study%202', 
        external: true
      }
    ]
  },
  {
    category: 'Educational Materials',
    id: 'educational-materials',
    icon: Download,
    items: [
      { title: 'Design for Agency Curriculum Package', type: 'GitHub Repo & Figma', href: 'https://github.com/junszhao/ethical-design', external: true },
      { title: 'Workshop Facilitation Material', type: 'GitHub Repo & Figma', href: 'https://github.com/junszhao/ethical-design/tree/main/workshop_material', external: true }
    ]
  }
]

export function ResourceGrid() {
  return (

    <section className="mb-20">
      <div className="grid md:grid-cols-1 gap-8">
      <ul>2026
        <li>1. Zhilin Zhang, Jun Zhao, Ge Wang, Sruthi Viswanathan, Tala Jo Ross, Samantha-Kaye Johnston, Diyi Liu, Hayoun Noh, Max Van Kleek, and Nigel Shadbolt. Attitudes, Imagined Roles, and Governance Boundaries for AI in Decentralized Social Media. In CHI 2026</li>
        <li>2. Panayiotis Danassis, Naman Goel. Can Vibe Coding Beat Graduate CS Students? An LLM vs. Human Coding Tournament on Market-driven Strategic Planning. Proceedings of the 25th International Conference on Autonomous Agents and Multiagent Systems, AAMAS 2026.<a href="http://arxiv.org/abs/2511.20613">[pdf]</a></li>
        <li>3. Qinyi Liu, Mohammad Khalil, Naman Goel. Causal Pre-training Under the Fairness Lens: An Empirical Study of TabPFN. Proceedings of the ACM Web Conference, TheWebConf (WWW) 2026.<a href="https://www.arxiv.org/abs/2601.17912">[pdf]</a></li>
        <li>4. Moming Duan, Rui Zhao, Linshan Jiang, Nigel Shadbolt, Bingsheng He. "They've Stolen My GPL-Licensed Model!": Toward Standardized and Transparent Model Licensing. Proceedings of the ACM Web Conference, TheWebConf (WWW) 2026.<a href="https://arxiv.org/abs/2412.11483">[pdf]</a></li>
        <li>4. Zhao J et al. Editorial for the special issue on child-centred AI. International Journal of Human-Computer Studies. <a href="https://doi.org/10.1016/j.ijhcs.2026.103777">[pdf]</a></li>
        <li>5. Zhao J. Designing for children's autonomy and agency in the age of artificial intelligence. IEEE Technology and Society. <a href="https://doi.org/10.36227/techrxiv.176409711.13025052/v1">[pdf]</a></li>
      </ul>
      <ul>2025
      <li>1. Fisher, G., et al. "141PA multicentre, prospective, longitudinal and observational natural history study for patients with nemaline myopathy in the UK with novel international collaboration." Neuromuscular Disorders 53 (2025): 105688. <a href="https://www.sciencedirect.com/science/article/pii/S0960896625004158">[pdf]</a></li>
      <li>2. Binns, Reuben, et al. "Not Even Nice Work If You Can Get It; A Longitudinal Study of Uber's Algorithmic Pay and Pricing." Proceedings of the 2025 ACM Conference on Fairness, Accountability, and Transparency. 2025. <a href="https://ora.ox.ac.uk/objects/uuid:581fb33c-2414-4406-ab51-65661738f3c5/files/sn296x150s">[pdf]</a></li>
      <li>3. Gala et al. Fairness-Aware Interactive Target Variable Definition (Demo). Proceedings of the 34th International Joint Conference on Artificial Intelligence, IJCAI, 2025. <a href="https://goelnaman.github.io/upload/doc/papers/2023/gala_fts23.pdf">[pdf]</a><a href="http://fairtargetsim.streamlit.app/">[Demo]</a></li>
      <li>4. Moming Duan, Mingzhe Du, Rui Zhao, Mengying Wang, Yinghui Wu, Nigel Shadbolt, Bingsheng He. Current Model Licensing Practices are Dragging Us into a Quagmire of Legal Noncompliance. The 42nd International Conference on Machine Learning (ICML 2025)<a href="https://openreview.net/pdf?id=1rh8iTehBc">[pdf]</a></li>
      <li>5.  Ge Wang, Jun Zhao, Max Van Kleek, Roy Pea, Nigel Shadbolt (2025). FamiData Hub: A Speculative Design Exploration with Families on Smart Home Datafication.. In CHI25. [<a href="https://dl.acm.org/doi/pdf/10.1145/3706598.3713494 Honourable Mention">[pdf]</a></li>
      <li>6. Lin Kyi, Amruta Mahuli, M. Six Silberman, Reuben Binns, Jun Zhao, Asia J. Biega. Governance of Generative AI in Creative Work: Consent, Credit, Compensation, and Beyond. In CHI25. <a href="https://arxiv.org/pdf/2501.11457">[pdf]</a></li>
      <li>7. Naman Goel. On The Truthfulness of 'Surprisingly Likely' Responses of Large Language Models. Proceedings of the ACM Collective Intelligence Conference, CI 2025. <a href="https://goelnaman.github.io/upload/doc/papers/2023/goel23_truthful-llm.pdf">[pdf]</a></li>
      <li>8. Moming Duan, Rui Zhao, Linshan Jiang, Nigel Shadbolt, Bingsheng He. They've Stolen My GPL-Licensed Model!": Toward Standardized and Transparent Model Licensing. Accepted for ICML 2025. <a href="https://arxiv.org/pdf/2412.11483">[pdf]</a></li>
      <li>9. Zhao R et al. Libertas: Privacy-Preserving Collaborative Computation for Decentralised Personal Data Stores. Accepted for CSCW 2025. <a href="https://arxiv.org/html/2309.16365v2">[pdf]</a><a href="https://github.com/OxfordHCC/libertas">[code]</a></li>
      <li>10. Piero A. Bonatti, John Domingue, Anna Lisa Gentile, Andreas Harth, Olaf Hartig, Aidan Hogan, ..., Jesse Wright. Towards Computer-Using Personal Agents. Report of Dagstuhl Seminar 25051. <a href="https://arxiv.org/pdf/2503.15515">[pdf]</a></li>
      <li>11. Zhao R et al. Let's Measure the Elephant in the Room: Facilitating Personalized Automated Analysis of Privacy Policies at Scale. <a href="https://arXiv:2507.14214">[pdf]</a></li>    
      </ul> 

      <ul>2024
        <li>1. Zhang et al. Trouble in Paradise? Understanding Mastodon Admin’s Motivations, Experiences, and Challenges Running Decentralised Social Media. In CSCW’2024. <a href="https://dl.acm.org/doi/pdf/10.1145/3687059">[pdf]</a></li>
        <li>2. Emilia Agis Lerner, Florian E. Dorner, Elliott Ash, Naman Goel. Whose Preferences? Differences in Fairness Preferences and Their Impact on the Fairness of AI Utilizing Human Feedback. Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics, ACL 2024. <a href="https://aclanthology.org/2024.acl-long.509/">[pdf]</a></li>
        <li>3. Vizgirda et al. SocialGenPod: Privacy-Friendly Generative AI Social Web Applications with Decentralised Personal Data Stores. In WWW'2024. <a href="https://arxiv.org/abs/2403.10408">[pdf]</a></li>
        <li>4. Zhao R and Zhao J. Perennial semantic data terms of use for decentralized web. In WWW'2024. <a href="https://arxiv.org/pdf/2403.07587">[pdf]</a></li>
        <li>5. Wang et al. KOALA Hero Toolkit: A New Approach to Inform Families of Mobile Datafication Risks. In CHI'2024. <a href="https://ora.ox.ac.uk/objects/uuid:72ff0c6f-9ad1-4906-a2ef-f52ac17cdde0/files/s1r66j295t">[pdf]</a></li>
        <li>6. Wang et al.  CHAITok: A Proof-of-Concept System Supporting Children's Sense of Data Autonomy on Social Media. In CHI'2024. <a href="https://dl.acm.org/doi/pdf/10.1145/3613904.3642294">[pdf]</a>"Honourable Mention"</li>
        <li>7. Wang et al. Challenges and opportunities in translating ethical AI principles into practice for children. Nature Machine Intelligence. Mar 2024. <a href="https://www.nature.com/articles/s42256-024-00805-x">[pdf]</a></li>
      </ul>  


      <ul>2023
        <li>Elliott Ash, Naman Goel, Nianyun Li, Claudia Marangon, Peiyao Sun. WCLD: Curated Large Dataset of Criminal Cases from Wisconsin Circuit Courts. Proceedings of the 37th Conference on Neural Information Processing Systems, NeurIPS, 2023. <a href="https://papers.nips.cc/paper_files/paper/2023/hash/29c80c549ed67ddd7259559c1bb07c1b-Abstract-Datasets_and_Benchmarks.html">[pdf]</a></li>
        <li>Florian E.Dorner, Momchil Peychev, Nikola Konstantinov, Naman Goel, Elliott Ash, Martin Vechev. Human-Guided Fair Classification for Natural Language Processing. Proceedings of the International Conference on Learning Representations, ICLR, 2023. <a href="https://openreview.net/forum?id=N_g8TT9Cy7f">[pdf]</a></li>
        <li>Christina Timko, Malte Niederstadt, Naman Goel, Boi Faltings. Incentive Mechanism Design for Responsible Data Governance: A Large Scale Field Experiment. ACM Journal of Data and Information Quality, ACM JDIQ 2023. <a href="https://dl.acm.org/doi/pdf/10.1145/3592617">[pdf]</a></li>
        <li>Ramesh et al. Decentralised, Scalable and Privacy-Preserving Synthetic Data Generation. <a href="https://arxiv.org/abs/2310.20062">[pdf]</a></li>
        <li>Zhao et al. Libertas: Privacy-Preserving Computation for Decentralised Personal Data Stores. <a href="https://arxiv.org/abs/2309.16365">[pdf]</a></li>
        <li>Zhao et al. Long-living Service for Cooperative Knowledge Use in Decentralized Data Stores. <a href="https://arxiv.org/abs/2306.14890">[pdf]</a></li>
        <li>Ekambaranathan A, Zhao J and Chalhoub G. ""Navigating the Data Avalanche: Towards Supporting Developers in Developing Privacy-Friendly Children's Apps". In Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT). <a href="https://www.cs.ox.ac.uk/files/14323/Ekambaranathan%2B_et_al_2023_navigating_the_data.pdf">[pdf]</a></li>
        <li>Ekambaranathan A, Zhao J and Van Kleek M. "How Can We Design Privacy-Friendly Apps for Children? Using a Research through Design Process to Understand Developers' Needs and Challenges". CSCW 2023. <a href="https://ora.ox.ac.uk/objects/uuid:304b3f3d-fef8-43c0-be03-74ffa205663f/files/s6395w8537">[pdf]</a></li>
        <li>Stein et al.  "‘You are you and the app. There’s nobody else.’: Building Worker-Designed Data Institutions within Platform Hegemony." Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems. 2023. <a href="https://www.cs.ox.ac.uk/files/14281/Stein_et_al_2023_you_are_you.pdf">[pdf]</a></li>
        <li>Stein J, Jake ML and Calacci, Dan, “From access to understanding: Collective data governance for workers.” European Labor Law Journal. 2023. <a href="https://www.dcalacci.net/papers/202.10.10-collective-data-access-latest.pdf">[pdf]</a></li>
        <li>Wang et al. 12 Ways to Empower: Designing for Children’s Digital Autonomy. CHI 2023. <a href="https://www.tiffanygewang.com/publication/paper-placeholder-15/paper-placeholder-15.pdf">[pdf]</a></li>
        <li>Wang et al. "Treat me as your friend, not a number in your database": Co-designing with Children to Cope with Datafication Online <a href="https://www.tiffanygewang.com/publication/paper-placeholder-16/paper-placeholder-16.pdf">[pdf]</a></li>
        <li>Zhao, J. Call for a new data governance structure for datafied childhood. <a href="https://ewada.ox.ac.uk/img/Education-Data-Futures_Essay-22.pdf">[pdf]</a></li>
      </ul>

      <ul>2022
        <li>Kollnig et al. Before and after GDPR: tracking in mobile apps. Internet Policy Review, 10(4).<a href="https://arxiv.org/pdf/2112.11117.pdf">[pdf]</a></li>
        <li>Wang et al. ‘Don’t make assumptions about me!’: Understanding Children’s Perception of Datafication Online. CSCW'22. <a href="https://www.tiffanygewang.com/publication/paper-placeholder-8/paper-placeholder-8.pdf">[pdf]</a></li>
        <li>Kollnig et al. Goodbye tracking? Impact of iOS app tracking transparency and privacy labels. In Proc. of FAccT'22 <a href="https://arxiv.org/pdf/2204.03556.pdf?">[pdf]</a></li>
        <li>Wang et al. Informing Age-Appropriate AI: Examining Principles and Practices of AI for Children. Proceedings of the 2022 CHI Conference on Human Factors in Computing Systems. 536(1-29). <a href="https://ora.ox.ac.uk/objects/uuid:98022d77-3b32-4f06-a4a7-a624aa564b33">[pdf]</a></li>
        <li>Veale et al. Fortifying the Algorithmic Management Provisions in the Proposed Platform Work Directive. <a href="https://osf.io/preprints/socarxiv/7jyhe/">[pdf]</a></li>
        <li>EWADA's Response to DCMS Consultation on Online Safety Bill. June 2022. <a href="https://koala.web.ox.ac.uk/sites/default/files/koala/documents/media/oxccai_children.pdf">[pdf]</a></li>
        <li>A suits of essays published by our team members during our inaugural colloquium with the GoodEnough College in March 2022<a href="https://aireg.net/index.html">[link]</a></li>
        <li>EWADA's Response to CMA Consultation on Mobile Ecosystems.February 2022<a href="https://ewada.ox.ac.uk/img/UK_CMA_Consultation_Mobile_Ecosystems.pdf">[pdf]</a></li>
      </ul>

      <ul>2021
        <li>Wang et al. Protection or punishment? relating the design space of parental control apps and perceptions about them to support parenting for online safety. CSCW'21. <a href="https://ora.ox.ac.uk/objects/uuid:da71019d-157c-47de-a310-7e0340599e22">[pdf]</a></li>
        <li>Agrawal et al. Exploring design and governance challenges in the development of privacy-preserving computation. Proceedings of the 2021 CHI Conference on Human Factors in Computing Systems. 68 (1-3)<a href="https://arxiv.org/pdf/2101.08048.pdf">[pdf]</a></li>
        <li>Kollnig et al. Are iPhones Really Better for Privacy? Comparative Study of iOS and Android Apps. Proceedings on Privacy Enhancing Technologies. 2022. 2(6-24)<a href="https://arxiv.org/pdf/2109.13722.pdf">[pdf]</a></li>
        <li>EWADA's Response to DCMS Consultation on Reformation of the UK’s Data Protection Regime. November 2021.<a href="https://ewada.ox.ac.uk/img/Oxford_HCC_RTI_DCMS_Consultation_Response.pdf">[pdf]</a></li>

      </ul>

      </div>
    </section>
  )
}

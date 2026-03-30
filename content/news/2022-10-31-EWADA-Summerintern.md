---
layout: post 
title:  "EWADA Summer 2022 Internship Report"
date: "October 31, 2022"
description: "A summary of the four projects carried out and how they contribute to the EWADA vision."
author: Jun Zhao
image: "/img/banners/oxford-panorama-cropped1.jpg"
#banneranchor: 50%
extlabel: Report about student internship
pin: true
---

Summer 2022 is our second year of running a very successful internship programme. We are fortunate to have secured four internships with excellent candidates, each adding tremendous contributions to EWADA’s exploration of creating ethical web applications for the future with [Solid](https://solidproject.org). This summer has been full of excitement and inspiration. This report summarises the four projects carried out and how they contribute to the EWADA vision.

# Overview of the projects

The key goal of the EWADA project is "to develop and deploy new forms of technical and legal infrastructure, to re-design and promote a more equitable and ethical treatment of individual users and collectives in a sustainable way". In the first year, our focus is to deliver a suit of case study applications so that we could gain a deeper understanding of the components that are needed for building the ethical, decentralised architecture. For this, we need to understand both from a user’s point of view and a practical and technical point of view what these components should look like.

From a **human-centred** point of view, we need to understand what users recognise as being ethical, how they would like these components to look like and what supports are needed. For the **engineers and researchers**, we need to understand what technical are needed and how they could be brought together. 

We have gained some knowledge about these challenges through our ongoing research with children ([regarding datafication and data autonomy](https://koala.web.ox.ac.uk/article/datafication-children)) and our building of a [solid-media application](https://github.com/OxfordHCC/solid-media). This summer, we aim to achieve further understandings through the following projects:
- The Gigworker project: by interacting with gig workers to explore what data autonomy barriers that workers are facing with existing online platforms and what support they need
- The Solid Calendar project: by extending existing Solid architecture’s capability of interoperating with existing data sources, s uch as various calendar formats from existing providers
- The SolidFlix project: by benchmarking performance of Solid-based applications and exploring ethical movie recommendation opportunities
- The Multi-Party Computation (MPC) project: by extending existing Solid-like decentralised systems with the necessary privacy-preserving computation capabilities.

As shown in the outline figure below, these projects provide a rich opportunity to explore various technical and social components for realising our vision of an ethical architecture:

1. Supporting collective users’ values: Existing solid-based applications have largely been focusing on supporting individual users to explore and manage their own data using Solid, in order to bootstrap their autonomy with their data. However, the ‘GigWorker’ project aims to explore how Solid can support collective values from individuals’ autonomy, for example for workers to argue for more fair salary rate or to create peer support, reduce isolations and manage their collective well-beings. For this, we are interested to examine what kind of collective values would be useful for workers, and what concerns and needs they may have.

2.	Supporting a richer decentralised web architecture: Access control is fundamental to Solid data storage. However, several additional components may be useful in addition to the vanilla Solid. This includes: 1) a privacy-preservation computation component, so that we could apply data aggregations or AI-based computations to individual’s data without compromising their data privacy and security; 2) an ethical AI computation component, so that personalisation computations will not continue to introduce filter bubbles, biased recommendations or exploitations; and 3) a data adapter/orchestrator component, so that Solid applications can interoperate with existing data sources or formats, without forcing users to abandon their existing digital habits.


<p align="center">
  <img alt="EWADA Summer 2022" src="/img/blog/summer2022.png" class="img-responsive center-block" width="90%" ><br/>
  <em> Fig 1. EWADA summer projects contribute to new ethcial app components (a Data Orchestrator, an ethical AI recommender and a privacy computation component), and three new ethical (social) web applications,  including a social calendar, an ethical platform for gigworkers and a platform for social moving sharing.</em>
</p>

# Outcomes and next steps

Our summer projects made great strides in exploring these social and technical components. From the GigWorker study, we have identified the plurality of needs from the workers and we are continuing the work by creating a prototype that will cater for workers’ diversity needs. We generated encouraging early results for integrating a privacy-preserving computation components with the Solid architecture, and we aim to extend this work by deploying this integration in actual ethical applications. We completed the prototyping of the data orchestrator design and are hoping to present this design to the Solid community in the near future. In the process of adding ethical recommendations to the SoliFlix project, we worked extensively to explore performance optimisations and we are also hoping to present this result to the Solid community soon.

Fig 2 illustrates our key next steps:
- From in principle to in practice: several components mentioned above have not yet been fully integrated into one reference implementation, which will present an exciting starting point for developing practical application scenarios such as for gig workers or ethical recommendation systems for children.
- From in principle to in the wild: we will also focus on sharing all the design and development experiences with the wider Solid and open-source communities, to ensure interoperability and bootstrap the uptake of our proposed solutions.
- Furthermore, we will consolidate some of the components we started and make investigation of various social-technical components, based on this excellent technical ground we have developed so far, including how we may provide supports for users to select Solid pod providers or ethical app components that they can trust, what kind of algorithmic transparency will be needed by users in the newly decentralised and ethical web applications, what new data protection regulations, governance and auditing are needed, and etc.

We are hoping the successful summer internship will continue its tradition next year as it has been exciting to see how the internships have provided an effective way for us to define miniature tasks that make critical contributions to the project overall, as well as to transfer our frontier understandings about the key of creating web decentralisations to our amazing interns, Vid, Zimeng, Hunar and Adrien! Thank you, and wish you all the best of luck!

<p align="center">
  <img alt="Post EWADA Summer 2022" src="/img/blog/summer2022-post.png" class="img-responsive center-block" width="100%" ><br/>
  <em> Fig 2. EWADA's focus post-summer internships: deployment and testing of new applications, and enhancement of core ethical computing components.</em>
</p>



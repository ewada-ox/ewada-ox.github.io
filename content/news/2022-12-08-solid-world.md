---
layout: post 
title:  "EWADA presentation at Solid World December 2022"
date: "December 08, 2022"
description: "A summary of our team's presentation at solid world december 2022"
author: Jun Zhao
image: "/img/blog/solidworld.png"
#banneranchor: 50%
extlabel: Report about a public presentation
pin: true
---

On 8 December, the EWADA team members, Jun, Rui and Hunar, represented the project team on the remote gathering of [Solid World](https://www.eventbrite.co.uk/e/solid-world-2022-tickets-223005725127), and shared with the Solid community some of our latest developments.

[Solid World](https://solidproject.org/events) is a monthly online event that provides an opportunity for the community to meet others who are also working on Solid. The December event started with an introduction from Tim and Pierrer-Antoine about the formation of a W3C working group for Solid, and then followed by presentations by us about [SolidFlix](https://github.com/OxfordHCC/solid-media) and [Solid Calendar](https://github.com/OxfordHCC/knoodle), and another presentation from Jackson Morgan about LDO.


Both Hunar and Rui provided a short presentation about [SolidFlix](https://github.com/OxfordHCC/solid-media) and [Solid Calendar](https://github.com/OxfordHCC/knoodle) respectively, which included a short screencast showing how the current implementation works, see videos linked below. In the presentation of SolidFlix, Hunar gave a nice summary of the architectural design of our application and its current ability of enabling social sharing of movies and performing simple movie recommendations based on what friends have watched/liked. In the presentation of Solid Calendar, Rui showed how the application can enable users to sync their existing calendars (such as Google Calendar and iCal) with their Solid pods, and thus make it easier for them to schedule meetings using this Solid-based application with friends, who may rely on different calendar systems. The application improves an existing application from Ghent University, [Knoodle](https://github.com/KNowledgeOnWebScale/knoodle/), with a more usable user interface and a refactoring of the original architectural design, which replaces the dependency of a custom-built Solid server with more modularised components.


The presentations were well received by the >60 attendees at the meeting and we received interesting questions including: whether we have performed any UX evaluations with our prototypes yet and how users reacted to it, whether SolidFlix is compatible with [Media Kraken](https://noeldemartin.github.io/media-kraken/login), and how we see the proposed architectural design of Solid Calendar could work with existing Solid designs.


To follow up, our next steps for the SolidFlix project include continuing internal user testing to improve the robustness of the initial log-in (onboard) process, and exploring a privacy-preserving movie recommendation. For the Solid Calendar project, we would also like to carry out further internal testing, deploy the new calendar import service (aka the orchestrator service) for broader access within Oxford, and explore the interoperability of our proposed architectural design with the rest of Solid stacks.

Below are links to our presentations and demo pages:


- Presentation of SolidFlix [Google slides](https://docs.google.com/presentation/d/1aJHNJv1AJM2LX9nBFl892L4FsR1ygyGMRKjO1O7zq_8/edit?usp=sharing)
- [Presentation of Solid Calendar, including the screencast](https://docs.google.com/presentation/d/1qZfcU0owkGlN0185YzZrIP2RHHI_oNmB1wFBvWx0QmA/edit?usp=sharing)
- [Demo page for SolidFlix](ttps://oxfordhcc.github.io/solid-media) - WebID required
- [Demo page for Solid Calendar](https://solid-calendar.vercel.app/ ) - WebID and access to a Google Calendar required


Please do not hesitate to get in touch with us via the contact page if you would like to know more about the work.


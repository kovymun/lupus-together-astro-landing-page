## Lupus Together | Technical Case Study (Astro + TypeScript)

![Astro](https://img.shields.io/badge/Astro-1a1a1a?style=for-the-badge&logo=astro&logoColor=FF5D01) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript) ![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3)

**Lupus Together** is a community based landing page support community designed with empathy to uplift individuals and families affected by Lupus. Inspired by a loved one's journey with Lupus, this project blends human centered design with production grade development to create a digital space for awareness, connection, and support.

This repository is a high fidelity **Proof of Concept (PoC)** demonstrating modern web performance, accessibility, and a strategic migration from a React.js to Astro.js.

**Note:** This is a migration from the original React project which can be found here: [Link to Original Repo](https://github.com/kovymun/lupus-together-landing-react-ts-django.git)

---

### Table of Contents

- [The Migration](#the-migration)
- [Engineering Highlights](#engineering-highlights)
- [Tech Stack](#tech-stack--optimization)
- [Installation Guide](#installation-guide)
- [Usage Guide](#usage-guide)
- [Future Plans](#future-plans)
- [Acknowledgment](#acknowledgment)
- [Disclaimer](#disclaimer)
- [Credits](#credits)
- [Contact](#contact)

---

### The Migration:

#### Why the switch from React to Astro.js?

- **Performance:** As a content heavy landing page, React's "Heavy JS" bundle was unnecessary. Astro ships **zero client side JavaScript** by default, resulting in near instant load times.
- **SEO Excellence:** For a community focused site, discoverability is key. Astro's Static Site Generation (SSG) ensures search engines crawl fully rendered HTML.
- **Developer Experience:** Astro allows me to maintain a component based workflow with TypeScript while producing a significantly leaner final build.

---

### Engineering Highlights

- **Islands Architecture:** Utilized Astro's hydration strategy to keep the site static while preparing **islands** of interactivity for future backend features.
- **Fluid Responsive Design:** Implemented a single variable scaling system using CSS `clamp()` for consistent, fluid typography across all device widths.
- **SEO Strategy:** Dynamically injected meta descriptions and semantic HTML tags to ensure maximum search engine visibility.
- **A11y Compliance:** Audited for WCAG standards, including descriptive link text and accessible ARIA labeling.

---

### Tech Stack & Optimization

- **Framework:** [Astro.js](https://astro.build/) (Production grade SSG)
- **Language:** TypeScript (Type safe component props)
- **Styling:** Vanilla CSS (Modular & Fluid)
- **Performance:** [Fontsource](https://fontsource.org/) for self-hosting fonts to eliminate render-blocking third-party requests.
- **Assets:** Optimized WebP image delivery via Astro's native `<Image />` component.

---

### Installation Guide

Follow these steps to set up the project on your local machine, and run both the project.

#### Pre-requisites:

- **Node.js** (v18 or later), which includes npm by default. [Node.js](https://nodejs.org/en)

#### Steps:

1. **Create a directory for the project:** Open your terminal and run mkdir `<your-directory-name>` | cd `<your-directory-name>`.
2. **Open the folder in VS Code:** run `code .`
3. **Clone the repository:** git clone https://github.com/kovymun/lupus-together-astro-landing-page.git
4. **Navigate into the project folder:** cd lupus-together-astro-landing-page
5. **Install frontend dependencies:** npm install or npm i
6. **Start the development server:** Navigate to the root folder, and run `npm run dev`. The app should now be running locally on localhost in the browser of your choice.

---

### Usage Guide

This website/landing page is structured into several key sections designed to guide visitors and create a meaningful experience:

- Hero Section
- About Lupus Together
- Understanding Lupus
- Testimonial Section
- Meet the Team
- Join the Community Form
- Footer with contact and legal info

#### How to Use:

1. **Start the Application:** Set up and run the project locally using the steps in the [Installation Guide](#installation-guide).
2. **Explore the Hero Section:** Once the app loads, you’ll be welcomed with a hero banner representing Lupus Together.
3. **Navigate Smoothly:** Scroll or click through the navigation bar to explore each section. Smooth scrolling is enabled for a seamless experience.
4. **Learn About Lupus Together:** Get to know the purpose behind the platform, what it offers, how it started, and how it supports individuals and families.
5. **Understand Lupus:** The _Understanding Lupus_ section presents facts in a warm, accessible tone, empowering users with knowledge.
6. **Feel the Human Stories:** The testimonial section features powerful community voices to help users feel seen and connected.
7. **Meet the Team:** Discover the faces behind the platform, the people dedicated to fostering support.
8. **Join the Community:** Fill out the form to express interest in becoming part of the Lupus Together support circle.

---

### Future Plans

- **Backend Implementation:** Developing a FastAPI backend for community sign-up.

---

### Acknowledgment

Inspired by a family member who battles Lupus daily. This project is a tribute to their strength, and to those navigating this journey around the world.

---

### Disclaimer

All names, services, testimonials, locations, and brand references, including _Lupus Together_, are fictional and created for the sole purpose of demonstrating software development, UI/UX design, and implementation best practices. Any resemblance to real individuals or organizations is purely coincidental. _Note: This is project intended to showcase UI/UX thinking, design sensitivity, and modern web development techniques._

Images used are royalty-free and sourced from **[Unsplash](https://unsplash.com/)** and **[Lummi AI](https://www.lummi.ai/)** , optimized for performance (WebP format). **Social links** included are placeholders to demonstrate UI layout and design.

---

### Credits

- **Sole Developer & Designer:** Koveshan Munsami
- **Inspiration:** A family member who lives with Lupus daily. This is for them, and for all who need a gentle place to land.

---

### Contact

- Connect with me on [LinkedIn](https://www.linkedin.com/in/koveshan-munsami/)

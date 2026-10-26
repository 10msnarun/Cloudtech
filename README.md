# CloudTech — AWS Cloud Consulting & Solutions

Production-ready, single-page website for **CloudTech**, an AWS cloud consulting and engineering firm specializing in cloud infrastructure architecture, migration, DevOps automation, cloud security, and cost optimization.

---

## Project Overview

- **Company Name**: CloudTech
- **Core Specialization**: AWS Cloud Consulting, Cloud Migration, DevOps & CI/CD, Zero-Trust Cloud Security, FinOps Cost Optimization, and Cloud Infrastructure Management.
- **Architecture**: Single-page application (SPA) with responsive design, dynamic architecture diagrams, interactive service models, and client-side consultation intake.
- **Deployment**: Multi-stage Docker container served via high-performance Nginx Alpine.

---

## File Structure

```text
.
├── Dockerfile                  # Multi-stage production build (Node.js -> Nginx)
├── docker-compose.yml          # Container configuration (host port 8080 -> 80)
├── .dockerignore               # Build context exclusions
├── nginx.conf                  # Production web server and routing configuration
├── index.html                  # HTML entry point with metadata and SEO
├── metadata.json               # Applet metadata configuration
├── package.json                # Project dependencies and npm scripts
├── tsconfig.json               # TypeScript compiler options
├── vite.config.ts              # Vite bundler configuration
├── README.md                   # Setup, containerization, and operations guide
├── public/
│   └── assets/
│       └── aistudio/
│           └── WhatsApp_Image_2026-10-26_at_3.47.09_PM_5e2358ba.jpeg  # Official logo
└── src/
    ├── main.tsx                # Application bootstrap
    ├── App.tsx                 # Single-page layout coordinator
    ├── index.css               # Global theme and atmospheric styling
    ├── types/
    │   └── index.ts            # TypeScript interfaces
    └── components/
        ├── BrandLogo.tsx       # Logo renderer preserving proportions
        ├── Navbar.tsx          # Sticky navigation with mobile menu
        ├── Hero.tsx            # Hero with AWS cloud visualization
        ├── Services.tsx        # 6 core service cards with detail modals
        ├── Solutions.tsx       # 4 solution architecture frameworks
        ├── ArchitectureShowcase.tsx # Interactive Users -> Storage data flow
        ├── WhyChooseUs.tsx     # 4 business and engineering principles
        ├── ContactSection.tsx  # Consultation form with validation
        └── Footer.tsx          # Footer with logo, navigation, and legal dialog
```

---

## Quick Start with Docker (Recommended)

### Prerequisites

- **Docker Engine** (version 20.10 or later)
- **Docker Compose** (Compose V2 recommended)

### 1. Build and Start the Container

Run the following command from the project root:

```bash
docker compose up -d --build
```

This will:
1. Build the frontend in a Node.js 20 Alpine container (`npm run build`).
2. Package the static distribution into an optimized Nginx Alpine image.
3. Start the container with health check monitoring enabled.

### 2. Access the Website

Open your browser and navigate to:

```text
http://localhost:8080
```

### 3. View Container Logs

To monitor container activity and access logs:

```bash
docker compose logs -f
```

### 4. Stop the Container

To stop and remove the container:

```bash
docker compose down
```

---

## Local Development Without Docker

If you want to run the development server directly using Node.js:

```bash
# 1. Install dependencies
npm install

# 2. Start Vite development server
npm run dev

# 3. Open in your browser
http://localhost:3000
```

To run a production test build:

```bash
npm run build
npm run preview
```

---

## Customization Guide

### 1. Updating or Replacing the Logo

The official CloudTech logo is located at:
`public/assets/aistudio/WhatsApp_Image_2026-10-26_at_3.47.09_PM_5e2358ba.jpeg`

- **To replace the file directly**: Overwrite the file at the above path with your new logo image (PNG, JPEG, or SVG).
- **To use a different filename**:
  1. Place your new asset in `public/assets/` (e.g. `public/assets/logo.svg`).
  2. Open `src/components/BrandLogo.tsx`.
  3. Update the `src` attribute:
     ```tsx
     <img src="/assets/logo.svg" alt="CloudTech Logo" ... />
     ```
  4. Also update the `<link rel="icon">` and `<meta property="og:image">` tags in `index.html`.

### 2. Modifying Website Content

- **Hero & Headline Copy**: Edit `src/components/Hero.tsx`.
- **Services (Cards, Deliverables, AWS tools)**: Edit `servicesData` array in `src/components/Services.tsx`.
- **Solution Frameworks**: Edit `solutionsData` array in `src/components/Solutions.tsx`.
- **Interactive Architecture Flow**: Edit `architectureSteps` array in `src/components/ArchitectureShowcase.tsx`.
- **Why Choose CloudTech Principles**: Edit `whyFeatures` in `src/components/WhyChooseUs.tsx`.
- **Contact Form Options & Copy**: Edit `src/components/ContactSection.tsx`.

### 3. Rebuilding After Making Changes

After updating any files, rebuild your Docker container:

```bash
docker compose up -d --build
```

Docker will rebuild the changed code layers and reload Nginx seamlessly with zero downtime.

---

## Connecting the Contact Form to a Production Backend

The included contact form features full client-side validation (field requirements, email syntax, user feedback states). To connect it to your live production email service or CRM:

1. **Option A: AWS Serverless (API Gateway + Lambda + Amazon SES)**
   - Create an HTTP API in Amazon API Gateway.
   - Point to a Lambda handler that validates input and invokes `ses.sendEmail()`.
   - Update `handleSubmit` in `src/components/ContactSection.tsx` to `fetch('https://your-api-id.execute-api.region.amazonaws.com/contact', { method: 'POST', body: JSON.stringify(formData) })`.

2. **Option B: Webhook / Automation (Slack / Zapier / HubSpot)**
   - POST the form JSON to your secure webhook URL.

---

## Troubleshooting Docker

| Issue | Likely Cause | Solution |
| :--- | :--- | :--- |
| **Port 8080 already in use** | Another service (e.g., local proxy, Tomcat, Jenkins) is bound to 8080. | Edit `docker-compose.yml` to map to a different host port (e.g. `"8081:80"`), then run `docker compose up -d`. |
| **Changes not appearing after build** | Docker cache reused previous layer. | Run `docker compose build --no-cache && docker compose up -d`. |
| **Container unhealthy** | Nginx failed to start or healthcheck timed out. | Check `docker compose logs` to inspect error output. Ensure `nginx.conf` has no syntax errors. |

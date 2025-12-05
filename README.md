# DCE Sales Strategy Hub & Learning Academy

A comprehensive sales enablement platform for the Germanedge sales and pre-sales team.

## Overview

| Tool | Purpose | File |
|------|---------|------|
| **Sales Strategy Hub** | Market positioning, narrative, and 12-month execution plan | `index.html` |
| **Learning Academy** | Interactive flashcards, competitive intel, and certification quizzes | `learning.html` |

## Features

- **22 Learning Modules** across 4 tracks (Strategy, Intel, AI Adoption, Competition)
- **Interactive Flashcards** with flip-to-reveal answers
- **Certification Quizzes** with pass/fail tracking
- **Tag-based Filtering** to find specific topics quickly
- **Firebase Authentication** with Google, Microsoft, and Apple sign-in
- **Cloud Data Persistence** via Firestore for progress and certifications
- **Responsive Design** for desktop, tablet, and mobile

## Tech Stack

- **Frontend:** HTML, CSS (Tailwind), JavaScript
- **Authentication:** Firebase Auth (Social Login)
- **Database:** Firebase Firestore
- **Hosting:** GitHub Pages
- **Testing:** Playwright (86 E2E tests)

## Getting Started

### Local Development

```bash
# Clone the repository
git clone https://github.com/cvonste2/dce-sales-strategy.git
cd dce-sales-strategy

# Start local server
python3 -m http.server 8000

# Open in browser
open http://localhost:8000
```

### Running Tests

```bash
# Install dependencies
npm install

# Run all tests (headless)
npm test

# Run tests with UI
npm run test:ui

# Run tests with visible browser
npm run test:headed

# View test report
npm run test:report
```

## Project Structure

```
dce-sales-strategy/
├── index.html              # Sales Strategy Hub
├── learning.html           # Learning Academy
├── js/
│   └── auth.js             # Firebase Auth & Firestore integration
├── css/
│   └── germanedge.css      # Custom styles
├── tests/                  # Playwright E2E tests
│   ├── auth.spec.js
│   ├── content.spec.js
│   ├── flashcards.spec.js
│   ├── homepage.spec.js
│   ├── learning-hub.spec.js
│   ├── navigation.spec.js
│   ├── quiz-flow.spec.js
│   ├── responsive.spec.js
│   ├── tag-filtering.spec.js
│   └── user-profile.spec.js
├── .github/workflows/
│   └── test.yml            # CI pipeline for automated testing
├── package.json
├── playwright.config.js
└── SALES_TEAM_HANDOUT.md   # User guide for sales team
```

## Firebase Configuration

The app uses Firebase for authentication and data persistence. To set up your own instance:

1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable Authentication with Google, Microsoft, and Apple providers
3. Create a Firestore database
4. Add your domain to authorized domains
5. Update the Firebase config in `js/auth.js`

## Deployment

The site is deployed to GitHub Pages. On every push to `main`:

1. Playwright tests run automatically via GitHub Actions
2. If tests pass, the site is deployed to GitHub Pages

**Live URL:** [https://cvonste2.github.io/dce-sales-strategy/](https://cvonste2.github.io/dce-sales-strategy/)

## Documentation

- **[SALES_TEAM_HANDOUT.md](SALES_TEAM_HANDOUT.md)** — User guide for the sales team

## License

Internal use only — Germanedge

---

*Version 2.0 | December 2025 | Germanedge DCE Sales Enablement*

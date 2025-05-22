# Developer Portfolio Template

A clean, beautiful and responsive portfolio template for developers.

## Features

- Summary and About me
- Skills
- Education
- Work Experience
- GitHub Projects
- Big Projects
- Achievements and Certifications
- Blogs
- Contact Information
- Twitter Timeline
- GitHub Profile

## Quick Start

### Prerequisites
- Node.js (v10.16.0 or higher)
- npm (v6.9.0 or higher)
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/xudong-z/8499_developerfolio.git

# Go into the repository
cd 8499_developerfolio

# Install dependencies
npm install

# Start the development server
npm start
```

### Docker Setup

```bash
# Build the Docker image
docker build -t developerfolio:latest .

# Run the container
docker run -p 3000:3000 developerfolio:latest
```

## Configuration

1. Copy the environment file:
```bash
# For Linux/Mac
cp env.example .env
# For Windows
copy env.example .env
```

2. Update the `.env` file with your information:
```env
REACT_APP_GITHUB_TOKEN = "YOUR_GITHUB_TOKEN"
GITHUB_USERNAME = "YOUR_GITHUB_USERNAME"
USE_GITHUB_DATA = "true"
```

## Customization

Edit `src/portfolio.js` to customize your portfolio information.

## Deployment

The portfolio can be deployed to:
- GitHub Pages
- Netlify
- Any static hosting service

## Technologies Used

- React
- GraphQL
- Apollo Boost
- React Twitter Embed
- React Easy Emoji
- React Headroom
- Color Thief

## License

This project is licensed under the MIT License - see the LICENSE file for details.

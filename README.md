# TaskPilot - React Todo App

A simple and elegant task management application built with React 19. TaskPilot helps you organize your daily tasks with an intuitive interface for adding, viewing, and managing your to-do list.

## Features

- ✅ Add new tasks quickly and easily
- 📋 View all your tasks in an organized list
- 🎨 Clean and responsive user interface
- 💾 Local state management with React hooks
- ⚡ Fast and lightweight

## Tech Stack

- **React 19.1.0** - Latest React framework
- **React DOM 19.1.0** - DOM rendering
- **Create React App 5.0.1** - Development environment
- **CSS3** - Custom styling

## Project Structure

```
todoreactapp/
├── public/              # Static files
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── AddTask/     # Component for adding new tasks
│   │   ├── Header/      # Header component
│   │   └── ShowTask/    # Component for displaying tasks
│   ├── assets/          # Images and other assets
│   ├── App.js           # Main application component
│   ├── App.css          # Application styles
│   ├── index.js         # Entry point
│   └── index.css        # Global styles
└── package.json         # Project dependencies
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd todoreactapp
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Components

### Header
Displays the application title and branding.

### AddTask
Provides an input form for users to add new tasks to their list.

### ShowTask
Renders the list of tasks with options to manage them.

# 📇 Stage 1B: Testable Profile Card

A lightweight, accessible, and fully responsive Profile Card component built with Vanilla HTML5, CSS3, and JavaScript. This project was specifically designed to meet strict automated testing requirements through the use of standardized data-testid attributes.

## 🚀 Features

- **Semantic HTML**: Utilizes \<article>, \<figure>, \<nav>, and \<section> for SEO and screen-reader compatibility.

- **Real-time Clock**: A high-precision millisecond timer that updates every 100ms using `Date.now()`.
- **WCAG AA Compliant**: High color contrast and visible focus states for keyboard-only navigation.
- **Zero Dependencies**: No frameworks or external CSS libraries—just pure web standards.
- **Fully Responsive**: Fluid layout that transitions from a single-column mobile view to a side-by-side desktop view.

## 🛠 Tech Stack

- **HTML5** (Structure & Semantics)

- **CSS3** (Custom Properties, Flexbox, Grid)

- **JavaScript** (DOM Manipulation & Timing)

## 📂 Project Structure

project-folder/

```
├── index.html # Contains Structure
├── style.css # Contains Styling
├── script.js # Contains Logic
└── README.md # Project Documentation
```

## 💻 Local Setup Instructions

### Cloning the Repository

If you have Git installed on your machine, follow these steps to get a local copy of the project:

Open your terminal (Terminal, Command Prompt, or PowerShell).

1. Navigate to the folder where you want to store the project:

    ```bash
    cd path/to/your/projects
    ```

2. Clone the repo using the git clone command:

    ```bash
    git clone <repo-url>
    ```

    (Note: Replace the URL above with your actual repository link.)

3. Enter the project directory:

    ```bash
    cd path/to/cloned-project
    ```

### Running Locally

- **Option 1: The "Direct" Method (Fastest)**

  Download the index.html file provided in the previous step.Locate the file in your file explorer (Finder or Windows Explorer).Double-click the file. It will open in your default web browser immediately.

- **Option 2: Using VS Code Live Server (Recommended for Development)**

  If you are using Visual Studio Code, this method provides a local development server:Open your project folder in VS Code.Install the Live Server extension (by Ritwick Dey) if you haven't already. Right-click index.html and select "Open with Live Server". The card will launch at http://127.0.0.1:5500, and any changes you make will refresh the page automatically.

## 🎨 Design Decisions

- **Layout**: I used CSS Grid for the Hobbies/Dislikes section because it handles equal-height columns better than Flexbox without extra code.

- **Aria-Live**: The millisecond timer is wrapped in aria-live="polite". This tells assistive technologies that the content is updating, but not to interrupt the user every 100ms (which would be a nightmare for screen-reader users!).

- **Focus States**: I used `:focus-visible` for the links. This ensures that mouse users don't see the focus ring when clicking, but keyboard "Tab" users see a clear, high-contrast amber indicator.

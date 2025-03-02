<<<<<<< HEAD
Title: Create a Responsive Navigation Bar with Angular Components

Objective: Design and implement a dynamic navigation bar for a web application using Angular. Each navigation option should correspond to a unique component, and clicking the options should render the respective components via routing.

Requirements:
Navigation Bar Features:

The navigation bar should have the following options:

Home

About

Contact

Search (as a search input field)

Login

Logout

Functionalities:

When users click on "Home," "About," or "Contact," a specific component must load, displaying its respective content.

The "Search" option should include a functioning input field with a search button. For simplicity, log the entered search query to the browser console upon clicking the search button.

The "Login" option should navigate to a dedicated login component where users can input their credentials.

The "Logout" option should display a confirmation message component indicating that the user has logged out (use a simple placeholder message).

Routing:

Use Angular routing to link each navigation option to its respective component.

Configure the routes in the app-routing.module.ts file.

Responsive Design:

Ensure that the navigation bar is responsive. When the screen width is below 768px, display a burger menu icon (☰) to toggle the navbar options.

Bonus Points:

Add hover effects to the navigation bar for better user experience.

Use Angular services to share the search query data between components.

Create mock login/logout functionality (e.g., toggle between "Login" and "Logout" when clicked).

Deliverables:
A functional Angular application with the described navigation bar.

Individual components for each of the navigation options (Home, About, Contact, Search, Login, Logout).

Code properly organized into the necessary files:

app.component.html, app.component.css, app.component.ts

Separate components for Home, About, Contact, etc.

app-routing.module.ts for routing configuration.

A README file with brief instructions for running the application and navigating the navbar.

Evaluation Criteria:
Proper use of Angular routing and navigation (routerLink).

Clean and modular code with individual components for each option.

Responsive design of the navigation bar.

Clear documentation and adherence to the requirements.

This question tests the students' understanding of:

Angular components and their modularity.

Routing configuration.

Practical use of responsive design in web development.

Implementing interactivity with Angular.
=======
# Responsive Navbar Angular App

## Setup
1. Clone the repository
2. Run `npm install`
3. Run `ng serve`
4. Open browser at `http://localhost:4200`

## Features
- Responsive navigation bar with burger menu on mobile (<768px)
- Routing to Home, About, Contact, Login, and Logout components
- Functional search with service sharing
- Toggle between Login/Logout states
- Hover effects on nav items

## Navigation
- Click navigation items to switch components
- Use burger menu (☰) on mobile screens
- Enter text in search field and click Search to log query
- Login/Logout toggles visibility based on state
>>>>>>> aae67f8 (Initial commit - Added Angular project with navigation bar)

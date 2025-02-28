# Responsive Navigation Bar with Angular 17

This project demonstrates how to create a **responsive navigation bar** using Angular 17. The navigation bar includes options for **Home**, **About**, **Contact**, **Search**, **Login**, and **Logout**. Each option is linked to a dedicated component, and the application uses Angular routing to dynamically load the respective components.

## Features

1. **Responsive Navigation Bar**:
   - Collapses into a burger menu on screens smaller than 768px.
   - Toggle the menu by clicking the burger icon (☰).

2. **Routing**:
   - Each navigation option (`Home`, `About`, `Contact`, `Search`, `Login`, `Logout`) is linked to its respective component.
   - Uses Angular routing for seamless navigation.

3. **Search Functionality**:
   - Includes a search input field.
   - Logs the search query to the console when the user presses **Enter** or clicks the search button.

4. **Login/Logout**:
   - **Login**: Navigates to a login component where users can input their credentials.
   - **Logout**: Displays a confirmation message indicating the user has logged out.

5. **Styling**:
   - Clean and modern design with consistent colors across all components.
   - Hover effects on navigation links for better user experience.

## Project Structure
src/
├── app/
│ ├── about/
│ │ ├── about.component.css
│ │ ├── about.component.html
│ │ └── about.component.ts
│ ├── contact/
│ │ ├── contact.component.css
│ │ ├── contact.component.html
│ │ └── contact.component.ts
│ ├── home/
│ │ ├── home.component.css
│ │ ├── home.component.html
│ │ └── home.component.ts
│ ├── login/
│ │ ├── login.component.css
│ │ ├── login.component.html
│ │ └── login.component.ts
│ ├── logout/
│ │ ├── logout.component.css
│ │ ├── logout.component.html
│ │ └── logout.component.ts
│ ├── search/
│ │ ├── search.component.css
│ │ ├── search.component.html
│ │ └── search.component.ts
│ ├── app.component.css
│ ├── app.component.html
│ ├── app.component.ts
│ ├── app.config.ts
│ └── app.routes.ts
├── assets/
├── main.ts
└── styles.css


Copy

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/responsive-navbar.git
   cd responsive-navbar
Install Dependencies:

bash
Copy
npm install
Run the Application:

bash
Copy
ng serve
Open the Application:

Navigate to http://localhost:4200 in your browser.

Thank you

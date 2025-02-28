Angular Responsive Navigation Bar

Project Overview

This project is an Angular-based responsive navigation bar that includes multiple components and routing functionality. It supports the following features:

Navigation links for Home, About, Contact, Search, Login, and Logout

Search functionality with a search bar

Responsive design with a burger menu for mobile screens

Authentication toggle between Login and Logout

Angular routing to switch between different components

Repository

GitHub Repository

Prerequisites

Ensure you have the following installed on your system:

Node.js (Latest LTS version recommended) - Download here

Angular CLI (Globally installed)

npm install -g @angular/cli

Installation Steps

Clone the Repository

git clone https://github.com/jignesh-suthar/CSE3_Assignment.git

Navigate to the Project Directory

cd CSE3_Assignment

Install Dependencies

npm install

Running the Project

Start the Development Server

ng serve

The application will be available at http://localhost:4200/

Building the Project for Production

ng build --prod

This generates the optimized production-ready build in the dist/ folder.

Project Structure

CSE3_Assignment/
angular-navbar-app/
│── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── home/
│   │   │   │   ├── home.component.html
│   │   │   │   ├── home.component.ts
│   │   │   │   ├── home.component.css
│   │   │   ├── about/
│   │   │   │   ├── about.component.html
│   │   │   │   ├── about.component.ts
│   │   │   │   ├── about.component.css
│   │   │   ├── contact/
│   │   │   │   ├── contact.component.html
│   │   │   │   ├── contact.component.ts
│   │   │   │   ├── contact.component.css
│   │   │   ├── search/
│   │   │   │   ├── search.component.html
│   │   │   │   ├── search.component.ts
│   │   │   │   ├── search.component.css
│   │   │   ├── login/
│   │   │   │   ├── login.component.html
│   │   │   │   ├── login.component.ts
│   │   │   │   ├── login.component.css
│   │   │   ├── logout/
│   │   │   │   ├── logout.component.html
│   │   │   │   ├── logout.component.ts
│   │   │   │   ├── logout.component.css
│   │   ├── services/
│   │   │   ├── auth.service.ts
│   │   │   ├── search.service.ts
│   │   ├── app.component.html
│   │   ├── app.component.ts
│   │   ├── app.component.css
│   │   ├── app-routing.module.ts
│   ├── assets/
│   ├── index.html
│   ├── styles.css
│── README.md
│── package.json
│── angular.json

Features Implemented

✅ Angular Routing - Navigation between different components✅ Responsive Design - Navbar adapts to different screen sizes✅ Search Functionality - Captures input and logs to the console✅ Authentication Simulation - Toggles between Login and Logout✅ Mobile-Friendly Navbar - Collapses into a burger menu

Additional Notes

To modify styles, edit app.component.css.

To add new components, use:

ng generate component components/new-component

To deploy the project, use Firebase, Netlify, or GitHub Pages.

License

This project is licensed under the MIT License.

Contact

For any issues, feel free to open an issue in the repository or contact Jignesh Suthar.


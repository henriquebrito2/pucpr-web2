# My React App

This is a simple React application that demonstrates the use of React Router for navigation between different pages. The application includes three main pages: Home, About, and Contact, each with its own functionality.

## Project Structure

```
my-react-app
├── public
│   └── index.html
├── src
│   ├── components
│   │   └── Navbar.jsx
│   ├── pages
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── routes
│   │   └── AppRoutes.jsx
│   ├── App.jsx
│   └── index.js
├── package.json
├── .gitignore
└── README.md
```

## Features

- **Home Page**: Contains a registration form with inputs for email, password, first name, last name, and date of birth. It interacts with Firebase Authentication to create a user and stores additional user data in Firestore.
  
- **About Page**: Features a login form with inputs for email and password. It validates credentials against Firebase Authentication and redirects to the Home page upon successful login.

- **Contact Page**: Displays user information (first name, last name, and date of birth) retrieved from Firestore after a successful login.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd my-react-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Usage Guidelines

- Use the navigation links in the Navbar to switch between the Home, About, and Contact pages.
- Fill out the registration form on the Home page to create a new user.
- Use the login form on the About page to access the application.
- After logging in, you can view your information on the Contact page.

## Dependencies

- React
- React Router Dom
- Firebase

## License

This project is licensed under the MIT License.
# User Management Application

Welcome to the User Management Application! This repository contains the frontend codebase for the User Management Application with dummy data, demonstrating proficiency with Vue 3's Composition API, state management, API interactions, and CRUD operations.

## Overview

This application allows users to manage user data efficiently. Users can view, create, edit, and delete user information. The application emphasizes functionality, focusing on seamless API interactions and state management.

## Features

- **User Listing**: Fetch and display a list of users with pagination and sorting options.
- **User Details**: View detailed information for a selected user.
- **Create User**: Add new users with proper validation.
- **Edit User**: Update existing user information.
- **Delete User**: Remove users with a confirmation prompt.
- **Global State Management**: Efficient handling of user data using Vue's official state management library.
- **Responsive Design**: A responsive and user-friendly interface.

## Technologies Used

- **Vue.js (Composition API)**: A progressive JavaScript framework for building user interfaces.
- **Vue Router**: The official router for Vue.js applications.
- **Pinia**: A state management library for Vue.js.
- **Axios**: A promise-based HTTP client for making HTTP requests from the browser.
- **VeeValidate**: A form validation library for Vue.js.
- **Tailwind CSS**: A utility-first CSS framework.

## Recommended IDE Setup

We recommend using Visual Studio Code (VSCode) with the Volar extension for an optimized Vue development experience and typescript support. Please disable the Vetur extension if you have it installed.

## Project Setup

1. **Clone the repository:**

```sh
git clone https://github.com/Tr1ckyy1/LavaPi
```

2. Install dependencies:

```sh
npm install
```

3. Now we need to set our env file. Go to the root of your project and execute this command:

```sh
cp .env.example .env
```

And now you should provide **.env** file all the necessary environment variables

## Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

# Netflix Clone

This project is a Netflix clone built using ReactJS, Firebase for authentication, and TMDB API for movie data. The application mimics the core functionalities of Netflix, providing a dynamic and engaging user experience with features such as browsing movies, viewing details, and receiving personalized recommendations.

## Features

- **Dynamic Content Fetching:** Real-time updates and data fetching from TMDB API to display the latest movies and TV shows.
- **Firebase Authentication:** Secure user authentication allowing users to sign up, log in, and manage their profiles.
- **Personalized Recommendations:** Tailored movie recommendations based on user preferences and watch history.
- **Responsive Design:** Optimized for various devices, ensuring a seamless experience across desktops, tablets, and mobile phones.

## Tech Stack

- **ReactJS:** Front-end library for building user interfaces.
- **Firebase:** Backend-as-a-Service (BaaS) for authentication and database services.
- **TMDB API:** Source for movie and TV show data.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed.

```bash
npm install npm@latest -g
```

### Installation

1. Clone the repo

```bash
git clone https://github.com/yourusername/netflix-clone.git
```

2. Install NPM packages

```bash
npm install
```

3. Create a `.env` file in the root directory and add your Firebase and TMDB API credentials

```env
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
REACT_APP_TMDB_API_KEY=your_tmdb_api_key
```

4. Start the development server

```bash
npm start
```

The app should now be running on `http://localhost:3000`.

# MERN Card Collection App

This is a simple MERN (MongoDB, Express, React, Node.js) application built to demonstrate my skills for a job interview. The project is primarily focused on backend development, with a minimal frontend. It allows users to create collections of cards, and within each collection, they can create and delete individual cards. The project is structured using the Model-View-Presenter (MVP) architectural pattern.

## Features

- **Create Collection**: Users can create new collections by specifying a title.
- **View Collections**: Users can view all created collections.
- **Delete Collection**: Users can delete collections.
- **Add Cards to Collection**: Within a collection, users can add new cards with text content.
- **Delete Cards from Collection**: Users can delete individual cards from a collection.

## Tech Stack

- **Frontend**: React with TypeScript
- **Backend**: Node.js with Express and TypeScript
- **Database**: MongoDB for storing collections and cards

## Project Structure

The project follows the MVP architecture:

- **Model**: Handles the data logic and database interactions.
- **View**: The React components that represent the UI.
- **Presenter**: Manages the communication between the Model and the View, processing user inputs and updating the View accordingly.

# TechWave MovieAPI
This project is a simple REST API for managing a movie database. It allows users to perform operations such as adding, updating, deleting, and searching for movies and to add and delete genres as well.

## How to run the application

1. **Clone the Repository**

   Open the terminal and clone the repository to your local machine:
   ```bash
   git clone https://github.com/DiogoLanc/TechWave_MovieAPI.git
   ```
   Go to the main folder:
   ```bash
   cd TechWave_MovieAPI
   cd movie-api
   
3. **Install Dependencies**
   ```bash
   npm install

4. **Set up the database**
   
   Create a PostgreSQL database (e.g., movies_db).
   
   Update the **app.module.ts** or your **.env** file with your database connection details.

6. **Run the Application**
   ```bash
   npm run start

## Implemented Functionalities
This API handles two main entities: movies and genres, with a many-to-many relationship between them.

Every operation was implemented:

- ListMovies - list all movies 
- AddMovie - add a movie to the database
- UpdateMovie - update the details of a movie by id
- DeleteMovie - delete a specific movie by id
- ListGenres - list all genres
- AddGenre - add a genre to the database
- DeleteGenre - delete a specific genre by id
- SearchMovies - search movies by title, genre or both.

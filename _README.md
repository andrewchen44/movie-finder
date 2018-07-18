Set Up:
  1. Clone the repository, https://github.com/andrewchen44/movie-finder.git, to your local machine
  2. Go into the folder, open a terminal, and run 'npm install' to install all dependencies for the application
  3. Run the command 'npm run server-dev' in the terminal to run the server for the application
  4. Navigate to 'localhost:3000' in your browser and search away!

Challenges:
  1. Handling search reseults with multiple pages was a challenge due to the fact that some pages had hundreds of results and there was limit to the number of requests that can be made in a certain amount of time. This was especially a problem when a user first starts typing a movie title. So solve this, I only made the next call to the api after waiting half a second.
  2. A smaller challenge was that the api would sometimes return duplicate movie title names. To solve this I simply filtered out any duplicates before displaying them on the page.

Design Decision Reasoning: 
  1. I chose not to store the movie titles in Redux given that it is a fairly simply application. In a bigger application I would definitely do store the titles in Redux to minimize the amount of information that needed to be passed between components.

Future Improvements: 
  1. Additional styling to make the application look much better.
  2. Storing the movie titles in Redux so they are easier to acccess in larger applications.

# Google Book Search
A simple React app that uses Google Books API to search for books and allows users to save books to MongoDB.

## Deployment
This app has been deployed to: [https://jl-googlebooks.herokuapp.com/](https://jl-googlebooks.herokuapp.com/)
* There may be a small delay loading the page due to the web dyno going to sleep if it receives no traffic for 30 minutes

## How To

![Landing Page](https://user-images.githubusercontent.com/40774762/50854266-6e884a00-1339-11e9-825b-d39abc836d85.png)

### Search
* Use the search bar to search for books in the Google Books database
* Results will be listed with the title, authors, a thumbnail image of the book and a short description.
* Each book will also have two buttons: 
  1. "View" : directs user to the book page within Google Books
  1. "Save" : adds book to user's saved list 
  
  ![Search Books](https://user-images.githubusercontent.com/40774762/50854310-8b248200-1339-11e9-93bd-66b9e218e75e.png)


### Saved
* A list of saved books will be displayed with all the information that was shown in search result
* Each book will now have a "Remove" button that removes book from saved list

  ![Saved Books](https://user-images.githubusercontent.com/40774762/50854345-a099ac00-1339-11e9-931e-2ca11e992c06.png)

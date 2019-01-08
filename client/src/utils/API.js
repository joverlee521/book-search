import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getBooks: function(query) {
    return axios.get("/api/googleBooks", { params: { q: query } });
  },
  getUserBooks: function() {
    return axios.get("/api/userBooks");
  },
  saveBook: function(bookObj) {
    return axios.post("/api/userBooks", bookObj);
  },
  deleteBook: function(id) {
    return axios.delete("/api/userBooks/" + id);
  }
};

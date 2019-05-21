import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/workout");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/exersizes/" + id);
  }
};

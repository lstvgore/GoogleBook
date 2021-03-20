import axios from 'axios';

export default {
    geetBooks: function () {
        return axios.get('/api/books');
    },

    deleteBook: function (id) {
        return axios.delete('/api/books/' + id);
    },

    saveBook: function (bookData) {
        console.log(bookData);
        return axios.post('/api/books', bookData);
    },
};
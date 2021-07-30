const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const fakedatabase = {}

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
app.post("/api/books", (req, res) => {
    console.log(req.body);
    const book = req.body
    fakedatabase[book.title] = book;
    res.send(req.body);
})

app.get("/api/books", (req, res) => {
    res.send(Object.values(fakedatabase))

})
// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});



app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});

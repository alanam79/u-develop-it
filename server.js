const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// express middlewarre
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.get('/', (req, res) => {
    res.json({
        message: "Hello World!"
    });
});

// Default response for any other request (not fouond)
app.use((req, res) => {
    res.status(404).end();
});



// starts server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}🚀`)
}); 
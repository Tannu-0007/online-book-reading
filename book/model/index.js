const express = require('express');
const mysql = require('mysql');

var cors = require('cors')
const db = mysql.createConnection(
	{
		host: 'localhost',
		user: 'root',
		password: 'Tannu@2408#',
		database: 'rapiddb'
	}
)

var app = express();
app.use(cors())
app.listen(1234, () => {
	console.log('server is running on port 1234');
});

app.get("/", (req, res) => {

	res.send("fgndfgjfgnbgjnbjdf");
});

app.get('/addauthor', (req, res) => {
	db.query('insert into author values("tanu","hobbit")', (err, result) => {
		if (err) console.log(err);
		else res.send('registered');
	});
});

app.get('/fetchAuthor',  (req, res) => {
	db.query("SELECT * FROM author", (err, authors) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database error' });
        }

        const authorPromises = authors.map(author => {
            return new Promise((resolve, reject) => {
                db.query("SELECT * FROM books WHERE authorId = ?", [author.id], (err, books) => {
                    if (err) return reject(err);
                    author.books = books; // Add books to the author object
                    resolve(author);
                });
            });
        });

        Promise.all(authorPromises)
            .then(results => {
                res.json(results); // Send the array of authors with books
            })
            .catch(err => {
                console.error(err);
                res.status(500).json({ error: 'Database error' });
            });
    });
}

);
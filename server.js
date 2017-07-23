const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

const Author = require('./models/authors');
const BlogPost = require('./models/blogPost');

/*MongoClient.connect('mongodb://127.0.0.1:27017/app_test_db', (err, database) => {
  if (err) return console.log('Error connecting to the database',err)
  db = database;
  app.listen(3000, () => {
    console.log('listening on 3000')
  });
})*/
app.listen(3000, () => {
    console.log('listening on 3000')
});
mongoose.connect('mongodb://127.0.0.1:27017/app_test1_db');
var db = mongoose.connection;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4100');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/api/authors', (request, response) => {
    Author.getAuthors((err, authors) => {
        if (err) {
            console.log('Error getting authors', err);
            throw err;
        }
        response.json(authors);
    })
});

app.get('/api/authors/:_id', (request, response) => {
    Author.getAuthorById(request.params._id, (err, author) => {
        if (err) {
          console.log('Error getting author', err);
          throw err;
        }
        response.json(author);
    })
});

app.post('/api/authors', (request, response) => {
  var author = request.body;
  Author.addAuthor(author, (err, author) => {
    if (err) {
      console.log('Error adding author', err);
      throw err;
    }
    response.json(author);
  })
});

app.put('/api/authors/:_id', (request, response) => {
  var id = request.params._id;
  var author = request.body;
  Author.updateAuthor(id, author, {}, (err, author) => {
    if (err) {
      console.log('Error updating author', err);
      throw err;
    }
    response.json(author);
  })
});

app.get('/api/blogPosts', (request, response) => {
    BlogPost.getBlogPosts((err, blogPosts) => {
        if (err) {
            console.log('Error getting blog posts', err);
            throw err;
        }
        response.json(blogPosts);
    })
});

app.get('/api/blogPosts/:_id', (request, response) => {
    BlogPost.getBlogPostById(request.params.id, (err, blogPost) => {
        if (err) {
            console.log('Error getting blog post', err);
            throw err;
        }
      response.json(blogPost);
    })
});

app.post('/api/blogPosts/', (request, response) => {
    var blogPost = request.body;
    BlogPost.addBlogPost(blogPost, (err, blogPost) => {
        if (err) {
            console.log('Error adding blog post', err);
            throw err;
        }
        response.json(blogPost);
    })
});


/*app.get('/', (req, res) => {
  let cursor = db.collection('quotes').find().pretty(err, result) => {
      console.log('results',results);
    });
})*/


/*app.post('/authors', (req, res) => {

    console.log('Request: ', req.body);
    db.collection('authors').save(req.body, (err, result) => {
      if (err) return console.log('Error adding data to the database', err)

      console.log('saved to database')
    })
})

app.get('/authors/:id', (req, response) => {
    let cursor = db.collection('authors').findOne(req.param.id, (err, res) => {
      console.log('GABPAC - answer:', res);
        response.send(res);
    });
})

app.get('/authors', (req, response) => {
    let cursor = db.collection('authors').find().toArray( (err,res) => {
        response.send(res);
    })
})*/

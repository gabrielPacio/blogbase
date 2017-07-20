var mongoose = require('mongoose');

var blogPostSchema = mongoose.Schema({
    title: {
      type: String,
      require: true
    },
    author: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    comments: {
        type: String
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

var BlogPost = module.exports = mongoose.model('BlogPost', blogPostSchema);

module.exports.getBlogPosts = function (callback, limit) {
    BlogPost.find(callback).limit(limit);
}

module.exports.getBlogPostById = function (id, callback) {
    BlogPost.findById(id, callback);
}

module.exports.addBlogPost = function (blogPost, callback) {
    BlogPost.create(blogPost, callback);
}

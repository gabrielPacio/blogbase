var mongoose = require('mongoose');

var authorSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: false
    },
    bio: {
        type: String,
        required: false
    },
    profilePicUrl: {
        type: String,
        required: false
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

var Author = module.exports = mongoose.model('Authors', authorSchema);

module.exports.getAuthors = function (callback, limit) {
    Author.find(callback).limit(limit);
};

module.exports.getAuthorById = function (id, callback) {
    Author.findById(id, callback);
}

module.exports.addAuthor = function (author, callback) {
    Author.create(author, callback);
}

module.exports.updateAuthor = function (id, author, options, callback) {
    var query = { _id: id };
    var update = {
        firstName: author.firstName,
        lastName: author.lastName,
        bio: author.bio,
        profilePicUrl: author.profilePicUrl,


    }
    Author.findOneAndUpdate(query, update, options, callback);
}

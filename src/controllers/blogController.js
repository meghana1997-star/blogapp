const Blog = require('../models/blog');

const blog_create_post = (req, res) => {
    const blog = new Blog(req.body);

    blog.save().then((blog) => {
        res.status(201).send(blog);
    }).catch((error) => {
        res.status(400).send(error);
    })
}

const blog_create_get = (req, res) => {
    Blog.find({}).then((blogs) => {
        res.send(blogs);
    }).catch((error) => {
        res.status(500).send(error);
    })
}

const blog_delete = (req, res) => {
    Blog.findByIdAndDelete(req.params.id).then(blog => {
        if (!blog) {
            return res.status(404).send();
        }
        res.send(blog);
    }).catch(error => {
        res.status(500).send(error);
    })
}
const blog_update = (req, res) => {
    Blog.findByIdAndUpdate(req.params.id, req.body, { new: true }).then((blog) => {
        if (!blog) {
            return res.status(404).send();
        }
        res.send(blog);
    }).catch(error => {
        res.status(500).send(error);
    })
}

module.exports = {
    blog_create_post,
    blog_create_get,
    blog_delete,
    blog_update,
}
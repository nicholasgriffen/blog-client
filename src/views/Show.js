let m = require('mithril')
let Post = require('../models/Post')

module.exports = {
    oninit: function(vnode) {
        return Post.load(vnode.attrs.id)
    },
    view: function() {
        let post = Post.current
        return m('div', `${post.content}`)
    }
}
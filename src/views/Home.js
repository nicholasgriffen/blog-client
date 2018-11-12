let m = require('mithril')
let Post = require('../models/Post')
module.exports = {
    oninit: Post.loadList,
    view: function() {

        return m('table',
                m('thead',
                m('tr',
                m('th', 'Posts'))),
                Post.list.map(post => {
                    return m('tr',
                    m(`td.[id=${post.id}]`, `${post.content}`))
                })
            )
    }
    // clickable list of posts
    // click links to single post view 

}
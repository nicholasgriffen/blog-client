let m = require('mithril')
let Post = require('../models/Post')
module.exports = {
    oninit: Post.loadList,
    view: function() {
        return m('div.container',
                m('div.row',
                    m('div.col.s12',  
                        m('table',
                            m('thead',
                            m('tr',
                            m('th', 'Preview'),
                            m('th', 'Show Post'),
                            m('th', 'Edit Post'),
                            m('th', 'Delete Post'))),
                            Post.list.map(post => {
                                return m('tr',
                                // Preview
                                m(`td.[id=${post.id}]`, `${post.content.slice(0, 15)}...`),
                                // Show
                                m('td', m(`a.[href=/show/${post.id}]`, {oncreate: m.route.link}, 'Show')),
                                // Edit
                                m('td', m(`a.[href=/edit/${post.id}]`, {oncreate: m.route.link}, 'Edit')),
                                // Delete
                                m('td', m(`a.[href=/delete/${post.id}]`, {oncreate: m.route.link}, 'Delete'))
                                )
                            })
                        )
                    )
                )
            )
    }
}
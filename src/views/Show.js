let m = require('mithril')
let Post = require('../models/Post')

module.exports = {
    oninit: function(vnode) {
        return Post.load(vnode.attrs.id)
    },
    view: function() {
        let post = Post.current
        return m('div.container', 
                m('div.row', 
                    m('div.col.s12',
                        m('h1.center-align', 'Full Post')
                    )
                ),
                m('div.row', 
                    m('div.col.s12',
                        m('p.center-align',`${post.content}`)
                    ),
                    m('div.col.s6',
                    m('p.center-align', 
                        m(`a.[href=/edit/${post.id}]`, {oncreate: m.route.link}, 'Edit'),
                    )),
                    m('div.col.s6',
                    m('p.center-align',
                        m(`a.[href=/delete/${post.id}]`, {oncreate: m.route.link}, 'Delete')
                    )),
                )
        )
    }
}
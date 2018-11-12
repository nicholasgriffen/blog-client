let m = require('mithril')
module.exports = {
    view: function(vnode) {
        return [
            m('header',
            m('a.button[href=/]', { oncreate: m.route.link }, 'Home'),
            m('a.button[href=/create]', { oncreate: m.route.link }, 'New Post') 
        ),
        m('main', vnode.children)
    ]
    }
}
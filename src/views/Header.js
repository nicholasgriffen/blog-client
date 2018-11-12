let m = require('mithril')
module.exports = {
    view: function(vnode) {
        return [
            m('header',
                m('nav',
                    m('div.nav-wrapper',
                        m('a.brand-logo[href=#]', 'AJAXBLOG'),
                        m('ul.right',
                            m('li', m('a.button[href=/]', { oncreate: m.route.link }, 'Home')),
                            m('li', m('a.button[href=/create]', { oncreate: m.route.link }, 'New Post')) 
                        )
                    )
                )
            ),
        m('main', vnode.children)
    ]
    }
}
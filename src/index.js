let m = require('mithril')

let Post = require('./models/Post')
// let Header = require('./views/Header')
let Home = require('./views/Home')
let Form = require('./views/Form')
let Show = require('./views/Show')

m.route(document.body, '/', {
    '/': {
        render: function() {
            return m(Home)
        }
    },
    '/create': {
        render: function() {
            return m(Form)
        }
    },
    '/show/:id': {
        render: function(vnode) {
            return m(Show, vnode.attrs)
        }
    },
    '/edit/:id': {
        render: function(vnode) {
            return m(Form, vnode.attrs)
        }
    },
    '/delete/:id': {
		onmatch: function(vnode) {
			return Post.delete(vnode.id)
				.then(() => {
					Post.loadList()
					m.route.set('/')
				})
		}
    }
})
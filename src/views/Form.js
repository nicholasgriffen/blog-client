let m = require('mithril')
let Post = require('../models/Post')

module.exports = {
	oninit: function (vnode) {
		if (vnode.attrs.id) {
			return Post.load(vnode.attrs.id)
		}
		Post.current = Post.default
	},
	onupdate: function () {
		if (m.route.get().match(/create/)) {
			Post.current = Post.default
		}
		m.redraw()
	},
	view: function () {
		return m('form', {
			onsubmit: function(e) {
                e.preventDefault()
                console.log(`${Post.current.content}`)                
				if (m.route.get().match(/edit/)) {
					return Post.edit(Post.current)
						.then(record => m.route.set('/show/' + record.id))
				}
                return Post.create(Post.current)
					.then(record => m.route.set('/show/' + record.id))
			}
		}, [
			m('label', 'Content'),
			m('input[type=text][placeholder="Content"][required]', {
				oninput: m.withAttr('value', function(value) {
					Post.current.content = value
				}),
				value: Post.current.content
			}),
			m('button[type=submit]', 'Save')
		])
	}
} 
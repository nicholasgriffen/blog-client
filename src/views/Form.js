let m = require('mithril')
let Post = require('../models/Post')

module.exports = {
	oninit: function (vnode) {
		if (vnode.attrs.id) {
			return Post.load(vnode.attrs.id)
		}
		Post.current = {content: 'This is placeholder text'}
	},
	onupdate: function () {
		if (m.route.get().match(/create/)) {
			Post.current = {content: 'This is placeholder text'}
		}
		m.redraw()
	},
	view: function () {
		return m('form', {
			onsubmit: function(e) {
				e.preventDefault()
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
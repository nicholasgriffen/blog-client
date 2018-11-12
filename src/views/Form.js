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
		return m('div.container', 
		m('div.row', 
			m('form.col.s12', {
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
			m('div.row',
			m('div.input-field.col.s12',
				m('input[type=text][required]', {
					oninput: m.withAttr('value', function(value) {
						Post.current.content = value
					}),
					value: Post.current.content
				}),
				m('label.active', 'Content')
			),
			m('button[type=submit].col.s12', 'Save')
		)])
		))
	}
} 
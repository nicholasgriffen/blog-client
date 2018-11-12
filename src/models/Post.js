let m = require('mithril')
let url = 'https://fathomless-ridge-95443.herokuapp.com/posts'

let Post = {
    list: [],
    current: {},
    
    loadList: function() {
        return m.request({
        method: 'GET',
        url,
    })
    .then(result => {
        Post.list = result
        console.log(Post.list)
    })
    },
    
    load: function(id) {
        return m.request({
        method:'GET',
        url: `${url}/${id}`
    })
    .then(result => {
        if (result.id) {
            Post.current = result
        } else {
            Post.current = {id: 1, content: "Couldn't find a post with requested ID"}
        }
    })
    },
    
    edit: function(body) {
		return m.request({
			method: 'PUT',
			url: `${url}/${body.id}`,
			data: body,
		})
    },
    
    create: function(body) {
		return m.request({
			method: 'POST',
			url,
			data: body,
		})
	},

	delete: function(id) {
		return m.request({
			method: 'DELETE',
			url: `${url}/${id}`
		})
    }
}

module.exports = Post
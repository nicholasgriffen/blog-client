let m = require('mithril')
let url = 'https://fathomless-ridge-95443.herokuapp.com/posts'

let Post = {
    list: [],
    current: {},
    loadList: m.request({
        method: 'GET',
        url,
    })
    .then(result => {
        Post.list = result
        Post.current = result[0]
        console.log(Post.list)
    }),
}

module.exports = Post
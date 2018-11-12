let m = require('mithril')
let url = 'https://fathomless-ridge-95443.herokuapp.com'

let Post = {
    list: [],
    current: {},
    loadList: m.request({
        method: 'GET',
        url,
    })
    .then(result => Post.list = result),
}
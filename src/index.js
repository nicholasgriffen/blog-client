let m = require('mithril')

let Post = require('./models/Post')
let Header = require('./views/Header')
let Home = require('./views/Home')

m.route(document.body, '/', {
    '/': {
        render: function() {
            return m(Header, m(Home))
        }
    }
})
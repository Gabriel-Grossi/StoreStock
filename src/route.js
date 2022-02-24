const express = require('express')
const ProductController = require('./controllers/ProductController')

const route = express.Router()

route.get('/dashboard', (req, res) => res.render("dashboard",
{
    title: 'StoreStock | Dashboard',
    filter: 'Filtrar'
}))
route.get('/home', (req, res) => res.render("index",
{
        title: 'StoreStock | Home',
        filter: 'Filtrar'
    })
)

route.get('/product/:productId', ProductController.open)
route.get('/login', (req, res) => res.render("login",
    {
        title: 'StoreStock | Login'
    }))
    
route.get('/redirect', (req, res) => res.render("redirect"))
module.exports = route;
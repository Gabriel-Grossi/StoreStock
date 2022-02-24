module.exports = {  
    async open(req, res) {
        const productId = req.params.productId

        res.render("product",  {
             productId: `${productId}`,
             title: 'StoreStock',
             filter: 'Filtrar',  
        })
    },

    enter(req, res) {
        const productId = req.body.productId
        res.redirect(`/product/${productId}`)
    }
}
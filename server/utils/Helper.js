const ProductSchema = require('../models/productSchema')

const fetchProducts = async () => {
    console.log('Fetching products...')
    try {
        const response = await fetch("https://fakestoreapi.in/api/products", {
            method: 'GET',
        })
        

        let {products} = await response.json()
        console.log()

        for (let product of products) {
            const exists = await ProductSchema.findOne({ id: product.id })
            if (!exists) {
                await ProductSchema.create({
                    id : product.id,
                    title: product.title,
                    image: product.image,
                    description: product.description,
                    brand: product.brand,
                    price: product.price,
                    model: product.model,
                    color: product.pcolor,
                    category: product.category,
                    popular: product.popular,
                    discount: product.discount
                })
            } else {
                return console.log('Products Data Already Exists in the Database')
            }
        }
        console.log('Products Imported!')
    } catch (err) {
        console.error('Failed to import products:', err);
    }
}


// fetchProducts()

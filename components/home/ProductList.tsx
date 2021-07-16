import { ProductItem } from '../../types'
import Product from './Product'

interface ProductListProps {
    products: ProductItem[]
}

const ProductList = ({products}: ProductListProps) => {
    return (
        <div className='py-6'>
            <div className="flex flex-col items-center">
                <h2 className="text-2xl">Our Products</h2>
                <div className='my-6 flex flex-wrap justify-center'>
                    {products.map(item => (
                        <Product key={item.sys.id} item={item}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductList

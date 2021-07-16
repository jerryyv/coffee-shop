import { ProductItem } from '../../types'
import Product from './Product'

interface ProductListProps {
    products: ProductItem[]
}

const ProductList = ({products}: ProductListProps) => {
    return (
        <div className='py-10'>
            <div className="flex flex-col items-center mx-4 text-center">
                <h2 className="">Our Products</h2>
                <div className='mt-6 flex flex-wrap justify-center'>
                    {products.map(item => (
                        <Product key={item.sys.id} item={item}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductList

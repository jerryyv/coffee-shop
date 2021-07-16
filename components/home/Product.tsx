import { ProductItem} from '../../types'
import Image from 'next/image'

interface ProductProps {
    item: ProductItem
}

const Product = ({item}: ProductProps) => {
    const { title, price, image } = item.fields
    return (
        <div className='flex flex-col m-4 border border-gray-300'>
            <Image 
                src={`https:${image.fields.file.url}`}
                alt={image.fields.title}
                width={320}
                height={200}
                className='object-cover'
            />
            <div className='flex flex-col items-center h-1/2 p-6'>
                <h3 className="text-gray-700 font-semibold">{title}</h3>
                <p className="mt-2 text-gray-700">{`$${price}`}</p>
                <button 
                    className='btn mt-6 snipcart-add-item' 
                    data-item-id={item.sys.id}
                    data-item-name={title}
                    data-item-price={price}
                    data-item-image={image.fields.file.url}
                    data-item-url="/"
                >Add To Cart</button>
            </div>

          
        </div>
    )
}

export default Product

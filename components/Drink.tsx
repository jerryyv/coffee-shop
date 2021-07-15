import { MenuItem } from '../types'
import Image from 'next/image'

interface DrinkProps {
    item: MenuItem
}

const Drink = ({ item } : DrinkProps) => {
    const { title, description, price, thumbnail } = item.fields
    return (
        <div className='flex p-4'>
            <Image 
                src={`https:${thumbnail.fields.file.url}`}
                alt={thumbnail.fields.title}
                width={50}
                height={50}
                className='object-cover'
            />
            <div className='ml-4 w-full'>
                <div className='flex justify-between'>
                    <h3>{title}</h3>
                    <p className='text-yellow-500'>{`$${price}`}</p>
                </div>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Drink

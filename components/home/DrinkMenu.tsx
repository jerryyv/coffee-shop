import Drink from './Drink'
import { MenuItem } from '../../types'
import { useState, useMemo } from 'react'


interface DrinkMenuProps {
    menuItems: MenuItem[]
}

const DrinkMenu = ({menuItems}: DrinkMenuProps) => {
    const categories = ['all', 'coffee', 'tea', 'juice']
    const [selectedCategory, setSelectedCategory] = useState('all')

    const shownItems = useMemo(() => {
        if(selectedCategory === 'all') {
            return menuItems
        } else {
            return menuItems.filter(item => item.fields.type === selectedCategory)
        }
    },[selectedCategory])

    return (
        <div className='bg-tan py-12'>
        <div className='flex flex-col items-center'>
            <h2 className='text-center'>Best Of Our Menu</h2>
            <div className='max-w-screen-lg mx-6'>
                <div className='space-x-6 my-6 flex flex-wrap justify-center'>
                    {categories.map((category,index) => (
                        <button key={index} 
                            className={selectedCategory===category?'bg-yellow-500 text-black capitalize border rounded-md py-1 px-3 my-2':'btn my-2'} 
                            onClick={() => setSelectedCategory(category)}
                                >{category}
                        </button>
                    ))}
                </div>
                <div className='grid md:grid-cols-2'>
                    {shownItems.map(item => (
                        <Drink key={item.sys.id} item={item}/>
                    ))}
                </div>
            </div>
        </div>
        </div>
    )
}



export default DrinkMenu

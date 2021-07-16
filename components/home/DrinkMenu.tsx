import Drink from './Drink'
import { MenuItem } from '../../types'
import { useState, useMemo } from 'react'


interface DrinkMenuProps {
    menuItems: MenuItem[]
}

const DrinkMenu = ({menuItems}: DrinkMenuProps) => {
    const categories = ['All', 'Coffee', 'Tea', 'Juice']
    const [selectedCategory, setSelectedCategory] = useState('all')

    const shownItems = useMemo(() => {
        if(selectedCategory === 'all') {
            return menuItems
        } else {
            return menuItems.filter(item => item.fields.type === selectedCategory)
        }
    },[selectedCategory])

    return (
        <div className="bg-tan py-6">
        <div className='flex flex-col items-center max-w-screen-lg mx-8 lg:mx-auto'>
            <h1 className='text-2xl'>Best Of Our Menu</h1>
            <div className='space-x-6 my-6 flex flex-wrap'>
                {categories.map((category,index) => (
                    <button key={index} className="btn" onClick={() => setSelectedCategory(category.toLowerCase())}>{category}</button>
                ))}
            </div>
            <div className='grid md:grid-cols-2'>
                {shownItems.map(item => (
                    <Drink key={item.sys.id} item={item}/>
                ))}
            </div>
        </div>
        </div>
    )
}



export default DrinkMenu

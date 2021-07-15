import Drink from './Drink'
import { MenuItem } from '../types'


interface DrinkMenuProps {
    menuItems: MenuItem[];
}

const DrinkMenu = ({menuItems}: DrinkMenuProps) => {
    return (
        <div className="bg-tan py-6">
        <div className='flex flex-col items-center'>
            <h1 className='text-2xl'>Best Of Our Menu</h1>
            <div className='space-x-6 my-6'>
                <button className="btn">All</button>
                <button className="btn">Coffee</button>
                <button className="btn">Tea</button>
                <button className="btn">Juice</button>
            </div>
            <div className='grid grid-cols-2'>
                {menuItems.map((item) => (
                    <Drink key={item.sys.id} item={item}/>
                ))}
            </div>
        </div>
        </div>
    )
}



export default DrinkMenu

import background from '../public/default-background.jpeg' 
import Image from 'next/image'

const Hero = () => {
    return (
        <div className="h-screen relative flex justify-center items-center">
            <div className="absolute h-full w-full">
            <Image src={background} alt='background-img' layout="fill"
                 className='object-cover'
            />
            </div>
            <div className="h-full w-full bg-yellow-500 bg-opacity-40 z-10 flex justify-center items-center">
                <h1 className="text-white text-5xl font-bold">Coffee Shop</h1>
            </div>
        </div>
    )
}

export default Hero

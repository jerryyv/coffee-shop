import Image from 'next/image'

interface HeroProps {
    title: string
    imageUrl: StaticImageData
}

const Hero = ({title, imageUrl}: HeroProps) => {
    return (
        <div className="h-96 relative flex justify-center items-center">
            <div className="absolute h-full w-full">
            <Image src={imageUrl} alt='background-img' layout="fill"
                 className='object-cover'
            />
            </div>
            <div className="h-full w-full bg-yellow-500 bg-opacity-40 z-10 flex justify-center items-center">
                <h1 className="text-white text-5xl font-bold uppercase text-center">{title}</h1>
            </div>
        </div>
    )
}

export default Hero

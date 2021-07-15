import aboutBackground from '../../public/about-background.jpeg' 
import Image from 'next/image'
import Layout from '../../components/Layout'
import Link from 'next/link'

const AboutPage = () => {
    return (
        <Layout title='About Us'>
        <div className="h-96 relative flex justify-center items-center">
            <div className="absolute h-full w-full">
            <Image src={aboutBackground} alt='background-img' layout="fill"
                 className='object-cover'
            />
            </div>
            <div className="h-full w-full bg-yellow-500 bg-opacity-40 z-10 flex justify-center items-center">
                <h1 className="text-white text-5xl font-bold">About Us</h1>
            </div>
        </div>
        <div className='py-12'>
            <div className='flex flex-col items-center justify-center text-center '>
            <h1 className='uppercase text-3xl font-semibold'>who we are</h1>
            <p className='text-xl my-4 max-w-screen-md mx-6'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique expedita quisquam voluptatem in illo voluptas corrupti hic, labore incidunt accusantium, ex ad omnis quae ratione? Corporis commodi perspiciatis quia error maxime ab adipisci et inventore tempora praesentium voluptatum sapiente explicabo cupiditate voluptate facere laboriosam ipsa, eum ipsum obcaecati. Corrupti nesciunt corporis tempora pariatur natus iusto perferendis accusamus repellendus aspernatur architecto dolor itaque atque quasi culpa, officiis maxime, blanditiis assumenda reprehenderit distinctio? Soluta quos tempora suscipit eveniet maxime animi quas, saepe velit quam, itaque odit porro, totam aliquid pariatur consequuntur at voluptatem mollitia reprehenderit facilis accusamus sapiente culpa perferendis quia. A.
            </p>
            <Link href='/'>
                <a className='mt-8 text-xl btn'>Home Page</a>
            </Link>
            </div>
        </div>
        </Layout>
    )
}

export default AboutPage

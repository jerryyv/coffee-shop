import Layout from '../../components/globals/Layout'
import Hero from '../../components/globals/Hero'
import Link from 'next/link'
import aboutBackground from '../../public/about-background.jpeg'

const AboutPage = () => {
    return (
        <Layout title='About Us'>
            <Hero imageUrl={aboutBackground} title='about us'/>
            <div className='py-12'>
                <div className='flex flex-col items-center text-center '>
                    <h2>who we are</h2>
                    <p className='text-xl my-4 leading-relaxed text-gray-700 mx-8 max-w-screen-lg'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique expedita quisquam voluptatem in illo voluptas corrupti hic, labore incidunt accusantium, ex ad omnis quae ratione? Corporis commodi perspiciatis quia error maxime ab adipisci et inventore tempora praesentium voluptatum sapiente explicabo cupiditate voluptate facere laboriosam ipsa, eum ipsum obcaecati. Corrupti nesciunt corporis tempora pariatur natus iusto perferendis accusamus repellendus aspernatur architecto dolor itaque atque quasi culpa, officiis maxime, blanditiis assumenda reprehenderit distinctio? Soluta quos tempora suscipit eveniet maxime animi quas, saepe velit quam, itaque odit porro, totam aliquid pariatur consequuntur at voluptatem mollitia reprehenderit facilis accusamus sapiente culpa perferendis quia. A.
                    </p>
                    <Link href='/'>
                        <a className='mt-6 text-xl btn'>Home Page</a>
                    </Link>
                </div>
            </div>
        </Layout>
    )
}

export default AboutPage

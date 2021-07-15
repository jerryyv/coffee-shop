import Link from 'next/link'

const Info = () => {
    return (
        <div className='py-12'>
            <div className='flex flex-col items-center justify-center text-center '>
            <h1 className='uppercase text-3xl font-semibold'>our story</h1>
            <p className='text-xl my-4 max-w-screen-md mx-6'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis laboriosam ratione nulla recusandae at obcaecati harum veniam voluptas quaerat quos exercitationem repellendus incidunt fuga dolores eum laudantium commodi ex earum neque cumque tenetur natus, quae soluta! Tenetur qui corrupti ipsa.
            </p>
            <Link href='/about'>
                <a className='mt-8 text-xl btn'>About Page</a>
            </Link>
            </div>
        </div>
    )
}

export default Info

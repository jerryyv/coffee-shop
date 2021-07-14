import Link from 'next/link'

const Info = () => {
    return (
        <div className='h-72'>
            <div className='flex flex-col items-center justify-center text-center h-full w-full'>
            <h1 className='uppercase text-3xl font-semibold'>our story</h1>
            <p className=' text-xl my-4 max-w-screen-md mx-6'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis laboriosam ratione nulla recusandae at obcaecati harum veniam voluptas quaerat quos exercitationem repellendus incidunt fuga dolores eum laudantium commodi ex earum neque cumque tenetur natus, quae soluta! Tenetur qui corrupti ipsa.
            </p>
            <Link href='/about'>
                <a className='text-xl border-2 rounded-md text-yellow-500 border-yellow-500 py-1 px-3 hover:text-black hover:bg-yellow-500 transition duration-200 ease-in-out'>About Page</a>
            </Link>
            </div>
        </div>
    )
}

export default Info

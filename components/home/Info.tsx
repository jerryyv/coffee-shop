import Link from 'next/link'

const Info = () => {
    return (
        <div className='py-12'>
            <div className='flex flex-col items-center text-center'>
                <h2>our story</h2>
                <p className='text-xl my-4 leading-relaxed text-gray-700 mx-8 max-w-screen-lg'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis laboriosam ratione nulla recusandae at obcaecati harum veniam voluptas quaerat quos exercitationem repellendus incidunt fuga dolores eum laudantium commodi ex earum neque cumque tenetur natus, quae soluta! Tenetur qui corrupti ipsa.
                </p>
                <Link href='/about'>
                    <a className='mt-6 text-xl btn'>About Page</a>
                </Link>
            </div>
        </div>
    )
}

export default Info

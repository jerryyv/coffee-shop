
const Contact = () => {
    return (
        <div className='bg-tan py-6'>
            <div className='flex flex-col items-center max-w-screen-md mx-8 md:mx-auto'>
                    <h2 className="mb-4 text-2xl">Contact Us</h2>
                    <form className='flex flex-col w-full'>
                        <label htmlFor="name" className="mb-2">Name</label>
                        <input 
                        type="text"
                        name="name" 
                        id="name"
                        className="p-2 mb-4 border rounded border-gray-400"
                        />
                        <label htmlFor="email" className="mb-2">Email</label>
                        <input 
                        type="email"
                        name="email" 
                        id="email"
                        className="p-2 mb-4 border rounded border-gray-400"
                        />
                        <label htmlFor="message" className="mb-2">Message</label>
                        <textarea 
                        name="name" 
                        id="name"
                        className="p-2 mb-4 border rounded border-gray-400"
                        />
                        <button type="submit" className="btn my-6">Submit</button>
                    </form>
               
            </div>
        </div>
    )
}

export default Contact

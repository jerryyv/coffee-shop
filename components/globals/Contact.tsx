const Contact = () => {
    return (
        <div className="bg-tan py-10">
            <div className="flex flex-col max-w-2xl mx-8 md:mx-auto">
                    <h2 className="mb-4 text-center">Contact Us</h2>
                        <form className="flex flex-col">
                            <label htmlFor="name" className="mb-2">Name</label>
                            <input 
                            type="text"
                            name="name" 
                            id="name"
                            className="form-text"
                            />
                            <label htmlFor="email" className="mb-2">Email</label>
                            <input 
                            type="email"
                            name="email" 
                            id="email"
                            className="form-text"
                            />
                            <label htmlFor="message" className="mb-2">Message</label>
                            <textarea 
                            name="name" 
                            id="name"
                            className="form-text"
                            />
                            <button type="submit" className="btn my-6 text-lg ">Submit</button>
                        </form>
            </div>
        </div>
    )
}

export default Contact

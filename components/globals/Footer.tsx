const Footer = () => {
    return (
        <div className="bg-gray-800 p-6 flex justify-center text-center">
            <p className="text-yellow-500 text-lg">
                All Rights Reserved 
                &copy;{new Date().getFullYear().toString()}{" "} 
                Coffee Shop 
            </p>
        </div>
    )
}

export default Footer

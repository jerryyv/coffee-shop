

const Footer = () => {
    return (
        <div className="bg-gray-800 py-6">
            <div className="flex flex-col items-center">
            <p className="text-yellow-500">Copyright, {new Date().getFullYear().toString()}{" "} </p>
            <p className="text-yellow-500">Coffee Shop</p>
            </div>
        </div>
    )
}

export default Footer

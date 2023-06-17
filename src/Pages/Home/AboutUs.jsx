function AboutUs() {
    return (
        <div className="hero min-h-screen bg-base-200 dark:bg-gray-900 mt-10">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://i.ibb.co/GcDJfpy/about.png" className="md:w-1/2" />
                <div className="md:w-1/2">
                    <h1 className="text-5xl font-bold"><span className="text-red-600">Freedom: </span>The Power of Liberty in Your Hands</h1>
                    <p className="py-6">Unlocking knowledge for all. Discover and download free PDF versions of books with <span className="text-orange-600 font-bold">Goriber Boighor</span>. Break barriers, empower minds. From classics to contemporary, we cater to diverse interests. No more financial limitations. Embrace the joy of reading. Join our inclusive community, fuel your passion for literature, and explore the world of words.</p>
                    <button className="btn btn-primary">Explore Books</button>
                </div>
            </div>
        </div>
    )
}
export default AboutUs;
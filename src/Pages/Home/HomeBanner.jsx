
function HomeBanner() {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/tp6z280/Banner.png" className="md:w-1/2"/>
                <div className="md:w-1/2">
                    <p className="test-sm font-bold">Let's Celebrate Together</p>
                    <h1 className="text-5xl font-bold">World <span className="text-orange-500">Book</span> Day</h1>
                    <p className="py-6">Embrace the power of words! Celebrate World Book Day and ignite your imagination. Journey through enchanting stories, discover new worlds, and connect with diverse perspectives. Let books be your guiding light, unlocking knowledge, empathy, and endless possibilities. Join us in the joy of reading on this special day!</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    )
}
export default HomeBanner;
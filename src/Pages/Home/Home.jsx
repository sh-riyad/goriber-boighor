import Footer from "../../Components/Shared/Footer";
import Navbar from "../../Components/Shared/Navbar";
import AboutUs from "./AboutUs";
import HomeBanner from "./HomeBanner"
import OurBooks from "./OurBooks";
function Home() {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <Navbar />

                <HomeBanner />
                <OurBooks/>
                <AboutUs/>

            </div>
            <Footer />
        </div>


    )
}
export default Home;
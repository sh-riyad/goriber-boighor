import Navbar from "../../Components/Shared/Navbar";
import Footer from "../../Components/Shared/Footer";
import ContactFormx from "./ContactFormx";
import ContactForm from "./ContactForm";
function ContactUs() {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <Navbar/>
                <ContactFormx/>
            </div>

            <Footer/>

        </div>


    )
}
export default ContactUs;
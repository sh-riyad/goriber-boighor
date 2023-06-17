import Navbar from "../../Components/Shared/Navbar";
import Footer from "../../Components/Shared/Footer";
import UpdateBookForm from "./UpdateBookForm";
function UpdateBook(){
    return(
        <div>
            <div className="max-w-6xl mx-auto">
                <Navbar />
                <UpdateBookForm/>
            </div>
            <Footer/>
        </div>

    )
}
export default UpdateBook;
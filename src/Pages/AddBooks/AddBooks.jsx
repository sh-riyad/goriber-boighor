import Navbar from "../../Components/Shared/Navbar";
import Footer from "../../Components/Shared/Footer";
import AddBooksForm from "./AddBooksForm";
function AddBooks() {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <Navbar/>
                <AddBooksForm/>
            </div>
            <Footer/>
        </div>

    )
}
export default AddBooks;
import { useLoaderData } from "react-router-dom";
import Footer from "../../Components/Shared/Footer";
import Navbar from "../../Components/Shared/Navbar";
import ManageBooksTable from "./ManageBooksTable";
function ManageBooks() {
    
    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <Navbar />
                <ManageBooksTable/>
            </div>
            <Footer/>
        </div>
    )
}
export default ManageBooks;
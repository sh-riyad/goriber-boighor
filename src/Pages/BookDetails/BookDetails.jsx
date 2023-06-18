import Navbar from "../../Components/Shared/Navbar";
import Footer from "../../Components/Shared/Footer";
import { useLoaderData } from "react-router-dom";
function BookDetails() {
    const details = useLoaderData();
    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <Navbar />

                <div className=" my-10 mt-10 card lg:card-side dark:bg-gray-900 shadow-xl">
                    <figure><img src={details?.image} alt={details?.bookname}/></figure>
                    <div className="card-body">
                        <h2 className="card-title">{details?.bookname}</h2>
                        <h2 className="card-title">{details?.writename}</h2>
                        <p>{details?.description}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}
export default BookDetails;
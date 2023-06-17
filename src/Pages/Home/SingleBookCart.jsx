import { Link } from "react-router-dom";
function SingleBookCart({book}) {
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={book?.image} alt={book.bookname} /></figure>
            <div className="card-body">
                <h2 className="card-title">{book?.bookname}</h2>
                <p>{book?.writername}</p>
                <div className="card-actions justify-end">
                    <Link to={`/all-books/${book?._id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    )
}
export default SingleBookCart;
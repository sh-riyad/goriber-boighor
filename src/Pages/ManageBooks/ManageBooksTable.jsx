import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
function ManageBooksTable() {


    // // read data from database
    // useEffect(()=>{
    //     fetch(`http://localhost:3000/all-books`)
    //     .then(res=> res.json())
    //     .then(data=>console.log(data));
    // },[])

    const booksData = useLoaderData();
    // console.log(books);

    // state for deleteing data without loading
    const [books, setBooks] = useState(booksData);

    // function for deleting book data
    function handleDeleteBook(bookId) {
        fetch(`http://localhost:3000/delete-book/${bookId}`, {
            method: "DELETE"
        }).then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const otherBook = books?.filter(book => book._id != bookId);
                    console.log(otherBook);
                    setBooks(otherBook);
                }
            })

    }


    return (
        <div>
            <div className="text-center my-10">
                <h1 className="text-orange-500 font-bold text-4xl">Bookshelf Oasis</h1>
                <p>You can update or delete any books here</p>

            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Writer</th>
                            <th>Subject</th>
                            {/* <th>Publisher</th> */}
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books?.map((book, i) => (

                                <tr key={book._id}>
                                    <td>{i}</td>
                                    <td>{book.bookname}</td>
                                    <td>{book.writername}</td>
                                    <td>{book.subject}</td>
                                    {/* <td>{book.publisher}</td> */}
                                    <td>
                                        <Link to={`/all-books/${book?._id}`}><button className="btn btn-outline btn-info">Details</button></Link>
                                        <Link to={`/update-book/${book?._id}`}><button className="btn btn-outline btn-success ml-2">Update</button></Link>
                                        <button onClick={() => handleDeleteBook(book._id)} className="btn btn-outline btn-error ml-2">Delete</button>
                                    </td>

                                </tr>


                            ))
                        }

                    </tbody>
                </table>
            </div>

        </div>

    )
}
export default ManageBooksTable;
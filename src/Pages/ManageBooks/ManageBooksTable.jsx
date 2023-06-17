import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
function ManageBooksTable() {


    // // read data from database
    // useEffect(()=>{
    //     fetch(`http://localhost:3000/all-books`)
    //     .then(res=> res.json())
    //     .then(data=>console.log(data));
    // },[])

    const books = useLoaderData();
    console.log(books);


    return (
        <div>
            <div className="text-center my-10">
                <h1 className="text-orange-500 font-bold">Manage Books</h1>
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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books?.map((book, i)=> (

                                <tr key={book._id}>
                                    <td>{i}</td>
                                    <td>{book.bookname}</td>
                                    <td>{book.writername}</td>
                                    <td>{book.subject}</td>
                                    {/* <td>{book.publisher}</td> */}
                                    <td>
                                        <button className="btn btn-outline btn-success">Success</button>
                                        <button className="btn btn-outline btn-error">Error</button>
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
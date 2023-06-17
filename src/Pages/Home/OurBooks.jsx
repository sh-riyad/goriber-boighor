import { useLoaderData } from "react-router-dom";
import SingleBookCart from "./SingleBookCart";

function OurBooks() {
    // getting all the vehicale information using useLoaderData() hook of react-router-dom
    const books = useLoaderData();
    // console.log(books);
    return (

        <div>
            {/* Our Books Heading */}
            <div class="flex flex-wrap -mx-3 mb-6 mt-7">
                    <div class="w-full px-3 text-center">
                        <h1 className="test-bold text-4xl text-orange-500">The Book Boutique</h1>
                    </div>
                </div>


            <div className="mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {books?.map((book) => (
                       <SingleBookCart key={book._id} book={book}/>
                    ))
                    }

                </div>


            </div>
        </div>



    )
}

export default OurBooks;
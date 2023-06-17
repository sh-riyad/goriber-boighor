import { useLoaderData } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function UpdateBookForm() {
    const navigate = useNavigate()
    const book = useLoaderData();
    function handleUpdateBook(event) {
        // auto reload off
        event.preventDefault();

        // Taking values from form input
        const bookname = event.target.bookName.value;
        const writername = event.target.writerName.value;
        const subject = event.target.subject.value;
        const image = event.target.image.value;
        const description = event.target.description.value;
        // Converting values into a object
        const UpdatedBookDetails = {
            bookname: bookname,
            writername: writername,
            subject: subject,
            image: image,
            description: description
        }
        // Put request to the server for Updating value 
        fetch(`http://localhost:3000/update-book/${book?._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(UpdatedBookDetails)
        })
            // nevigate to manage books page after successfully insertion
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    navigate("/manage-books")
                }
            }
            );
    }
    return (
        <div class="relative flex  justify-center min-h-screen bg-white dark:bg-gray-900 sm:items-center sm:pt-0">

            <form onSubmit={handleUpdateBook} class="w-full max-w-lg">
                {/* page heading start */}
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3 text-center">
                        <h1 className="test-bold text-4xl">Book Addition Zone</h1>
                        <p>Insert information about your books that you wants to ADD</p>
                    </div>
                </div>
                {/* page heading ends here */}
                {/* Form input section start here */}
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Book Name
                        </label>
                        <input type="text" placeholder="Type here" name="bookName" defaultValue={book?.bookname} className="input input-bordered input-primary w-full" />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Writer Name
                        </label>
                        <input type="text" placeholder="Type here" name="writerName" defaultValue={book?.writername} className="input input-bordered input-primary w-full" />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Subject
                        </label>
                        <input type="text" placeholder="Type here" name="subject" defaultValue={book?.subject} className="input input-bordered input-primary w-full" />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Image Link
                        </label>
                        <input type="text" placeholder="Type here" name="image" defaultValue={book?.image} className="input input-bordered input-primary w-full" />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-3">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Description
                        </label>
                        <textarea name="description" className=" no-resize textarea textarea-primary w-full" placeholder="Details"></textarea>

                    </div>
                </div>
                {/* Form input section ends here */}
                <div class="md:flex md:items-center">
                    <div class="md:w-1/3">
                        <button class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="Submit">
                            Update
                        </button>
                    </div>
                    <div class="md:w-2/3"></div>
                </div>
            </form>
        </div>
    )

}
export default UpdateBookForm;
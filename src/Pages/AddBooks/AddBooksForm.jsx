import { useNavigate } from "react-router-dom";
function AddBooksForm() {
    const navigate = useNavigate()
    function handlePostBook(event) {
        event.preventDefault();
        // Taking values from form input
        const bookname = event.target.bookName.value;
        const writername = event.target.writerName.value;
        const subject = event.target.subject.value;
        const image = event.target.image.value;
        const description = event.target.description.value;
        // Converting values into a object
        const BookDetails = {
            bookname: bookname,
            writername: writername,
            subject: subject,
            image: image,
            description: description
        }
        //console.log(BookDetails);
        // Post request to the server for storing value 
        fetch(`http://localhost:3000/add-book`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(BookDetails)
        })
            // nevigate to manage books page after successfully insertion
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    navigate("/manage-books")
                }
            });


    }
    return (
        <div class="relative flex  justify-center min-h-screen bg-white dark:bg-gray-900 sm:items-center sm:pt-0">

            <form onSubmit={handlePostBook} class="w-full max-w-lg">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3 text-center">
                        <h1 className="test-bold text-4xl text-orange-500">Book Addition Zone</h1>
                        <p>Insert information about your books that you wants to ADD</p>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Book Name
                        </label>
                        <input type="text" placeholder="Type here" name="bookName" className="input input-bordered input-primary w-full" />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Writer Name
                        </label>
                        <input type="text" placeholder="Type here" name="writerName" className="input input-bordered input-primary w-full" />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Subject
                        </label>
                        <input type="text" placeholder="Type here" name="subject" className="input input-bordered input-primary w-full" />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Image Link
                        </label>
                        <input type="text" placeholder="Type here" name="image" className="input input-bordered input-primary w-full" />
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
                <div class="md:flex md:items-center">
                    <div class="md:w-1/3">
                        <button class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="Submit">
                            Send
                        </button>
                    </div>
                    <div class="md:w-2/3"></div>
                </div>
            </form>
        </div>
    )
}
export default AddBooksForm;
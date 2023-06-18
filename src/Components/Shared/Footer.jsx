import {AiFillYoutube} from "react-icons/ai"
import {AiFillTwitterCircle} from "react-icons/ai"
import {BsFacebook} from "react-icons/bs"
import {Link} from "react-router-dom"
function Footer() {
    return (
        <div className="bg-blue-800">
            <footer className="footer footer-center p-10 text-base-content rounded">
            <div className="grid grid-flow-col gap-4">
                <Link to="/contact-us">Contact</Link>
                <Link to="add-books">Add Books</Link>
                <Link to="/manage-books">Manage Books</Link>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://facebook.com"><BsFacebook size={32}></BsFacebook></a>
                    <a href="https://twitter.com"><AiFillTwitterCircle size={36}></AiFillTwitterCircle></a>
                    <a href="https://youtube.com"><AiFillYoutube size={35}></AiFillYoutube></a>
                </div>
            </div>
            <div>
                <p>Copyright © 2023 - All right reserved by <span className="font-bold">Goriber Boighor</span> </p>
            </div>
        </footer>
        </div>
    )
}
export default Footer;
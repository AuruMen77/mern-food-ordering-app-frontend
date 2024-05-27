import { Link } from "react-router-dom";

const Footer = () => {
  return (
  <div className="bg-orange-500 py-10">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight">
            Foodmanazz.com
            </span>
        <span className="text-white font-bold tracking-tight flex gap-4">
            <Link to="https://docs.google.com/document/d/1OZNw5ZD4G-KThSyGOq6fVzAeOICqYVZAnpuzv0cAvYE/edit">
                Privacy Policy
            </Link>
            <Link to="https://www.facebook.com/azzedine.usman.75">
                Terms of Service 
            </Link>
        </span>
    </div>
  </div>
  )
}

export default Footer;
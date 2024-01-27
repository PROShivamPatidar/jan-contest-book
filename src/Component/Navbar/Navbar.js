import React, { useEffect }from "react";
import Image from "../Image/logo.svg";
import { FaSearch } from "react-icons/fa";
import { BiSolidBookHeart } from "react-icons/bi";
import { FaBell } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import "./navbar.css"
import axios from "axios";


const Navbar = ({ setApiData, value, setValue, setSelected }) => {

  function handleSubmit(e) {
    e && e.preventDefault();
    setSelected("");
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params: {
          q: value || "Harry Potter",
        },
      })
      .then((response) => {
          console.log(response.data.items);
        setApiData(response.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    handleSubmit();
  }, []);
  return (
    <div>
      <nav className="Navbar"> 
      <div className="nav-part1">
        <img src={Image} alt="logo" />
        <p>
          KeazoN<span>BOOKS</span>
        </p>
        </div>
        <div className="nav-part2">
      <form onSubmit={handleSubmit}>
          <FaSearch className="search-icon"/>
          <input
            type="text"
            placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..."
          ></input>
          <button type="submit">Search</button>
          </form>
        </div>
        <div className="nav-part3"> 
            <BiSolidBookHeart id="noob" />
            <FaBell id="noob"/>
            <FaRegUserCircle id="noob"/>
            <img
              src="https://s3-alpha-sig.figma.com/img/d48a/448f/a58ebd0c1382e3f118f3a2bc22b6dfb5?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WIwuVMtndCclt1wNfU0JZlNcEwRqGJ8IJShYxlF89JaYarSkD5s8peSPE0o55eBCh5~7xglRd2rSgT9M92fjlnZRNjtGOigMi1kZp0VyCdTfNAxWHrYKG7dEB-97wT-0hwnXZ7t6AoX9ldPBd7hcKCU0arlpJZCOL6uRd8Xx1Cd7VQ3VSr6PQscCDT9WHtHf8-XJSt1UjRxQxqZubpoqoG5sl5q0dWVupTwSBSQ1Zb2ahshPcNBMhNOyM25FdhvmajCGBSof2KOZq1QrXpRB8HDyNdtvpN7jxQeotY92Jj9egkJILkY8Xz-jU6AWVU0NWy6zb38zs9sCHrvNnGLEzw__"
              alt="user"
            />
        </div>
      </nav>
    </div>
  );
};
export default Navbar;

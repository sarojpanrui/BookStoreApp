import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from 'axios';
import list from "../../public/list.json";
import { Link } from "react-router-dom";

function Course() {
  //const filterData = list.filter((data) => data.category === "Free");
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
          Welcome to BookStore, your ultimate destination for all things literary! Dive into a world of knowledge, imagination, and inspiration with our vast collection of books across various genres, from fiction to self-help, science to fantasy. Whether you're a casual reader or a devoted book lover, we have something for everyone. Explore bestsellers, discover hidden gems, or enjoy free books with ease. With user-friendly navigation and personalized recommendations, finding your next great read has never been easier. Start your literary journey today at BookStore, where every page opens up new possibilities!
            consequatur!
          </p>


          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>


        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>


      </div>
    </>
  );
}

export default Course;
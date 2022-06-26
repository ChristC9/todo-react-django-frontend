import BlogList from "./BlogList";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import axios from "axios";

const Home = () => {

    const { data: blogs, isPending, error } = useFetch('https://nha-todo-list.herokuapp.com/api/get/');
    const [message, setMessage] = useState(null);
    axios.get('https://nha-todo-list.herokuapp.com/api/get/')
        .then(res => {
            if (res.data.length === 0) {
                setMessage("No Lists Found");
            }
        })
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} mainTitle="To Do Lists" />}
            {message && <div>{message}</div>}
        </div>
    );
}

export default Home;
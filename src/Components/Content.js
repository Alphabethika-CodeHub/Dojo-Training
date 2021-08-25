import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Content = () => {

    const [blogs, setBlogs] = useState(null);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then((data) => {
                setBlogs(data);
            })
    }, []);

    return (
        <div className="p-12">
            {blogs && <BlogList blogs={blogs} title="Hello There I'm Props" handleDelete={handleDelete}></BlogList>}
            <hr className="mt-8" />
            <p className="my-3 ">Category History</p>
            {/* <BlogList blogs={blogs.filter((blog) => blog.category === "History")} title="Category History" handleDelete={handleDelete}></BlogList> */}
        </div>
    );
}

export default Content;
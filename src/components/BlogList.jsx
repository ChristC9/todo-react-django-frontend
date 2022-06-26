import { Link } from "react-router-dom";

const BlogList = ({ blogs, mainTitle }) => {

    return (

        <div className="blog-list">
            <h2>{mainTitle}</h2>
            {blogs.map((blog) => (
                <div key={blog.id} className='blog-preview'>
                    <Link to={`/todo/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>{blog.description}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogList;
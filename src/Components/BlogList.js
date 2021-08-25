// const BlogList = ( props ) => {
//     const blogs = props.BlogsData;
//     const title = props.title;
const BlogList = ({ blogs, title, handleDelete }) => {

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
            <div className="shadow rounded-md p-5">
                <h1>Card With Props</h1>
                <hr className="my-3" />
                <div className="flex flex-col justify-center h-64 items-center">
                    <h1>Card Props</h1>
                    <p>{title}</p>
                </div>
            </div>

            {blogs.map((blog) => (
                <div className="shadow rounded-md p-5" key={blog.id}>
                    <div className="my-5 flex justify-between">
                        <h1 className="text-xl font-semibold">{blog.title}</h1>
                        <span className="bg-red-200 px-8 content-center rounded-full">{blog.category}</span>
                    </div>
                    <hr />
                    <div className="my-5">
                        <p>{blog.body}</p>
                    </div>
                    <hr />
                    <div className="my-5">
                        <button onClick={() => handleDelete(blog.id)} className="p-3 bg-red-200 shadow rounded-lg hover:bg-red-300">Delete Blog</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BlogList;
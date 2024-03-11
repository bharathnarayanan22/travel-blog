import ImageSlider from "./ImageSlider";
const Blogs =() => {

    const travelBlogs = [
        {
            title: "Exploring the Serengeti",
            subtitle: "A Safari Adventure",
            image: "serengeti.jpg",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur odio vitae purus eleifend, at interdum eros dapibus. Fusce fringilla est a magna cursus, vitae dignissim nunc ultrices. Sed hendrerit dapibus nibh, sit amet volutpat nisi posuere nec."
        },
        {
            title: "Island Paradise in Maldives",
            subtitle: "Beach Bliss",
            image: "src/images/1.jpeg",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur odio vitae purus eleifend, at interdum eros dapibus. Fusce fringilla est a magna cursus, vitae dignissim nunc ultrices. Sed hendrerit dapibus nibh, sit amet volutpat nisi posuere nec."
        },
        {
            title: "Hiking in the Swiss Alps",
            subtitle: "A Mountain Adventure",
            image: "swiss_alps.jpg",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur odio vitae purus eleifend, at interdum eros dapibus. Fusce fringilla est a magna cursus, vitae dignissim nunc ultrices. Sed hendrerit dapibus nibh, sit amet volutpat nisi posuere nec."
        }
    ];

    return(
        <>
        <ImageSlider blogs={travelBlogs} /> 

        {/* {travelBlogs.map((blog) => {
            return <ImageSlider title={blog.title} subtitle={blog.subtitle} image={blog.image} content={blog.content} blogs={travelBlogs}/>
        })} */}
        </>
    )
}
export default Blogs
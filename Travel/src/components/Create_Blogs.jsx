import { useState } from "react";
import Style from "./Create_Blog.module.css"

const Create_Blogs = () => {

    let [Title,SetTitle] = useState("");
    let [Subtitle,SetSubtitle] = useState("");
    let [Content,SetContent] = useState("");
    let [Image,SetImage] = useState("");
    let [Token,SetToken] = useState('');

    return(
        <>
        <div className={Style.createblogform}>
            <form style={{width:"70%",padding:"35px",margin:"auto",backgroundColor:"rgba(0,0,0,0.5)",borderRadius:"8px"}}>
            <h1 style={{fontSize:"30px",fontWeight:"600",color:"white"}}>Create a memory</h1>
            <input placeholder='Blog Title' type='text' onChange={(event)=>{
                SetTitle(event.target.value)
            }}/><br/><br/>
            <input placeholder='Blog Subtitle' type='text' color="white"  onChange={(event)=>{
                SetSubtitle(event.target.value)
            }}/><br/><br/>
            <textarea placeholder='Blog Content Here' style={{ height: "200px"}} onChange={(event) => {
                SetContent(event.target.value)
            }} /><br/><br/>
            <input type='text' margin="20px auto" variant="flushed" color="white" placeholder='Image URL' onChange={(event)=>{
                SetImage(event.target.value)
            }}/><br/><br/>
            <input type='text' margin="20px auto" variant="flushed" color="white" placeholder='Map-Location URL' onChange={(event)=>{
                SetImage(event.target.value)
            }}/><br/><br/>
            <button type='submit' colorScheme='teal' variant='solid'style={{margin:"20px auto"}}>Publish</button>
            </form>
            <div className={Style.animages}>
            <h2 className={Style.login_quote}>On earth there is no heaven, but there are pieces of it...</h2>
            </div>
        </div>
        </>
    )
}

export default Create_Blogs
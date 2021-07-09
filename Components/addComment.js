import React from 'react'
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";

function AddComment(props) {

    return (
        <div> Yorum Yazın: <br/>
            <textarea onChange={props.handleChange}></textarea> 
            <ReactStars onChange={props.handleRating}> </ReactStars>
            <button onClick={props.handleClick} > Yorum Paylaş </button>
        </div>
    )
}

export default AddComment

























// import React from 'react'
// import { useState } from 'react'


// const AddComment = () => {
    
//     const [myComment, setNewcomment] = useState('')
//     const [list,setList] = useState([])

//     const handleLisComment = () => {
//         let listJsx = document.querySelector(".listJsx");
//         // setList(list.concat())        
//         setList(list => list.concat(myComment))
//         console.log(list)
//         listJsx.innerHTML = list.map( (NewComment) => `<li> ${NewComment} </li>`)

//         console.log(`My comment ${ myComment }`);
//     }

//     return (
//             <ul className="listJsx"> Hiç Yorum Yok </ul>
//     )
// }
// export default AddComment



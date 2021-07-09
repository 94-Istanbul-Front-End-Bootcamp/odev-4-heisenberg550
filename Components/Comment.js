import React from 'react'
import ReactStars from 'react-rating-stars-component'

function Comment(props) {
    return (
        <div>
            {props.commentsList.length === 0 ? <h3> Henüz Hiç Yorum Yok </h3> : props.commentsList.map( e => (<h2>{e.text} <ReactStars value={e.vote}></ReactStars></h2>) )}
        </div>
    )
}

export default Comment






































// import React from 'react'
// import { useState } from 'react'


// const Comment = () => {
    
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

//     const changHandler = (e) => {
//         setNewcomment(e.target.value)
//     }

//     return (
//         <div>
//             <div>
//                 <h1>Yorumlar</h1>
//             </div>
//             <ul className="listJsx"> 

//             </ul>
//             <div>
//                 <label>Yorum Yazın: <input type="text" value={myComment} onChange={changHandler}></input>
//                 </label><br/><br/>
//                 <button onClick={handleLisComment}>Yorum Paylaş</button>
//             </div>
//         </div>

//     )
// }
// export default Comment






    
//     // const handleLisComment = () => {
//     //     let comments = ["First Comment"];
//     //     // let newList = comments.push(myComment) 
//     //     setList(comments.concat(myComment))
//     //     // setList(list.concat())
//     //     // console.log(list);
//     //     let listJsx = document.querySelector(".listJsx");
//     //     listJsx.innerHTML = comments.map( (comment) => `<li> ${comment} </li>`)
//     // }


//     // const mapcallback = () =>{
//     //     let listJsx = document.querySelector(".listJsx");
//     //     listJsx.innerHTML = list.map( (NewComment) => `<li> ${NewComment} </li>`)
//     // }

//     // const handleLisComment = ( () => {
        
//     //     // setList(list.concat())        
//     //     setList(list => list.concat(myComment))
//     //     console.log(list)
//     //     console.log(`My comment ${ myComment }`);
//     // }, mapcallback);
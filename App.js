import React, { Component } from 'react'
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";

// import AddComment from './Components/addComment';
import './App.css';
// import { text } from 'body-parser';
// import ReactRating from './Components/ReactRating';

const initialState = {
  comments: [],
  commentValue: "",
  vote: 0,
  commentErrors : "",
  commentEmpty : "",
  errorVote : "",
};

export class App extends Component {

    state = initialState;
    
    handleChange = (event) => {
      this.setState({commentValue : event.target.value })
    };

    // handleRating = (e) => {
    //   this.state.vote = e;
    //   this.setState({vote :this.state.value});
    //   // this.setstate ({vote: e.target.value})
    // }


    handleRating = (event) => {
      this.setState({vote : event });
      // console.log(typeof event);
      // console.log(typeof this.state.value);
      // this.setstate ({vote: e.target.value})
    }

    validate = () => {
  
      let commentErrors = "";
      let commentEmpty = ""
      let errorVote = "";

      if (this.state.vote < 1) {
        console.log(this.state.vote);
        errorVote = "Yorum yapmadan önce oy vermelisiniz."
      }

      if (!this.state.commentValue) {
        commentEmpty = "Yorum Alanı Boş bırakılmaz"
      }

      else if (this.state.commentValue.length < 3) {
        commentErrors = "En Az Üç karakter Yazılmalı"
      }
      
      if ( commentEmpty || commentErrors || errorVote) {
        this.setState({ commentEmpty ,commentErrors, errorVote});
        return false;
      }

      return true;
    };

    handleClick = (e) => {
    
      e.preventDefault()
      const isValid = this.validate();

      if (isValid) {
          const newState = this.state;

          newState.comments.push({ 
            text: this.state.commentValue, 
            vote: this.state.vote 
            
          });

        newState.commentValue = "";
        

        this.setState({
          ...newState
        });

        let listJsx = document.querySelector(".listJsx");
        listJsx.innerHTML = this.state.comments.map( (e) => `<li> ${e.text} </li>`)

        let ratingJsx = document.querySelector(".rates");
        ratingJsx.innerHTML = `<li> ${this.state.vote} </li>`;
        // ratingJsx.innerHTML = <ReactStars 
        //                         // value={this.state.vote}
        //                         count={this.state.vote}
        //                         size={30}
        //                         activeColor="#ffd700"
        //                       />


        newState.vote = 0;

        console.log(this.state);
        this.setState(initialState);
        }
    };

 
  render() {
    return (
      <div >
          <h1>Yorumlar</h1>      
          <div className="listJsx" style={{fontSize:30,listStyleType:"None"}}> Hiç Yorum Yok</div><br/> 
          <div className="rates"></div>
          <div>
              <label>Yorum Yazın: <br/><textarea value={this.state.commentValue} onChange={this.handleChange} ></textarea>

              {/* Hata Mesajları */}
              <div style={{fontSize:16,color:'red'}}>
                {this.state.commentErrors}
                {this.state.commentEmpty}
              </div>

              </label>
              {/* <ReactRating></ReactRating> */}
              
              <ReactStars 
                value={this.state.vote}
                count={5}
                onChange={this.handleRating}
                size={30}
                activeColor="#ffd700"
              />
              


              {/* Rating Hata Mesajı */}
              <div style={{fontSize:16,color:'red'}} >{this.state.errorVote}
              </div>
               
              <button onClick={this.handleClick} value={this.state} >Yorum Paylaş</button>
          </div>
      </div>
    )
  }
}

export default App









// Yorumları listelemek için farklı bir component oluşturulmalıdır.

// Yorum ekle kısmındaki rating component, submit button ve text input farklı bir component'in içerisinde olmalıdır.

// State App.js component'inde oluşturulmalı ve güncellenmelidir. Yani tüm aksiyon App.js üzerinden yönetilmelidir. Haliyle diğer component'ler props ile beslenmelidir. App.js component'i class tipinde, diğer component'ler function tipinde olmalıdır.


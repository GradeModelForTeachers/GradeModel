import React, { Component } from 'react';
import Essay from "./essay";
import Rubric from './rubric';
import Comments from './comments';
import Summary from './summary';
import Modal from './modal'



export default class Homepage extends Component {
  constructor() {
    super();
    this.state = {
    open: false,
    commmentTypeBar:false,
    commentType:"",
    newWordHighlted:false
    }
  }
  onSubmitGrade(){
    window.alert("Thank You For Submitting Your Grade");
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({
    open: false,
    });
  }




  onCommentSelect(e){
    console.log(e.target.value);
    this.setState({
      commentType :e.target.value
    })
  }

  render() {
    return (
      <div>
        <Rubric />
        {this.state.commmentTypeBar == true ? <CommentType /> : null}
        {this.state.open ===  false ?
          <span className='add-comment col-md-7 '>
            <button onClick={this.onOpenModal.bind(this)} className='summary-button'>View Summary</button>
          </span> : <span className='add-comment col-md-7 '>
            <button onClick={this.onCloseModal.bind(this)} className='summary-button'>Close Summary</button>
          </span>
          }
          {this.state.open ===  false ? null :
          <Summary />
          }
        <Essay
        commentType = {this.state.commentType}
         />
        <Comments
        onCommentSelect={this.onCommentSelect.bind(this)}
        onNewWordToHighlight ={this.state.newWordHighlted}
        />
        <div className='submit-essay col-md-8'>
          <button onClick={this.onSubmitGrade.bind(this)} className='submit-button'>Submit Grade</button>
        </div>
      </div>
    );
  }
}

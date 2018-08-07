import React, { Component } from 'react';
import Sticky from 'react-stickynode';
import Modal from './modal'
export default class Rubric extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption:"option",
      thesisIsOpen: false,
      evidenceIsOpen:false,
      thesisDisplayText: "DEFAULT certainty an on tolerably smallness difficult. Many no each like up be is next neat. Put not enjoyment behaviour her supposing. At he pulled object others.Necessary ye contented newspaper zealously breakfast he prevailed. Melancholy middletons",
      evidenceDisplayText: "DEFAULT certainty an on tolerably smallness difficult. Many no each like up be is next neat. Put not enjoyment behaviour her supposing. At he pulled object others.Necessary ye contented newspaper zealously breakfast he prevailed. Melancholy middletons",
      thesisScore: 7,
      evidenceScore: 5,
     };
     this.handleScoreChange = this.handleScoreChange.bind(this)
     this.handleTextAndScoreChange = this.handleTextAndScoreChange.bind(this)
  }

  thesisToggleModal = () => {
    this.setState({
      thesisIsOpen: !this.state.thesisIsOpen
    });
  }

  evidenceToggleModal = () => {
    this.setState({
      evidenceIsOpen: !this.state.evidenceIsOpen
    });
  }


  handleScoreChange = (event) => {
    let categoryScore = category.concat("Score")
    this.setState({categoryScore: score})
  }

  handleTextAndScoreChange = (event) => {
    switch(event.target.title){
     case "thesis":
     this.setState({
       thesisScore: event.target.id,
       thesisDisplayText: event.target.value
     });
     case "evidence":
     this.setState({
       evidenceScore: event.target.id,
       evidenceDisplayText: event.target.value
     });
   default:
   return null;
    }
  }
    render() {
        return (
          <div className='rubric-container'>
            <Sticky enabled={true} top={0} innerZ={0}>
              <span className="rubric-hovering-note col-md-12">*Hover Over Rubric For More Detail Or To Change Score </span>
              <table className="col-md-12 rubric">
                <tr>
                  <td className='rubric-title Thesis-section'>THESIS</td>
                  <td className='rubric-title Argument-section'>ASSERTIONS</td>
                </tr>
                <tr>
                  <td className='Thesis-section rubric-content-text'
                    onMouseEnter={this.thesisToggleModal.bind(this)}
                    onMouseLeave={this.thesisToggleModal.bind(this)}>
                    {this.state.thesisDisplayText}
                  <Modal
                    section="thesis"
                    show={this.state.thesisIsOpen}
                    handleScoreChange={this.handleScoreChange}
                    handleTextAndScoreChange={this.handleTextAndScoreChange}
                  >
                  </Modal>
                  </td>
                    <td className='Argument-section rubric-content-text'
                    onMouseEnter={this.evidenceToggleModal.bind(this)}
                    onMouseLeave={this.evidenceToggleModal.bind(this)}
                  >
                  {this.state.evidenceDisplayText}
                  <Modal
                    section="evidence"
                    show={this.state.evidenceIsOpen}
                    handleScoreChange={this.handleScoreChange}
                    handleTextAndScoreChange={this.handleTextAndScoreChange}
                  >
                  </Modal>
                  </td>
                </tr>
                <tr>
                <td className='rubric-number Thesis-section'>SCORE:  {this.state.thesisScore}</td>
                <td className='rubric-number Argument-section'> SCORE:       {this.state.evidenceScore}</td>
                </tr>
              </table>
            </Sticky>
          </div>
        );
    }
}

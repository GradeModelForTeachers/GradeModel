import React, { Component } from 'react';
import Essay from '../containers/essay';
import Rubric from './rubric';
import Comments from '../containers/comments';
import Summary from '../containers/summary';
import '../styles/homepage.css';

class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
    this.onToggleSummary = this.onToggleSummary.bind(this);
    this.onSubmitGrade = this.onSubmitGrade.bind(this);
  }

  onSubmitGrade = () => {
    window.alert('Thank You For Submitting Your Grade');
  }

  onToggleSummary() {
    this.setState(
      prevState => ({ open: !prevState.open }),
    );
  }

  render() {
    return (
      <div>
        <Rubric />
        {this.state.open === false
          ? (
            <span className="add-comment col-md-7 ">
              <button onClick={this.onToggleSummary} className="summary-button">
View Summary
              </button>
            </span>
          )
          : (
            <span className="add-comment col-md-7 ">
              <button onClick={this.onToggleSummary} className="summary-button">
Close Summary
              </button>
            </span>
          )
        }
        {this.state.open === false ? null
          : <Summary />
        }
        <Essay />
        <Comments />
        <div className="submit-essay col-md-8">
          <button onClick={this.onSubmitGrade} className="submit-button">
Submit Grade
          </button>
        </div>
      </div>
    );
  }
}

export default Homepage;

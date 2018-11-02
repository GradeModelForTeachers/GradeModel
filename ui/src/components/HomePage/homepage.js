import React, { Component } from 'react';
import Essay from '../Essay/essay';
import Rubric from '../Rubric/rubric';
import Comments from '../Essay/EssayComments/comments';
import Summary from '../Summary/summary';
import './homepage.css';

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
      <div className="PageWrapper">
        <Rubric />
        {this.state.open === false
          ? (
            <span className="add-comment">
              <button onClick={this.onToggleSummary} className="summary-button">
                View Summary
              </button>
            </span>
          )
          : (
            <span className="add-comment">
              <button onClick={this.onToggleSummary} className="summary-button">
                Close Summary
              </button>
            </span>
          )
        }
        {this.state.open === false ? null
          : <Summary />
        }
        <div className="main-content">
            <Essay />
            <Comments />
        </div>
        <div className="submit-essay">
          <button onClick={this.onSubmitGrade} className="submit-button">
Submit Grade
          </button>
        </div>
      </div>
    );
  }
}

export default Homepage;

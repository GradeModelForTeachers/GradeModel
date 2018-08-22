import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSummary } from '../actions/index';

export class Summary extends Component {
  componentDidMount() {
    this.props.fetchSummary();
  }

  render() {
    return (
      <span className=" summary col-md-6 col-md-offset-3">
        <div>
          <h2 className="summary-title">SUMMARY</h2>
          {Object.keys(this.props.summary).length === 0 ? null
            : (
              <ul data-testid="summary">
                {this.props.summary.map(item => <li key={item}>{item}</li>)}
              </ul>
            )
            }
        </div>
      </span>
    );
  }
}

function mapStateToProps({ summary }) {
  return { summary };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchSummary }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Summary);

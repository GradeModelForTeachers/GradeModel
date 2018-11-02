import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchSummary } from './summaryReducer';
import './summary.css';

export class Summary extends Component {
  componentDidMount() {
    this.props.fetchSummary();
  }

  render() {
    return (
      <div className="summary-box">
        <h2 className="summary-title">Summary</h2>
        {Object.keys(this.props.summary).length === 0 ? null : (
          <ul data-testid="summary">
            {this.props.summary.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

Summary.propTypes = {
  fetchSummary: PropTypes.func.isRequired,
  summary: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Summary.defaultProps = {
  summary: [],
};

function mapStateToProps({ summary }) {
  return { summary };
}

export default connect(mapStateToProps, { fetchSummary })(Summary);

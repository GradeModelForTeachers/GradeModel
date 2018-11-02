import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchSummary } from '../actions/index';
import '../styles/summary.css';

export class Summary extends Component {
  componentDidMount() {
    this.props.fetchSummary();
  }

  render() {
    return (
      <span className=" summary col-md-6 col-md-offset-3">
        <div>
          <h2 className="summary-title">SUMMARY</h2>
          {Object.keys(this.props.summary).length === 0 ? null : (
            <ul data-testid="summary">
              {this.props.summary.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </span>
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

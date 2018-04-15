import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getHighlights, setError } from '../actions/highlights';

class HighlightsListing extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    highlights: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      error: PropTypes.string,
      highlights: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({}),
    }),
    getHighlights: PropTypes.func.isRequired,
    setError: PropTypes.func.isRequired,
  }

  static defaultProps = {
    match: null,
  }

  componentDidMount = () => this.fetchHighlights();

  /**
    * Fetch Data from API, saving to Redux
    */
  fetchHighlights = () => {
    return this.props.getHighlights()
      // .then(() => this.props.getMeals())
      .catch((err) => {
        console.log(`Error: ${err}`);
        return this.props.setError(err);
      });
  }

  render = () => {
    const { Layout, highlights, match } = this.props;
    const id = (match && match.params && match.params.id) ? match.params.id : null;

    return (
      <Layout
        highlightId={id}
        error={highlights.error}
        loading={highlights.loading}
        highlights={highlights.highlights}
        reFetch={() => this.fetchHighlights()}
      />
    );
  }
}

const mapStateToProps = state => ({
  highlights: state.highlights || {},
});

const mapDispatchToProps = {
  getHighlights,
  setError
};

export default connect(mapStateToProps, mapDispatchToProps)(HighlightsListing);

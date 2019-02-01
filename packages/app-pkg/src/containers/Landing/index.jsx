import React from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// eslint-disable-next-line
import { Redirect, Route, Switch } from '../../temp/react-router-dom';
import Layout from '../Layout';
import Home from './Home';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    const lamiaprop = this.props.checkState;
    return (
      <Layout>
        <Switch>
          <Route
            exact
            relative
            path="/:section"
            render={(props) => {
              const { section } = props.match.params;
              return (
                <Home
                  {...this.props}
                  section={section}
                  lamiaprop={lamiaprop}
                />
              );
            }}
          />
        </Switch>
      </Layout>
    );
  }
}

Landing.propTypes = {
};

export default connect(
  // eslint-disable-next-line
  state => ({
  }),
  // eslint-disable-next-line
  dispatch => ({
  }),
)(Landing);

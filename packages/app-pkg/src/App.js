import React, { Component } from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { withUserAgent } from 'react-useragent';

/* --- Redux ---- */
import { Router } from 'react-router-dom';
import { connect } from 'react-redux';

/* --- Router ---- */
import { history } from './redux/store';
import { Redirect, Route, Switch } from './temp/react-router-dom';

/* --- Components ---- */
import Footer from './components/Footer';

/* --- Containers ---- */
import Layout from './containers/Layout';
import { Landing } from './containers/lazy';
/* --- Utils ---- */

/* --- Theme ---- */
import theme from './styles/theme';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkState: false
    };

    this.theme = Object.assign({}, theme, { isMobile: !!props.ua.mobile });
  }

  componentWillMount() {
    // eslint-disable-next-line
    console.log('did componentWillMount');
  }

  componentDidMount() {
    // eslint-disable-next-line
    console.log('componentDidMount');
    this.setState({
      checkState: true
    });
  }

  componentDidUpdate() {
    // eslint-disable-next-line
    console.log('did update');
  }

  render() {
    const {
      checkState
    } = this.state;
    return (
      <ThemeProvider theme={this.theme}>
        <div className="App" id="outerContainer">
          <Router history={history}>
            <div className="App-content">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => <Redirect to="/home/relative-link" />}
                />
                <Route
                  exact
                  path="/404"
                  render={() => (
                    <Layout>
                      <p>404 page</p>
                    </Layout>)
                  }
                />
                <Route
                  path="/home"
                  render={props => <Landing {...this.props} routeProps={props} checkState={checkState} />}
                />
                <Route>
                  <Redirect to="/404" />
                </Route>
              </Switch>
              <Footer />
            </div>
          </Router>
          {/* <Spinner spinnerState={spinnerState} /> */}
        </div>
      </ThemeProvider>
    );
  }
}

App.propTypes = {
};

export default connect(
  // eslint-disable-next-line
  state => ({
  }),
  // eslint-disable-next-line
  dispatch => ({}),
)(withUserAgent(App));

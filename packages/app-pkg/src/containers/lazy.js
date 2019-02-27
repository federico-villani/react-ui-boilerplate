import React, { Component } from 'react';
import Spinner from '../components/Spinner';

function withSuspence(LazyComp) {
  // @todo add error bonduary example
  //eslint-disable-next-line
  return class extends Component {
    render() {
      return (
        <React.Suspense fallback={<Spinner />}>
          <LazyComp {...this.props} />
        </React.Suspense>);
    }
  };
}

const LandingLazy = React.lazy(() => import('./Landing'));

export const Landing = withSuspence(LandingLazy);

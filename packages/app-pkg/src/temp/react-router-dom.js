import React from 'react';
import * as rrd from 'react-router-dom';
import { connect } from 'react-redux';

class SwitchRelative extends rrd.Switch {
  render() {
    const { route } = this.context.router;
    const { children } = this.props;
    const location = this.props.location || route.location;

    let match;
    let child;
    React.Children.forEach(children, (element) => {
      if (match == null && React.isValidElement(element)) {
        const {
          path: pathProp, exact, strict, sensitive, from, relative
        } = element.props;
        const path = pathProp || from;

        child = element;
        const fullPath = path && relative ? route.match.path + path : path;

        match = path ? rrd.matchPath(location.pathname,
          {
            path: fullPath, exact, strict, sensitive
          }) : route.match;
      }
    });

    return match ? React.cloneElement(child, { location, computedMatch: match }) : null;
  }
}

class RouteRelative extends rrd.Route {
  computeMatch({
    computedMatch, location, path, strict, exact, sensitive, relative
  }, router) {
    const fullPath = path && relative ? router.route.match.path + path : path;
    return super
      .computeMatch({
        computedMatch, location, path: fullPath, strict, exact, sensitive
      }, router);
  }
}

const ConnectedSwitch = connect(state => ({ location: state.router.location }))(SwitchRelative);

// eslint-disable-next-line
export const Redirect = rrd.Redirect;
export const Switch = ConnectedSwitch;
export const Route = RouteRelative;

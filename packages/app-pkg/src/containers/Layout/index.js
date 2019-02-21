import React from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import MQ from '../../utils/mediaQueries';
import Footer from '../../components/Footer';
import {
  PageContainer,
  HeaderBlock
} from './styles';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPhone: false,
      isTabletAll: false
    };
  }

  componentDidMount() {
    this.resizeCallback();
    window.addEventListener('resize', this.resizeCallback);
  }

  componentDidUpdate() {
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeCallback);
  }

  resizeCallback = () => {
    const isPhone = MQ.checkMediaQuery(MQ.phone);
    const isTabletAll = MQ.checkMediaQuery(MQ.tablet_big_down);
    this.setState({
      isPhone,
      isTabletAll
    }, // eslint-disable-next-line
      console.log('resize DONE'));
    // @todo check this.state reference
  };

  render() {
    const {
      children, // eslint-disable-line
      // eslint-disable-next-line
      history // <-- withRouter props
    } = this.props;
    // @todo check this.props reference
    // @todo check destructuring reference
    const {
      isPhone,
      isTabletAll
    } = this.state;
    // eslint-disable-next-line
    console.log('isPhone', isPhone);
    // eslint-disable-next-line
    console.log('isTabletAll', isTabletAll);
    // eslint-disable-next-line
    console.log('history', history);
    return (
      <>
        <PageContainer>
          <Helmet>
            <title>REACT Boilerplate</title>
          </Helmet>
          <HeaderBlock
            css={{
              backgroundColor: 'hotpink',
              '&:hover': {
                color: 'lightgreen'
              },
              paddingLeft: '40px'
            }}
          >
            <h4>
              HEADER
            </h4>
          </HeaderBlock>
          {children}
          {/**
           @todo check in the react doc the "children" render references
           */}
        </PageContainer>
        <Footer />
      </>
    );
  }
}

Layout.propTypes = {
};

export default connect(
  // eslint-disable-next-line
  state => ({
  }),
  // eslint-disable-next-line
  dispatch => ({
  }),
)(withRouter(Layout));

import React from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import { IconFont, Button } from 'ui-pkg'; // include asset form ui-pkg via lerna
import ButtonLink from '../../../components/ButtonLink';
import CssModulesComponent from '../../../components/CssModulesComponent';

import {
  StyledComponentWrapper
} from './styles';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  componentDidUpdate() {
  }

  componentWillUnmount() {
  }

  buttonCallBack = () => {
    // eslint-disable-next-line
    alert('callback of the button passed as props OK');
    // eslint-disable-next-line
    console.log('lamiaprop is eq to ', this.props.lamiaprop); // boolean props, in app.js it was a state and then became a prop when passed to the children elem
  };

  render() {
    return (
      <Container>
        <Row>
          <Col
            xs={12}
            sm={12}
            md={12}
          >
            <h1>HOME</h1>
            <div>
              <ButtonLink to="/" text="Button Component from app-pkg" onButtonClick={this.buttonCallBack} />
            </div>
            <StyledComponentWrapper>
              <p>That's how we'll import UI elements from <span style={{ color: 'red' }}>UI Components Library</span>:</p>
              <Button text="Button dinamically imported from STORYBOOK ui-pkg" colorBg="red" pos="relative" />
            </StyledComponentWrapper>
            <CssModulesComponent />
            <IconFont />
          </Col>
        </Row>
      </Container>
    );
  }
}

Home.propTypes = {
};

export default Home;

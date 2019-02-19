import React from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

import {
  MainFooter,
  FooterBlock
} from './styles';

const Footer = () => (
  <MainFooter>
    <Container>
      <Row>
        <FooterBlock paddingOverride={12}>
          <Col xs={12} md={12}>
            Footer
          </Col>
        </FooterBlock>
        <Col xs={12} md={12}>
          <>
            footer empty tag
          </>
        </Col>
      </Row>
    </Container>
  </MainFooter>
);

Footer.propTypes = {
};

export default Footer;

import React from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';

import {
  MainFooter,
  FooterBlock
} from './styles';

const Footer = () => (
  <MainFooter>
    <Grid>
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
    </Grid>
  </MainFooter>
);

Footer.propTypes = {
};

export default Footer;

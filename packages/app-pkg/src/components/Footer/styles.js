import styled from 'styled-components';

export const MainFooter = styled.footer`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  z-index: ${props => props.theme.zindex.footer};
  min-height: 200px;
  background-color: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  padding: 40px 0;
  .container {
    max-width: 100%;
  }
  ${props => props.theme.mediaQueries.phone} {
    // phone styles
  }
  ${props => props.theme.mediaQueries.tablet} {
    // tablet styles
  }
`;

export const FooterBlock = styled.div`
  position: relative;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
`;

import styled, { css } from 'styled-components';

export const MainFooter = styled.footer`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  z-index: ${props => props.theme.zindex.footer};
  //min-height: ${props => (props.theme.mediaQueries.phone ? 'auto' : '119px')};
  min-height: 180px;
  background-color: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  padding: 40px 0;
  // margin-top: 80px;
  ${props => props.theme.mediaQueries.tablet_big_down} {
      padding-top: 0;
    }
  .container {
    max-width: 100%;
  }
  ${props => props.isCircle && css`

    ${props.theme.mediaQueries.tablet_big_down} {
      padding-bottom: 40px;
    }
    
  `};
`;

export const FooterBlock = styled.div`
  position: relative;
  //border-bottom: 1px solid ${props => props.theme.colors.greyDividerAlpha};
  margin: 0;
  padding: ${props => (props.paddingOverride || '119px')};
  width: 100%;
  height: 100%;
  display: flex;
  ${props => props.paddingOverride && css`
    align-self: flex-end;
    display: inline-flex;
  `};

  ${props => props.theme.mediaQueries.phone_tablet} {
    //flex-direction: row;
  };
  ${props => props.theme.mediaQueries.tablet_big_down} {
   flex-direction: column;
   height: 100%;
   align-items: center;
  }
`;

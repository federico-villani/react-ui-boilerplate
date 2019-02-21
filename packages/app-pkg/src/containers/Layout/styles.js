import styled, { css } from 'styled-components';

export const PageContainer = styled.div`
  position: relative;
  height: calc(100vh - 200px);
  min-height: calc(100vh - 200px);
  background-color: ${props => props.theme.colors.greyTask};
  ${props => props.isEasterEgg && css`
    background-color: ${props.theme.colors.blue};
  `};
`;

export const HeaderBlock = styled.div`
  padding: 20px 0;
  font-size: 20px;
  color: ${props => props.theme.colors.white};
`;

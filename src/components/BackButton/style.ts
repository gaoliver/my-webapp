import styled from 'styled-components';

export const BackButtonComponent = styled.div`
  padding: 5px;
  background-color: ${(props) => props.theme.colors.pageH1};
  position: fixed;
  left: 10px;
  top: 20px;
  border-radius: 100px;
  aspect-ratio: 1;
  overflow: hidden;
`;

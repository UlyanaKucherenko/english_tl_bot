import styled from 'styled-components';

const PostItem = styled.div`
  min-width: 300px;
  padding: 24px;

  &:nth-child(3n+3) {
    grid-column: span 2;
  }
`;


export {PostItem};

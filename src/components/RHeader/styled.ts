import styled from 'styled-components';

const Wrap = styled.header`
  position: absolute;
  top: 0;
  left: 0;
`;

const Container = styled.div`
  padding: 0 15px;
`;

const WrapList = styled.header`
  color: black;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
`;


export {Wrap, WrapList, Container};

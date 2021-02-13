import styled from 'styled-components';
import octopusImage from '../assets/octopus.svg';

const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SpinningIcon = styled.img`
  height: 50px;
  width: 50px;
  animation: spin 0.5s alternate-reverse;
`;

export const Spinner = ({ children }) => (
  <SpinnerContainer>
    <SpinningIcon src={octopusImage} alt="" />
    {children}
  </SpinnerContainer>
);

import { useState } from 'react';
import styled from 'styled-components';

const AvatarImage = styled.img`
  height: 50px;
  width: 50px;
  border: 2px solid black;
  border-radius: 50%;
  margin-right: 1rem;
  background: white;
`;

const AvatarInitials = styled.div`
  min-height: 50px;
  min-width: 50px;
  border: 2px solid black;
  border-radius: 50%;
  margin-right: 1rem;

  background-color: darkcyan;
  color: white;
  display: flex;
  justify-content: center;
  font-size: 2rem;
  align-items: center;
  text-transform: uppercase;
`;

export const Avatar = ({ name, ...props }) => {
  const [wasError, setWasError] = useState(false);
  if (!wasError)
    return (
      <AvatarImage
        {...props}
        onError={(error) => {
          setWasError(true);
        }}
      />
    );

  const initials = name
    .split(' ')
    .map((word) => word[0])
    .join('');
  return (
    <AvatarInitials>
      {initials[0]}
      {initials[initials.length - 1]}
    </AvatarInitials>
  );
};

import styled from 'styled-components';
import { Avatar } from './Avatar';

const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.span`
  font-weight: 700;
`;

export const Author = ({ name, avatar }) => (
  <AuthorContainer>
    <Avatar name={name} src={avatar} alt="" />
    {/* no alt text as we don't have a description of the avatar, and if it's just a photo, doesn't add anything but presentation */}

    {/* TODO replace this with a component which will show a fallback/nothing if avatar is not present */}

    <Name>{name}</Name>
  </AuthorContainer>
);

import styled from 'styled-components';

const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  max-width: 50px;
  border: 2px solid black;
  border-radius: 50%;
  margin-right: 1rem;
  background: white;
`;

const Name = styled.span`
  font-weight: 700;
`;

export const Author = ({ name, avatar }) => (
  <AuthorContainer>
    <Avatar src={avatar} alt="" />
    {/* no alt text as we don't have a description of the avatar, and if it's just a photo, doesn't add anything but presentation */}

    {/* TODO replace this with a component which will show a fallback/nothing if avatar is not present */}

    <Name>{name}</Name>
  </AuthorContainer>
);

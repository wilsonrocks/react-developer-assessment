export const Author = ({ name, avatar }) => (
  <div>
    <img src={avatar} alt="" />
    {/* no alt text as we don't have a description of the avatar, and if it's just a photo, doesn't add anything but presentation */}

    {/* TODO replace this with a component which will show a fallback/nothing if avatar is not present */}

    <h4>{name}</h4>
  </div>
);

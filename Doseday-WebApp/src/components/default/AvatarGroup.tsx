import { Avatar, AvatarGroup as MuiAvatarGroup } from "@mui/material";

interface AvatarGroupProps {
  maxAvatars?: number;
  avatars: string[];
}

const AvatarGroup = ({ maxAvatars = 4, avatars }: AvatarGroupProps) => {
  const avatarComponents = avatars.map((avatar, index) => (
    <Avatar key={index} src={avatar} alt={`Avatar ${index + 1}`} />
  ));

  return (
    <MuiAvatarGroup
      max={maxAvatars}
      spacing={10}
      sx={{
        "& .MuiAvatar-root": {
          width: "3.4375rem",
          height: "3.5rem",
          border: "1.5px solid #F095BA",
          bgcolor: "lightgray",
        },
      }}
    >
      {avatarComponents}
    </MuiAvatarGroup>
  );
};

export default AvatarGroup;
import React from "react";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DraftsIcon from '@mui/icons-material/Drafts';
import { useNavigate } from "react-router-dom";

export default function ListItem({ data }) {

  const navigate = useNavigate();
  const handleClick = (link) => {
    navigate(link, { replace: true });
  };

  const link = data?.link ?? "";
  const text = data?.title ?? "/";
  const IconComponent = data?.icon?.material ?? DraftsIcon;
  const sx = data?.icon?.sx ?? {};

  return <ListItemButton
    sx={{ pl: 6 }}
    onClick={() => handleClick(link)}
  >
    <ListItemIcon>
      <IconComponent sx={sx} />
    </ListItemIcon>
    <ListItemText primary={text} />
  </ListItemButton>
}
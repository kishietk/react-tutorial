import React from "react";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DraftsIcon from '@mui/icons-material/Drafts';
import { useState } from 'react';
import Collapse from '@mui/material/Collapse';
import ExpandMore from '@mui/icons-material/ExpandMore';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import List from '@mui/material/List';
import SidebarButton from "./SidebarButton";
export default function SidebarOpenButton({ data, initOpen = false }) {
  const [open, setOpen] = useState(initOpen);
  const handleClick = () => {
    setOpen(!open);
  };

  if (!data) return <span>data is not set</span>
  const children = data.children ?? {};
  const text = data.title ?? "";
  const IconComponent = data?.icon?.material ?? DraftsIcon;
  const sx = data?.icon?.sx ?? {};

  return <>
    <ListItemButton
      onClick={handleClick}
    >
      {open
        ? <ExpandMore />
        : <KeyboardArrowRightIcon />
      }
      <ListItemIcon sx={{ pl: 1 }}>
        <IconComponent sx={sx} />
      </ListItemIcon>
      <ListItemText primary={text} />

    </ListItemButton>

    <Collapse
      in={open}
      timeout="auto"
      unmountOnExit
    >
      <List
        component="div"
        disablePadding
      >
        {children.map((value, key) => (<div
          key={key}
          id={window.location.pathname === value.link ? "active" : ""}
          className={"row"}
        >
          <div sx={{ margin: "0 10px" }}>
            {value.children
              ? <SidebarOpenButton data={value} initOpen={true} />
              : <SidebarButton data={value} />
            }
          </div>
        </div>))}
      </List>
    </Collapse>
  </>;
};
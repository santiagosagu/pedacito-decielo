import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import DiningIcon from "@mui/icons-material/Dining";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: "100%", position: "fixed", bottom: 0 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Conocenos"
          icon={
            <a href="/#conocenos">
              <EmojiPeopleIcon />
            </a>
          }
        />

        <BottomNavigationAction
          label="menu"
          icon={
            <a href="/#menu">
              <DiningIcon />
            </a>
          }
        />

        <BottomNavigationAction
          label="Contactanos"
          icon={
            <a href="/#contactanos">
              <CoPresentIcon />
            </a>
          }
        />
      </BottomNavigation>
    </Box>
  );
}

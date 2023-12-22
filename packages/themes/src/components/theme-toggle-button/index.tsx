import React from "react";
import { useSettings } from "../../@core/hooks/useSettings";
import { Button } from "@mui/material";

const ThemeToggleButton = () => {
  const { settings, saveSettings } = useSettings();
  return (
    <Button
      variant="contained"
      onClick={() => {
        saveSettings({
          ...settings,
          mode: settings.mode === "light" ? "dark" : "light",
        });
      }}
    >
      Mode {settings.mode}
    </Button>
  );
};

export default ThemeToggleButton;

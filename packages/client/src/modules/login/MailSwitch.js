import { Grid, Switch } from "@mui/material";
import React, { useState } from "react";

export const MailSwitch = () => {
  const [switchOn, setSwitchOn] = useState(false);

  return (
    <Grid container spacing={2}>
      <Grid item>
        <label>Opt-In to email?</label>
        <Switch
          id="aSwitch"
          checked={switchOn}
          onChange={() => setSwitchOn(!switchOn)}
        />
        {switchOn && (
          <p>Thank you for joining the mailing list of Carmen and Colomba!</p>
        )}
      </Grid>
    </Grid>
  );
};

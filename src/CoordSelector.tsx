import { TextField, Grid, Typography } from "@mui/material";

import { CoordSelectorProps } from "./types";

const CoordSelector = ({
  latitude,
  longitude,
  handleLatitudeChange,
  handleLongitudeChange,

  coordName
} : CoordSelectorProps) => {
  return (
    <Grid container columnSpacing={1} rowSpacing={2}>
      <Grid item xs={12}>
        <Typography variant="overline">
          { coordName }
        </Typography>
      </Grid>

      <Grid item xs={6}>
        <TextField
          fullWidth
          label="Latitude"
          type="number"
          variant="outlined"
          value={latitude}
          inputProps={{
            step: "any"
          }}
          id="latitude"
          onChange={handleLatitudeChange}
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          fullWidth
          label="Longitude"
          type="number"
          variant="outlined"
          value={longitude}
          inputProps={{
            step: "any"
          }}
          id="longitude"
          onChange={handleLongitudeChange}
        />
      </Grid>
    </Grid>
  );
};

export { CoordSelector };

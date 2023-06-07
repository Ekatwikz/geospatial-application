import { useState } from "react";
import { Container, Card, Box, Grid, TextField, InputAdornment, Typography } from "@mui/material";

import { CoordSelector } from "./CoordSelector";

const TripCalculatorForm = () => {
  const [startCoord, setStartCoord] = useState({
    latitude: 19.6697,
    longitude: -156.0234
  });

  const [endCoord, setEndCoord] = useState({
    latitude: -18.1218,
    longitude: 178.4299
  });

  const [averageKnotSpeed, setAverageKnotSpeed] = useState(15.1);
  const [fuelPerHour, setFuelPerHour] = useState(14.2);

  const distance = 0;
  const fuelEfficiency = 0;
  const tripFuel = 0;

  const strToFloat = (str: string, prevValue: number): number => {
    const value = parseFloat(str);
    if (isNaN(value)) {
      return prevValue;
    }

    return value;
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "100vh" }}
    >
      <Container component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Container maxWidth="sm">
          <Card elevation={6} sx={{
            padding: 5,
            borderRadius: 4
          }}>
            <Box>
              <Box component="form" noValidate>
                <Grid container columnSpacing={1} rowSpacing={2}>
                  <Grid item xs={12}>
                    <CoordSelector
                      coordName='Start Coordinates'
                      latitude={startCoord.latitude}
                      longitude={startCoord.longitude}
                      handleLatitudeChange={
                        event => {
                          setStartCoord({
                            latitude: strToFloat(event.target.value, startCoord.latitude),
                            longitude: startCoord.longitude
                          });
                        }
                      }
                      handleLongitudeChange={
                        event => {
                          setStartCoord({
                            longitude: strToFloat(event.target.value, startCoord.longitude),
                            latitude: startCoord.latitude
                          });
                        }
                      }
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <CoordSelector
                      coordName='End Coordinates'
                      latitude={endCoord.latitude}
                      longitude={endCoord.longitude}
                      handleLatitudeChange={
                        event => {
                          setEndCoord({
                            latitude: strToFloat(event.target.value, endCoord.latitude),
                            longitude: endCoord.longitude
                          });
                        }
                      }
                      handleLongitudeChange={
                        event => {
                          setEndCoord({
                            longitude: strToFloat(event.target.value, endCoord.longitude),
                            latitude: endCoord.latitude
                          });
                        }
                      }
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography variant="overline">
                      Fuel Economy
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Average Speed"
                      type="number"
                      variant="outlined"
                      InputProps={{
                        endAdornment: <InputAdornment position="end">Knots (nmi/h)</InputAdornment>
                      }}
                      inputProps={{
                        step: "0.1",
                        min: "0"
                      }}
                      value={averageKnotSpeed}
                      onChange={
                        event => {
                          const newAverageKnotSpeed = strToFloat(event.target.value, averageKnotSpeed);
                          setAverageKnotSpeed(newAverageKnotSpeed);
                        }
                      }
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Fuel Usage Rate"
                      type="number"
                      variant="outlined"
                      InputProps={{
                        endAdornment: <InputAdornment position="end">gal/h</InputAdornment>
                      }}
                      inputProps={{
                        step: "0.1",
                        min: "0"
                      }}
                      value={fuelPerHour}
                      onChange={
                        event => {
                          const newFuelPerHour = strToFloat(event.target.value, fuelPerHour);
                          setFuelPerHour(newFuelPerHour);
                        }
                      }
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Fuel Efficiency"
                      variant="outlined"
                      InputProps={{
                        endAdornment: <InputAdornment position="end">nmi/gal</InputAdornment>,
                        readOnly: true
                      }}
                      value={fuelEfficiency.toFixed(2)}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Card>
        </Container>

        <Typography variant="h2" sx={{ mt: 5 }}>
          Your trip will take -1 days and -1 hours
        </Typography>
        <Typography variant="h2" sx={{ mt: 3 }}>
          You&#39;ll travel -1nmi ({distance.toFixed(2)}km)
        </Typography>
        <Typography variant="h2" sx={{ mt: 3 }}>
          You&#39;ll need {tripFuel.toFixed(2)} gallons of fuel
        </Typography>
      </Container>
    </Grid>
  );
};

export default TripCalculatorForm;

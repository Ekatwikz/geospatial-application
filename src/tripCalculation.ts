import { degToRad, hoursToDaysAndHours, nmiToKm } from "./tripCalculationUtil";

// GPS coords to geodesic distance length, result in km
const calculateGeodesicDistance = (startLatitude: number, startLongitude: number, endLatitude: number, endLongitude: number) => {
  // in km:
  const earthRadius = 6371;

  const startLatitudeRad = degToRad(startLatitude);
  const startLongitudeRad = degToRad(startLongitude);
  const endLatitudeRad = degToRad(endLatitude);
  const endLongitudeRad = degToRad(endLongitude);

  // Haversine formula
  const a = Math.sin((endLatitudeRad - startLatitudeRad) / 2) * Math.sin((endLatitudeRad - startLatitudeRad) / 2)
    + Math.cos(startLatitudeRad) * Math.cos(endLatitudeRad)
      * Math.sin((endLongitudeRad - startLongitudeRad) / 2) * Math.sin((endLongitudeRad - startLongitudeRad) / 2);
  return 2 * earthRadius * Math.asin(Math.sqrt(a));
};

// speed in knots, fuel rate in gal/hour
const calculateFuelEfficiency = (averageKnotSpeed: number, fuelPerHour: number) =>
  averageKnotSpeed / fuelPerHour;

// distance in km, fuel efficiency in nmi/gal, result in gal
const calculateTripFuel = (distance: number, fuelEfficiency: number) =>
  distance / nmiToKm(fuelEfficiency);

// speed in knots, distance in km, result in days and hours
const calculateTripTime = (distance: number, averageKnotSpeed: number) =>
  hoursToDaysAndHours(distance / nmiToKm(averageKnotSpeed));

export { calculateGeodesicDistance, calculateFuelEfficiency, calculateTripFuel, calculateTripTime };

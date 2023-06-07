const degToRad = (degrees: number) => degrees * Math.PI / 180;

const nmiToKm = (nmi: number) => nmi * 1.852;

const kmToNmi = (km: number) => km / 1.852;

// time in hours
const hoursToDaysAndHours = (time: number) => {
  return {
    days: Math.floor(time / 24),
    hours: time % 24
  };
};

export { degToRad, nmiToKm, hoursToDaysAndHours, kmToNmi };

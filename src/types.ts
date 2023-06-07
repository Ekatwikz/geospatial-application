type InputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => void;

type CoordSelectorProps = {
  latitude: number,
  longitude: number,
  handleLatitudeChange: InputChangeHandler,
  handleLongitudeChange: InputChangeHandler

  coordName: string
}

export { type InputChangeHandler, type CoordSelectorProps };

import { render, screen } from "@testing-library/react";
import App from "./App";

test("App renders result tag", () => {
  render(<App />);
  const resultThingy = screen.getByText(/your.*trip/i);
  expect(resultThingy).toBeInstanceOf(HTMLHeadingElement);
  expect(resultThingy).toBeInTheDocument();
});

// TODO: more tests maybe?

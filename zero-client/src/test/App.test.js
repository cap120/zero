import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App/App";

test("renders title", () => {
  const { getByText } = render(<App />);
  const title = getByText(/Hello World!/i);
  expect(title).toBeInTheDocument();
});

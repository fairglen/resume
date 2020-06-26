import React from "react"
import { render } from "@testing-library/react"
import App from "./app"

it("renders without crashing", () => {
  const { getByText } = render(<App />)
  expect(getByText("Hello World!")).toBeInTheDocument()
})

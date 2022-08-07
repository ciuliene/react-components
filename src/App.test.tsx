import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

//   ____       _           _
//  / ___|  ___| | ___  ___| |_ ___  _ __
//  \___ \ / _ \ |/ _ \/ __| __/ _ \| '__|
//   ___) |  __/ |  __/ (__| || (_) | |
//  |____/ \___|_|\___|\___|\__\___/|_|

test("Selector ON", () => {
  render(<App />);
  const selector = screen.getByText(/ON/i);
  expect(selector).toBeInTheDocument();
});

test("Selector OFF", () => {
  render(<App />);
  const selector = screen.getByText(/OFF/i);
  expect(selector).toBeInTheDocument();
});

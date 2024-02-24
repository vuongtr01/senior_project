import React from "react";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import AllItemButton from "../components/common/AllItemButton";

describe("AllItemButton", () => {
  it("renders button with correct text", () => {
    const handleAllItemClickMock = jest.fn();
    const { getByText } = render(
      <AllItemButton handleAllItemClick={handleAllItemClickMock} />
    );
    expect(getByText("VIEW ALL ITEMS")).toBeInTheDocument();
  });

  it("calls handleAllItemClick when clicked", () => {
    const handleAllItemClickMock = jest.fn();
    const { getByText } = render(
      <AllItemButton handleAllItemClick={handleAllItemClickMock} />
    );
    fireEvent.click(getByText("VIEW ALL ITEMS"));
    expect(handleAllItemClickMock).toHaveBeenCalledTimes(1);
  });
});
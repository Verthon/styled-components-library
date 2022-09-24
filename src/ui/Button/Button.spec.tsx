import { screen } from "@testing-library/dom";
import { createTestWrapper } from "../../tests/utils";
import Button from "./Button";

describe("Button", () => {
	it("should render button with its children", () => {
		createTestWrapper({ children: <Button>My button</Button> });

    expect(screen.getByRole('button', { name: /my button/i })).toBeInTheDocument();
	});

  it("should render disabled button", () => {
    createTestWrapper({ children: <Button disabled>My button</Button> });

    expect(screen.getByRole('button', { name: /my button/i })).toBeDisabled();
  })
});
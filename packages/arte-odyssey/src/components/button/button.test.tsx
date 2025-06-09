import { render, screen } from "@testing-library/react";
import { Button } from "./button";

describe("Button", () => {
	it("renders children correctly", () => {
		render(<Button>Click me</Button>);

		expect(screen.getByRole("button")).toBeInTheDocument();
		expect(screen.getByText("Click me")).toBeInTheDocument();
	});

	it("renders button element", () => {
		render(<Button>Test</Button>);

		const button = screen.getByRole("button");
		expect(button.tagName).toBe("BUTTON");
	});
});

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "../components/LoginForm";

describe("LoginForm component", () => {
	it("renders the basic fields", () => {
		render(<LoginForm />);
		expect(screen.getByRole("textbox", { type: "email" })).toBeInTheDocument();
		expect(
			screen.getByRole("textbox", { type: "password" })
		).toBeInTheDocument();
		expect(screen.getByRole("button", { type: "submit" })).toBeInTheDocument();
	});
	it("validates email field", () => {
		render(<LoginForm />);
		const email = screen.getByRole("textbox", { type: "email" });
		userEvent.type(email, "welcome@plantiful.com");
		expect(email).toHaveValue("welcome@plantiful.com");
	});
	it("validates password field", () => {
		render(<LoginForm />);
		const password = screen.getByRole("textbox", { type: "password" });
		userEvent.type(password, "P!ant$$$!");
		expect(password).toHaveValue("P!ant$$$!");
	});
	it("submits form", () => {
		const onSubmit = jest.fn();
		const { getByTestId } = render(<LoginForm onSubmit={onSubmit()} />);
		userEvent.click(getByTestId("loginbutton"));
		expect(onSubmit).toHaveBeenCalled();
	});
});

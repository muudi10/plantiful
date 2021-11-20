import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "../components/LoginForm";

describe("LoginForm component", () => {
	it("renders the basic fields", () => {
		const { asFragment } = render(<LoginForm />);
		expect(asFragment()).toMatchSnapshot();
	});
	it("validates username field", () => {
		render(<LoginForm />);
		const username = screen.getByRole("textbox", { type: "text" });
		userEvent.type(username, "PlantUser");
		expect(username).toHaveValue("PlantUser");
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

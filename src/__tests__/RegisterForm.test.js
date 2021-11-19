import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RegisterForm from "../components/RegisterForm";

describe("Register Form component", () => {
	it("renders the basic fields", () => {
		render(<RegisterForm />);
		expect(screen.getByRole("textbox", { type: "email" })).toBeInTheDocument();
		expect(
			screen.getByRole("textbox", { type: "password" })
		).toBeInTheDocument();
		expect(screen.getByTestId(/confirmPassword/i)).toBeInTheDocument();
		expect(screen.getByRole("button", { type: "submit" })).toBeInTheDocument();
	});
	it("should validate email field", () => {
		render(<RegisterForm />);
		const email = screen.getByRole("textbox", { name: /email address/i });
		userEvent.type(email, "hello@plantiful.com");
		expect(email).toHaveValue("hello@plantiful.com");
	});
    it("should validate password field", () => {
        render(<RegisterForm />);
        const password = screen.getByRole("textbox", {type: "password"});
        userEvent.type(password, "Il0veP!ant$!");
        expect(password).toHaveValue("Il0veP!ant$!");
    });
    it("should validate confirm password field", () => {
        render(<RegisterForm/>);
        const confirmPassword = screen.getByTestId(/confirmpassword/i);
        userEvent.type(confirmPassword, "Il0veP!ant$!");
        expect(confirmPassword).toHaveValue("Il0veP!ant$!")
    })
    it("the form submits", () => {
        const onSubmit = jest.fn();
        const { getByTestId } = render(<RegisterForm onSubmit={onSubmit()}/>);
        userEvent.click(getByTestId("submitbutton"));
        expect(onSubmit).toHaveBeenCalled();
    })
});

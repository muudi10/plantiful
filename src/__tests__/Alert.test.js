import React from "react";
import { render } from "@testing-library/react";
import Alert from "../components/Alert";

describe('Alert', () => {
    it("renders an error message if action is unsuccessful", () => {
        const { getByText, asFragment } = render(<Alert message="Error!"/>)
        expect(getByText(/error/i)).toHaveTextContent('Error!')
        expect(asFragment()).toMatchSnapshot();
    });
    it("renders a successful message if action is successful", () => {
        const { getByText, asFragment } = render(<Alert message="Success!" success/>)
        expect(getByText(/success/i)).toHaveTextContent('Success!')
        expect(asFragment()).toMatchSnapshot()
    });
    it("if message is empty, it does not render a message", () => {
        const { asFragment } = render(<Alert message="" />)
        expect(asFragment()).toMatchSnapshot()
    })
});
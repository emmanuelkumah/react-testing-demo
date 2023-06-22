import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Register from "./Register";

describe("Register component", () => {
  it("should render Register component correctly", () => {
    render(<Register />);
    const element = screen.getByText("Email");
    expect(element).toBeInTheDocument();
  });
  it("should show an error message if input was not entered", async () => {
    render(<Register />);
    const btnElement = screen.getByRole("button");
    await userEvent.click(btnElement);
    const alert = screen.getByRole("alert");
    expect(alert).toBeInTheDocument();
  });
  it("should not show alert message when component re-render", () => {
    render(<Register />);
    const alert = screen.queryByRole("alert");

    expect(alert).not.toBeInTheDocument();
  });
  it("show show success message when form is filled and submitted", () => {
    render(<Register />);
    const buttonEle = screen.getByRole("button");
    userEvent.click(buttonEle);
    const alertEle = screen.queryByRole("alert");
    expect(alertEle).toBeInTheDocument()
  });
});

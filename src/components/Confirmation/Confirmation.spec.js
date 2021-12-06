import { fireEvent, render } from "@testing-library/react";

import { Confirmation } from "./Confirmation";

describe("GIVEN a Confirmation component", () => {
  test("THEN it should render as a dialog element", () => {
    const { getByRole } = render(<Confirmation />);

    expect(getByRole("dialog")).toBeInTheDocument();
  });

  test("THEN it should have a title containing 'Confirm'", () => {
    const { getByText } = render(<Confirmation />);

    expect(getByText(/Confirm/i)).toBeInTheDocument();
  });

  test("THEN it should contain a dynamic question", () => {
    const QUESTION = "Do you confirm?";
    const { getByText } = render(<Confirmation>{QUESTION}</Confirmation>);

    expect(getByText(QUESTION)).toBeInTheDocument();
  });

  test("THEN it should contain a 'OK' button", () => {
    const { getByRole } = render(<Confirmation />);

    expect(getByRole("button", { name: /OK/i })).toBeInTheDocument();
  });

  test("THEN it should contain a 'Cancel' button", () => {
    const { getByRole } = render(<Confirmation />);

    expect(getByRole("button", { name: /Cancel/i })).toBeInTheDocument();
  });

  test("THEN it should be able to receive a handler for the 'OK' button and execute", () => {
    const onConfirmationHandler = jest.fn();
    const { getByRole } = render(
      <Confirmation onConfirmation={onConfirmationHandler} />
    );
    const okButton = getByRole("button", { name: /OK/i });

    fireEvent.click(okButton);

    expect(onConfirmationHandler).toHaveBeenCalled();
  });

  test("THEN it should be able to receive a handler for the 'Cancel button and execute", () => {
    const onCancellationHandler = jest.fn();
    const { getByRole } = render(
      <Confirmation onCancellation={onCancellationHandler} />
    );
    const cancelButton = getByRole("button", { name: /Cancel/i });

    fireEvent.click(cancelButton);

    expect(onCancellationHandler).toHaveBeenCalled();
  });
});

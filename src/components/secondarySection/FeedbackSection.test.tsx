import { render, screen, fireEvent } from "@testing-library/react";
import SecondarySection from "./SecondarySection";
import "@testing-library/jest-dom";

describe("SecondarySection component", () => {
  test("Se comprueba que se renderiza el componente", () => {
    render(
      <SecondarySection title="Title" body="Body" buttonText="ButtonText" />
    );

    const section = screen.getByText("Title");
    expect(section).toBeInTheDocument();
  });

  test("Se hace click sobre el botón del componente y se comprueba que se haya llamado al método onClick", () => {
    render(
      <SecondarySection title="Title" body="Body" buttonText="ButtonText" />
    );
    const spy = jest.spyOn(window, 'alert');

    const button = screen.getByText("ButtonText");
    fireEvent.click(button);
    expect(spy).toHaveBeenCalled();
  });
});

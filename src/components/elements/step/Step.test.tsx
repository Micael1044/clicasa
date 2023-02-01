import { render, screen, fireEvent, prettyDOM } from "@testing-library/react";
import Step from "./Step";
import "@testing-library/jest-dom";

describe("Step component", () => {
  test("Se comprueba que se renderiza el componente con las props obligatorias y que pinta una imagen", () => {
    render(<Step num="1" title="Title" body="Body" />);
    const logo = screen.getByRole("img");
    const section = screen.getByText("1");

    expect(logo).toHaveAttribute("alt", "Man typing on laptop");
    expect(logo).toBeInTheDocument();
    expect(section).toBeInTheDocument();
  });

  test("Se comprueba que se renderiza el componente con todas las props y que no se muestra una imagen ", () => {
    render(<Step num="1" title="Title" body="Body"  onClick={jest.fn()}  selected={false}/>);

    const logo = screen.queryByRole("img");
    const section = screen.getByText("1");
    expect(logo).toBeNull();
    
    expect(section).toBeInTheDocument();
  });

  test("Se comprueba que los estilos del componente cambian si está seleccionado ", () => {
    render(<Step num="1" title="Title" body="Body"  onClick={jest.fn()}  selected={true}/>);

    const container = screen.getByTestId("step-container");
    expect(container).toHaveStyle("border-bottom: 5px solid #008bcf");
    expect(container).toBeInTheDocument();
  });
});

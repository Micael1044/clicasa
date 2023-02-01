import { render, screen, fireEvent, prettyDOM } from "@testing-library/react";
import FeedbackSection from "./FeedbackSection";
import "@testing-library/jest-dom";

describe("FeedbackSection component", () => {
  test("Se comprueba que se renderiza el componente", () => {
    render(
      <FeedbackSection
        data={[
          {
            review: "Fue realmente fácil, en una semana vendí mi piso",
            user: "Sonia M.",
          },
          {
            review: "No tuve problemas",
            user: "Rebecca F.",
          },
          {
            review: "Muy buena experiencia de usuario",
            user: "Lucas P.",
          },
        ]}
      />
    );

    const section = screen.getByText("Fue realmente fácil, en una semana vendí mi piso");
    expect(section).toBeInTheDocument();
  });


  test("Se hace click sobre el segundo botón y cambia la review", () => {
    render(
      <FeedbackSection
        data={[
          {
            review: "Fue realmente fácil, en una semana vendí mi piso",
            user: "Sonia M.",
          },
          {
            review: "No tuve problemas",
            user: "Rebecca F.",
          },
          {
            review: "Muy buena experiencia de usuario",
            user: "Lucas P.",
          },
        ]}
      />
    );

    const buttons = screen.getAllByRole("button");
    fireEvent.click(buttons[1]);

    const section = screen.getByText("No tuve problemas");
    expect(section).toBeInTheDocument();
  });
});

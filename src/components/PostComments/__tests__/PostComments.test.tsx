import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import PostComment from "../index";

describe("Teste para o componente PostComment", () => {
  test("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  test("Deve renderizar com 2 novos comentarios", async () => {
    render(<PostComment />);
    const textarea = screen.getByTestId("txt-comentar");
    const button = screen.getByTestId("btn-comentar");

    fireEvent.change(textarea, { target: { value: "Primeiro comentario" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText("Primeiro comentario")).toBeInTheDocument();
    });

    fireEvent.change(textarea, { target: { value: "Segundo comentario" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText("Segundo comentario")).toBeInTheDocument();
    });
  });
});

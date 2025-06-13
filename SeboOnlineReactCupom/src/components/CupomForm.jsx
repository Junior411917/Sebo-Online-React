import { useState } from "react";
import { createCupom } from "../services/cuponsService";

export default function CupomForm() {
  const [form, setForm] = useState({ codigo: "", descricao: "", desconto: 0 });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createCupom(form);
    alert("Cupom criado!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="codigo" placeholder="Código" onChange={handleChange} />
      <input name="descricao" placeholder="Descrição" onChange={handleChange} />
      <input name="desconto" type="number" placeholder="Desconto" onChange={handleChange} />
      <button type="submit">Salvar</button>
    </form>
  );
}

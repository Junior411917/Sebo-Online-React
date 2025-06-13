import { useEffect, useState } from "react";
import { getCupons, deleteCupom } from "../services/cuponsService";

export default function CupomList() {
  const [cupons, setCupons] = useState([]);

  const carregar = async () => {
    const { data } = await getCupons();
    setCupons(data);
  };

  useEffect(() => {
    carregar();
  }, []);

  const excluir = async (codigo) => {
    await deleteCupom(codigo);
    carregar();
  };

  return (
    <div>
      <h2>Cupons:</h2>
      <ul>
        {cupons.map((cupom) => (
          <li key={cupom.codigo}>
            {cupom.codigo} - {cupom.descricao} - {cupom.desconto}%
            <button onClick={() => excluir(cupom.codigo)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

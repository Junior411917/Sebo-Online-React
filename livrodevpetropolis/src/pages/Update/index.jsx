import Header from "../../components/Header";
import { useForm } from "react-hook-form";
import * as styles from "./Update.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const validationSchema = yup.object().shape({
  nome: yup.string().required("Informe o nome do livro"),
  isbn: yup.string().required("Informe o código ISBN"),
  preco: yup
    .number()
    .typeError("Digite um valor numérico")
    .positive("O preço deve ser positivo")
    .required("Informe o preço"),
  idCategoria: yup
    .number()
    .typeError("Digite um número válido")
    .required("Informe a categoria"),
});

export default function Update() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [livro, setLivro] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  useEffect(() => {
    axios
      .get(`http://localhost:8080/produtos/${id}`)
      .then((response) => {
        const data = response.data;
        setLivro(data);
        setValue("nome", data.nome);
        setValue("isbn", data.isbn);
        setValue("preco", data.preco);
        setValue("idCategoria", data.idCategoria);
      })
      .catch(() => alert("Erro ao buscar os dados do livro"));
  }, [id, setValue]);

  const atualizarLivro = (data) => {
    axios
      .put(`http://localhost:8080/produtos/${id}`, data)
      .then(() => {
        alert("Livro atualizado com sucesso!");
        navigate("/inicio");
      })
      .catch(() => alert("Erro ao atualizar o livro"));
  };

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.imageBox}>
        <img src="src/assets/react.png" />
      </div>

      

        
      <main className={styles.main}>
        <section className={styles.formWrapper}>
          <h2>Editar Livro – DevPetrópolis</h2>
          <form onSubmit={handleSubmit(atualizarLivro)} className={styles.form}>
            <div className={styles.field}>
              <label htmlFor="nome">Livro</label>
              <input type="text" id="nome" {...register("nome")} />
              <span>{errors.nome?.message}</span>
            </div>

            <div className={styles.field}>
              <label htmlFor="isbn">ISBN</label>
              <input type="text" id="isbn" {...register("isbn")} />
              <span>{errors.isbn?.message}</span>
            </div>

            <div className={styles.field}>
              <label htmlFor="preco">Preço</label>
              <input type="number" id="preco" step="0.01" {...register("preco")} />
              <span>{errors.preco?.message}</span>
            </div>

            <div className={styles.field}>
              <label htmlFor="idCategoria">Gênero (somente números)</label>
              <input type="number" id="idCategoria" {...register("idCategoria")} />
              <span>{errors.idCategoria?.message}</span>
            </div>

            <div className={styles.actions}>
              <button type="submit">Salvar</button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}

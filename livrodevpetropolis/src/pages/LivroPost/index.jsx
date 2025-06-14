import Header from "../../components/Header";
import { useForm } from "react-hook-form";
import * as styles from "./LivroPost.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    .typeError("Digite apenas o número da categoria")
    .required("Informe a categoria"),
});

export default function LivroPost() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const cadastrarLivro = (data) => {
    axios
      .post("http://localhost:8080/posts", data)
      .then(() => {
        alert("Livro cadastrado com sucesso!");
        navigate("/");
      })
      .catch(() => alert("Erro ao cadastrar o livro"));
  };

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        
        <div className={styles.imageBox}>
          <img src="src/assets/react.png" />
        </div>

        <section className={styles.formWrapper}>
          <h2>Livraria DevPetropolis</h2>
          <form onSubmit={handleSubmit(cadastrarLivro)} className={styles.form}>
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
              <label htmlFor="idCategoria">Gênero (somente número)</label>
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

import Header from "../../components/HeaderMain";
import { useForm } from "react-hook-form";
import * as styles from "./LivroPost.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import CatTable from "../../components/CatTable";

const validationSchema = yup.object().shape({
  nome: yup.string().required("Informe o nome do livro"),
  isbn: yup.string().required("Informe o código ISBN"),
  preco: yup
    .number()
    .typeError("Digite um valor numérico")
    .positive("O preço deve ser positivo")
    .required("Informe o preço"),
  categoriaId: yup
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
    const token = localStorage.getItem("token");
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    axios
      .post("http://localhost:8080/produtos", data, { headers })
      .then(() => {
        alert("Livro cadastrado com sucesso!");
        navigate("/disponiveis");
      })
      .catch(() => alert("Erro ao cadastrar o livro"));
  };

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>

      <div className={styles.tableBox}>
        <CatTable />
      </div>

        <section className={styles.formWrapper}>
          <h2>Cadastro de Livro</h2>
          <form onSubmit={handleSubmit(cadastrarLivro)} className={styles.form}>
            <div className={styles.field}>
              <label htmlFor="nome">Nome do Livro</label>
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
              <input
                type="number"
                id="preco"
                step="0.01"
                {...register("preco")}
              />
              <span>{errors.preco?.message}</span>
            </div>
            <div className={styles.field}>
              <label htmlFor="categoriaId">Gênero (somente número)</label>
              <input
                type="number"
                id="categoriaId"
                {...register("categoriaId")}
              /> 
              <span>{errors.categoriaId?.message}</span>
            </div>
            <div className={styles.actions}>
              <button type="submit">Salvar</button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}

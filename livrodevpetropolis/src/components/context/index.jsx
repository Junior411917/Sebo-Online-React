// Importação dos hooks do React para gerenciamento de estado e contexto
import { createContext, useState, useContext, useEffect } from "react";

// Criando o contexto de tema
const ThemeContext = createContext();

/* ==============================
   Provedor de tema (ThemeProvider)
   ============================== */
export function ThemeProvider({ children }) {
  // Definição do estado de darkMode com inicialização baseada no localStorage
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark"; // Obtém o tema salvo no localStorage ao recarregar a página
  });

  // useEffect para atualizar o tema no body e armazená-lo no localStorage
  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove("light-mode"); // Remove a classe do modo claro
      document.body.classList.add("dark-mode"); // Adiciona a classe do modo escuro
      localStorage.setItem("theme", "dark"); // Salva o tema no localStorage
    } else {
      document.body.classList.remove("dark-mode"); // Remove a classe do modo escuro
      document.body.classList.add("light-mode"); // Adiciona a classe do modo claro
      localStorage.setItem("theme", "light"); // Salva o tema no localStorage
    }
  }, [darkMode]); // useEffect será executado sempre que darkMode mudar

  return (
    // Provedor do contexto de tema, disponibilizando darkMode e setDarkMode
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children} {/* Renderiza os componentes filhos dentro do provedor */}
    </ThemeContext.Provider>
  );
}

/* ==============================
   Hook personalizado para acessar o tema
   ============================== */
export function useTheme() {
  return useContext(ThemeContext); // Retorna o valor do contexto, permitindo acesso ao tema e ao estado global
}

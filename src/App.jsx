import { createGlobalStyle, ThemeProvider } from "styled-components";
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";
import { theme } from "./styles/theme";
import { flex } from "./styles/mixin";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: white;
}

body {
  background-color: #121212;
}

section {
  ${flex({ justify: "center", align: "center", wrap: "wrap", gap: "20px" })}
  padding: 20px 40px;
}
`;

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <main>
          <Header />
          <section>
            {contents.map((el) => (
              <Content key={el.id} content={el} />
            ))}
          </section>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;

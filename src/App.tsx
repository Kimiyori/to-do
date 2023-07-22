import { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyles';
import ToDo from './pages/Todo';
import { theme } from './data/styleVariables';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ToDo />
      </ThemeProvider>
    </>
  );
}

export default App;

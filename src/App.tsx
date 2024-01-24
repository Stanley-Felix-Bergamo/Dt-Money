import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { Globalstyled } from "./styles/global";
import { Transactions } from "./pages/Transactions";
import { TransactionProvider } from "./contexts/transactionsContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Globalstyled />
      <TransactionProvider>
        <Transactions />
      </TransactionProvider>
    </ThemeProvider>
  );
}

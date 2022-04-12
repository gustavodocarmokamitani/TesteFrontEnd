import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation } from "./components/Navigation";
import { Assessment } from "./components/Assessment";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header name="$usuario$"/>
      <Navigation/>      
      <Assessment/>
    </>
  );
}
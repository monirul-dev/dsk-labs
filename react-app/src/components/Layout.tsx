import { Container } from "react-bootstrap";
import Header from "./header/Header";
import Footer from "./footer/Footer";

export default function Layout({ children } : { children:any }) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer/>
    </>
  );
}
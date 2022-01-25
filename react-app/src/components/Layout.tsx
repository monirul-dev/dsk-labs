import Header from "./header/Header";
import Footer from "./footer/Footer";

export default function Layout({ children } : { children:any }) {
  return (
    <>
      <Header />
        <main id="main">{children}</main>
      <Footer/>
    </>
  );
}
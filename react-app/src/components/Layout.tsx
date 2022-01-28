import Footer from "./footer/Footer";
import Header from "./header/Header";

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}

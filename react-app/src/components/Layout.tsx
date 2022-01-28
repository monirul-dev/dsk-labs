import Footer from "./footer/Footer";
import Header from "./header/Header";
import ScrollToTop from "./ScrollToTop";

export default function Layout({
  children,
}: {
  children: React.ReactChild | React.ReactChild[];
}) {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}

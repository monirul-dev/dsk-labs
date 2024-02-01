import { Toaster } from "react-hot-toast";
import ScrollToTop from "./ScrollToTop";
import Footer from "./footer/Footer";
import Header from "./header/Header";

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
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

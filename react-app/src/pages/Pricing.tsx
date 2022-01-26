import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import Faq from "../components/faq/Faq";
import PriceItems from "../components/priceitems/PriceItems";

export default function Pricing() {
  return (
    <>
      <Breadcrumbs>Pricing</Breadcrumbs>
      <PriceItems />
      <Faq />
    </>
  );
}

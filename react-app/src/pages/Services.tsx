import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import Features from "../components/features/Features";
import ServiceItems from "../components/serviceitems/ServiceItems";

export default function Services() {
  return (
    <>
      <Breadcrumbs>Services</Breadcrumbs>
      <ServiceItems />
      <Features />
    </>
  );
}

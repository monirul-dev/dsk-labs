import CarouselItems from "../components/carouselitems/CarouselItems";
import CompanyDetails from "../components/companydetails/CompanyDetails";
import OurClients from "../components/ourclients/OurClients";
import PortfolioItems from "../components/porfolioitems/PortfolioItems";
import ServiceItems from "../components/serviceitems/ServiceItems";

export default function Home() {
  return (
    <>
      <CarouselItems />
      <CompanyDetails />
      <OurClients />
      <ServiceItems />
      <PortfolioItems />
    </>
  );
}

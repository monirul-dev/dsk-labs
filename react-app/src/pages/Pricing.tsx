import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import Faq from "../components/faq/Faq";
import PriceList from "../components/pricelist/PriceList";

export default function Pricing(){
    return(
        <>
            <Breadcrumbs>Pricing</Breadcrumbs>
            <PriceList />
            <Faq />
        </>
    );
}
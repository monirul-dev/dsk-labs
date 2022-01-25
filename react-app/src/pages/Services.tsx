import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import ServiceList from "../components/servicelist/ServiceList";
import Features from "../components/features/Features";

export default function Services(){
    return(
        <>
            <Breadcrumbs>Services</Breadcrumbs>
            <ServiceList />
            <Features />
        </>
    );
}
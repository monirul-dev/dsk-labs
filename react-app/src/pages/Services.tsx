import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import ServiceItems from "../components/serviceitems/ServiceItems";
import FeatureItems from "../components/featureitems/FeatureItems";

export default function Services(){
    return(
        <div>
            <Breadcrumbs>Services</Breadcrumbs>
            <ServiceItems />
            <FeatureItems />
        </div>
    );
}
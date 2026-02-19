import Banner from "./[slug]/banner";
import Benefit from "./[slug]/benefit";
import Bestseller from "./[slug]/bestseller";
import Tours from "./[slug]/tours";

export default function SalePage() {
    return (
        <div>
            <Banner />
            <Benefit />
            <Bestseller />
            <Tours />
        </div>
    );
}

import CorporateBanner from "./CorporateBanner";
import CorporateServices from "./CorporateServices";
import WallOfMemories from "./WallOfMemories";
import CorporateDestinationsSection from "./CorporateDestinationsSection"
import WhyChooseUsCorporate from "./WhyChooseUsCorporate";
import FeaturedNews from "../components/useable/FeaturedNews/FeaturedNews";
export default function coorporateToursPage() {


  return (
    <section className="w-full px-3 md:px-30 ">
      <div className="max-w-7xl justify-center mx-auto">

        {/* Header */}

<CorporateBanner/>
<CorporateServices/>
<WallOfMemories/>
<CorporateDestinationsSection/>

<WhyChooseUsCorporate/>
<FeaturedNews/>
</div>
    </section>
  );
}

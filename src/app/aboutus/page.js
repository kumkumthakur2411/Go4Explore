import Start from "./[slug]/start";
import WhoWeAre from "./[slug]/WhoWeAre";
import WeOffer from "./[slug]/WeOffer";
import Journey from "./[slug]/journey";
import Founder from "./[slug]/Founder";
import CoreTeam from "./[slug]/CoreTeam";
import Captains from "./[slug]/Captains";

export default function About() {
    return (
        <main className="w-full">
            <Start />
            <WhoWeAre />
            <WeOffer />
            <Journey />
            <Founder />
            <CoreTeam />
            <Captains />
        </main>
    );
}

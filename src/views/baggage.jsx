import BaggageOptionsSection from "../components/baggageSection"
import Footer from "../components/footer"
import InfoSection from "../components/infoSection"
import NavBar from "../components/navbar"
import RecommendationSection from "../components/recommendationSection"

// Baggage management main view
function BaggageView() {
    return (
        <>
            <NavBar/>
            <BaggageOptionsSection/>
            <RecommendationSection/>
            <InfoSection/>
            <Footer/>
        </>
    )
}

export default BaggageView
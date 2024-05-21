import RecommendationTable from "./recommendationTable"

function RecommendationSection() {
    return (
        <>
            <h1 className="font-light py-6 px-12 text-3xl bg-cyan-500 text-white">
                    Antes de volar ten en cuenta
            </h1>
            <RecommendationTable/>
        </>
    )
}

export default RecommendationSection
import RecommendationCard from "./recommendationCard"

function RecommendationTable() {
    return (
        <div className="bg-blue-950">
            <div className="mx-20 space-y-6 py-8">
                <RecommendationCard title="Articulos restringidos"/>
                <RecommendationCard title="Equipaje especial"/>
                <RecommendationCard title="Sobredimensionado"/>
                <RecommendationCard title="Calculadora de equipaje"/>
            </div>
        </div>
    )
}

export default RecommendationTable
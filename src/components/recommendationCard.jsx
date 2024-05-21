
function RecommendationCard({title}) {
    return (
        <div className="border border-cyan-500 rounded-2xl p-3 bg-white">
            <h3 className="text-blue-900 mb-1 font-semibold">{title}</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
        </div>
    )
}

export default RecommendationCard
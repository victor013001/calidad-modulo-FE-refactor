import InfoBox from "./infoBox"

function InfoTable(){
    return (
        <>
            <div className="flex justify-center m-7">
                <InfoBox title="Sobre Nosotros"/>
                <InfoBox title="Informacion Legal"/>
                <InfoBox title="Portales Asociados"/>
            </div>
        </>
    )
}

export default InfoTable
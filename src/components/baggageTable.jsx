import BaggageCard from "./baggageCard";

function BaggageTable() {

  return (
    <div>
      <div className="flex justify-center space-x-10 mt-10 mb-10">
        <BaggageCard
          title="Equipaje Personal"
          description="xxx "
          information="Pieza adicional"
        />
        <BaggageCard
          title="Equipaje de Mano"
          description="Maletas pequeñas"
          information="Pieza adicional"
        />
        <BaggageCard
          title="Equipaje de Bodega"
          description="Maletas gigantes"
          information="Pieza adicional"
        />
      </div>
    </div>
  );
}

export default BaggageTable;

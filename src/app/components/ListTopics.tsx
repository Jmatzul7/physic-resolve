
const items = [
    "Tiro Vertical",
    "Tiro Parabólico",
    "Movimiento Circular Uniforme",
    "Movimiento Circular Uniformemente Variado",
    "Caída Libre",
    "Leyes De Newton",
    "Fuerza",
    "Masa Y Peso",
    "Momento Lineal E Impulso",
    "Trabajo",
    "Energía y Potencia",
    "Energía Mecánica",
    "Energía Cinética",
    "Energía Potencial",
    "Movimiento unidireccional"
  ];

function ListTopics() {

    return (
        <ul className="bg-gray-900 p-4 rounded-lg">
        {items.map((item, index) => (
          <li key={index} className="border-b border-gray-300 py-2">
            {item}
          </li>
        ))}
      </ul>
    )
}

export default ListTopics
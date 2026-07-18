
type fichaType = {
    icon: string
    titulo: string
    text: string
}

export default function Fichas() {

    const fichas: fichaType[] = [
        { icon: "asiento", titulo: "Unidades Modernas" , text: "Con mayor espacio y comodidad"},
        { icon: "escudo", titulo: "Viaja Seguro" , text: "Con los más altos estándares de limpieza y mantenimiento"},
        { icon: "equipaje", titulo: "Mas Equipaje" , text: "Lleva todo lo que necesitas com amplios espacios"},
        { icon: "pantallas", titulo: "Tecnología Abordo" , text: "Pantallas, música y más para que disfrutes de tu viaje"},
        { icon: "cetac", titulo: "Atención 24/7" , text: "55 51 41 43 00"},
    ]

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center my-6">

        { fichas.map(ficha => (
            <div key={ficha.icon} className="w-50 h-45 rounded-2xl text-center border-2 border-gray-200">
                <img width={40} height={40} className="mx-auto my-4" src={`svg/${ ficha.icon }.svg`} alt="ventajas de viajar con omnibus de mexico" />
                <p className="font-black">{ ficha.titulo }</p>
                <p className="my-2 text-sm">{ ficha.text }</p>
            </div>
        )) }
        
    </div>
  )
}

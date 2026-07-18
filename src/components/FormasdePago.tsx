
type fichaType = {
    icon: string
    titulo: string
    text: string
    img: string
}

export default function FormasdePago() {

    const fichas: fichaType[] = [
        { icon: "tarjeta", titulo: "Meses sin Intereses" , text: "Paga a meses sin intereses con tarjetas participantes", img: ""},
        { icon: "pagos", titulo: "Pagos Diferidos" , text: "Elige pagar en 3,6 ó 9 meses con pagos diferidos", img: ""},
        { icon: "seguridad", titulo: "Pago 100% Seguro" , text: "Tus datos y pagos están protegidos en todo momento", img: ""},
    ]

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center my-6">

        { fichas.map(ficha => (
            <div key={ficha.icon} className="w-50 h-45 rounded-2xl text-center border-2 border-gray-200">
                <img width={50} height={50} className="mx-auto my-4 bg-[#c02936] rounded-full p-1" src={`svg/${ ficha.icon }.svg`} alt="ventajas de viajar con omnibus de mexico" />
                <p className="font-black">{ ficha.titulo }</p>
                <p className="my-2 text-sm">{ ficha.text }</p>
            </div>
        )) }
        
    </div>
  )
}


export default function Banner() {

    const info = [
        { texto: "Asientos amplios y cómodos" },
        { texto: "Pantalla individual" },
        { texto: "Aire acondicionado" },
        { texto: "Conexiones USB en cada asiento" },
        { texto: "Sanitariospara hombre y mujer" },
        { texto: "Personal capacitado para tu atención" },
    ]

  return (
    <div className="flex flex-col lg:flex-row bg-[#edf4fa]">
            <div>
                <h3 className="text-4xl font-bold p-2 gb-[#1f2a4f] mb-2">Viaja cómodo y seguro en nuestros autobuses de última generación</h3>

                { info.map(dato => (
                    <div className="flex ml-4 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-600">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm">{ dato.texto }</p>
                </div>
                )) }

            </div>
            <div>
                <img width={1000} height={696} src="/public/img/banner-autobus.jpg" alt="viaja a tuxpan con omnibus de mexico" />
            </div>
        </div>
  )
}

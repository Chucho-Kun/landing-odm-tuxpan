import { destinosList } from "../db/TXP"

export default function Destinos() {
// flex gap-4 justify-center items-center my-6

//flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center
  return (
    <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4">
        {destinosList.map(ficha => (
            <a href={`https://odm.com.mx/index.php?origen=TXP&destino=${ ficha.id }`} target="_blank">
                <div
                    key={ficha.id}
                    className="w-50 h-20 cursor-pointer rounded-2xl text-center border-2 bg-[#1f2a4f] p-2 flex items-center justify-center"
                    >
                    <p className="text-white ">{ficha.value}</p>
                </div>
            </a>
        ))}
    </div>

  )
}

import Banner from "./Banner"
import Destinos from "./Destinos"
import Fichas from "./Fichas"
import FormasdePago from "./FormasdePago"
import Header from "./Header"

export default function Index() {
  return (
    <main className="max-w-300 mx-auto bg-white">
        
        <Header />
        
        <div className="flex flex-col sm:flex-row text-center justify-center gap-2 my-6">
            <div>
                <p className="font-bold text-xl">Ventajas de viajar con </p>
            </div>
            <div>
                <img className="mx-auto" width={300} src="/public/svg/logo-odm-lineal.svg" alt="logo omnibus de mexico" />
            </div>
        </div>
        <div>

            <Fichas />
        
        </div>
        <div>
            <div>
                
                <Banner />
            
            </div>
        </div>
        
       <div className="text-center my-6">
            <p className="font-bold text-xl">Formas de pago que se adaptan a ti</p>
        </div>
        <div>
            
            <FormasdePago />

        </div>
        <div className="bg-[#edf4fa]">
            <div className="text-center p-2">
                <h3 className="text-xl font-bold">Desde Tuxpan te conectamos con todo México</h3>
                <h4 className="text-md">Viaja a los principales destinos de la república Mexicana</h4>
            </div>

            <Destinos />

        </div>
        <footer>
            <div>app</div>
            <div>autobus</div>
        </footer>
    </main>
  )
}

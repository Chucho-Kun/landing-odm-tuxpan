import Banner from "./Banner"
import Destinos from "./Destinos"
import Fichas from "./Fichas"
import FormasdePago from "./FormasdePago"
import Header from "./Header"

export default function Index() {
  return (
    <main className="max-w-[1700px] mx-auto bg-white">
        
        <Header />
        
        <div className="flex flex-col sm:flex-row text-center justify-center gap-2 my-6">
            <div>
                <p className="font-bold text-xl">Ventajas de viajar con </p>
            </div>
            <div>
                <img className="mx-auto" width={300} src="svg/logo-odm-lineal.svg" alt="logo omnibus de mexico" />
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
        <div className="bg-[#f5fafe]">
            <div className="text-center p-2">
                <h3 className="text-xl font-bold">Desde Tuxpan te conectamos con todo México</h3>
                <h4 className="text-md">Viaja a los principales destinos de la república Mexicana</h4>
            </div>

            <Destinos />

        </div>
        <footer className="flex flex-col lg:flex-row w-full">
            <a href="https://odm.com.mx/app.html" target="_blank">
                <img className="w-full lg:max-w-220 h-auto mx-auto" src="img/footerA.webp" alt="footer omnibus de mexico" />
            </a>
            <a href="https://odm.com.mx/" target="_blank">
                <img className="w-full lg:max-w-220 h-auto mx-auto" src="img/footerB.webp" alt="footer omnibus de mexico" />
            </a>
        </footer>
    </main>
  )
}

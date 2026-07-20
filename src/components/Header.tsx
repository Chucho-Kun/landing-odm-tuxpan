
export default function Header() {
  return (
        <div className="flex flex-col lg:flex-row">
    {/* Columna izquierda */}
    <div className="flex-2">
        <img className="mt-1 mx-auto lg:mx-0" width={300} src="svg/logo-odm.svg" alt="logotipo Omnibus de Mexico" />
        <img className="mx-auto mt-10 w-full max-w-150" src="svg/texto-header.svg" alt="tuxpan, tu proximo destino" />
        <img className="mx-auto my-10 w-full max-w-150" src="svg/amenidades.svg" alt="prueba nuestro servicio plus" />
    </div>

    {/* Columna derecha - Imagen principal */}
    <div className="flex-2 flex justify-end lg:justify-end items-start">
        <img 
            className="w-full max-w-full lg:max-w-230 mt-10 lg:mt-0" 
            src="img/main.webp" 
            alt="viaja a tuxpan con omnibus de mexico" 
            fetchPriority="high"
        />
    </div>
</div>
  )
}

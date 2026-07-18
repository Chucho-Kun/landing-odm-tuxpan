
export default function Header() {
  return (
        <div className="flex flex-col lg:flex-row">
            <div>
                <img className="mt-10 mx-auto lg:mx-0" width={200} height={79} src="/public/svg/logo-odm.svg" alt="logotipo Omnibus de Mexico" />
                <img className="mx-auto mt-10" width={510} src="/public/svg/texto-header.svg" alt="tuxpan, tu proximo destino" />
                <img className="mx-auto my-10" width={600} src="/public/svg/amenidades.svg" alt="prueba nuestro servicio plus" />
            </div>
            <div>
                <img width={1000} height={696} src="/public/img/main.jpg" alt="viaja a tuxpan con omnibus de mexico" />
            </div>
        </div>
  )
}

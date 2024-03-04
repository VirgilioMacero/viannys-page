import Message from "../components/Message";
import SegmentTitle from "../components/SegmentTitle";
import Image from "../components/Image";
import firstImage from "../assets/img/asesoria_nutricional.png";
import secondImage from "../assets/img/Talleres Educativos.png";

function AvalibleServices() {
  return (
    <>
      <div
        id="Servicios"
        className="divider"
        style={{ marginTop: "100px" }}
      ></div>
      <div className="container">
        <div className="row">
          <SegmentTitle text="ATENCIONES DISPONIBLES" />
        </div>
        <div className="row" style={{ marginTop: "100px" }}>
          <div className="col s6 service-image">
            <Image route={firstImage} useClass="responsive-img center" url="" />
          </div>
          <div className="col s6 service-image">
            <Image
              route={secondImage}
              useClass="responsive-img center"
              url=""
            />
          </div>
        </div>
        <div className="row">
          <Message
            data="
            
  si no sabes qué la atención necesitas,
contáctame y encontraremos la adecuada para ti

            "
            usedClass="col s12 center subMessage"
          />
        </div>
      </div>
    </>
  );
}

export default AvalibleServices;

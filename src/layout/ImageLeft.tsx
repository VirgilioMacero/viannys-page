import Divider from "../components/Divider";
import ViannyLookingLaptop from "../assets/img/ViannyLookingLaptop.webp";
import Button from "../components/Button";
import Modal from "../components/Modal";

export default function ImageLeft() {
  function redirect(url: string) {
    window.open(url, "_blank");
  }
  return (
    <>
      <Divider id="" mb="0px" mt="100px" />
      <div
        id="OnlineModality"
        className="grid grid-cols-2  max-[700px]:grid-cols-1 max-[700px]:mt-20"
      >
        <div className="max-[700px]:p-20 max-[700px]:row-start-2">
          <img src={ViannyLookingLaptop} loading="lazy" alt="Online Modality" />
        </div>
        <div className="grid grid-cols-1 align-middle self-center gap-6 max-[700px]:col-row-1 text-center">
          <div>
            <h1
              className="text-[50px] text-center"
              style={{ fontFamily: "Raleway" }}
            >
              MODALIDAD<br></br> ONLINE
            </h1>
            <p className="text-justify px-[77px] mt-3">
              Asesoría nutricional por videollamada, con una duración de 60
              minutos donde conversaremos sobre tus hábitos, gustos, estilo de
              vida, objetivos nutricionales, entre otros temas para poder
              conocerte bien y así crear un plan de alimentación que se adapte
              100% a tu vida.
            </p>
          </div>
          <div className="justify-center h-16 align-middle">
            <Button
              onClick={() =>
                // @ts-ignore
                document.getElementById("modal-online-modality").showModal()
              }
              name="Click aquí"
              className="focus:bg-white hover:bg-gray-700 hover:text-white"
            />
            <Modal modalName="modal-online-modality">
              <h3
                className="font-bold text-lg"
                style={{ fontFamily: "Raleway" }}
              >
                Selecciona el tipo de asesoria que necesites
              </h3>
              <div className="grid grid-cols-1 gap-4 mt-4">
                <Button
                  onClick={() => {
                    redirect(
                      "https://encuadrado.com/p/vianny-macero/s/primera-asesoria-nutricional-online/"
                    );
                  }}
                  className="focus:bg-white hover:bg-gray-700 hover:text-white rounded-lg"
                  name="Por Primera Vez"
                />
                <Button
                  onClick={() =>
                    redirect(
                      "https://encuadrado.com/p/vianny-macero/s/asesoria-de-seguimiento-nutricional-online/"
                    )
                  }
                  className="focus:bg-white hover:bg-gray-700 hover:text-white rounded-lg"
                  name="Control de Seguimiento"
                />
              </div>
              <p className="py-4 flex" style={{ fontFamily: "Raleway" }}>
                <p className=" text-red-500 font-bold">Importante:</p>
                Si han pasado más de 4 meses desde tu última sesión, selecciona
                "Por Primera Vez".
              </p>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}

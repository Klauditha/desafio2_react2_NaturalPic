import { useContext } from "react";
import { Context } from "../../Context/Context";
const Favoritos = () => {
  const { pictures } = useContext(Context);
  return (
    <div>
      <h1 className="text-green-500 text-center text-4xl p-6">
        Fotos Favoritas
      </h1>
      <div className="flex flex-wrap" id="picturesContainer">
        {pictures.filter((picture) => picture.liked == true).map((picture) => (
          <div className="p-1 bg-white-500 picture" key={picture.id}>
            <img src={picture.src.tiny} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favoritos;


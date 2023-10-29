import { useContext } from "react";
import { Context } from "../../Context/Context";

const Favoritos = () => {
  const { favoritesPictures } = useContext(Context);
  return (
    <div>
      <h1 className="text-green-500 text-center text-4xl p-2">Fotos Favoritas</h1>
      <div className="flex flex-wrap">
        {favoritesPictures.map((picture) => (
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 xl:w-1/4 p-1 bg-white-500" key={picture.id}>
            <img src={picture.src.tiny} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favoritos;


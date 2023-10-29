import { useContext } from "react";
import { Context } from "../../Context/Context";
import IconHeart from "../../IconHeart";
import "./Home.css";

const Home = () => {
  const { pictures, setFavoritesPictures, favoritesPictures } =
    useContext(Context);
  const changeFavorite = (id) => {
    pictures.filter((picture) => {
      if (picture.id === id) {
        if (picture.liked) {
          setFavoritesPictures(
            favoritesPictures.filter((picture) => picture.id !== id)
          );
        } else {
          setFavoritesPictures([...favoritesPictures, picture]);
        }
        picture.liked = !picture.liked;
      }
    });
  };
  return (
    <div>
      <h1 className="text-green-500 text-center text-4xl p-2">Natural Pic</h1>
      <div className="flex flex-wrap" id="picturesContainer">
        {pictures.map((picture) => (
          <div
            className="p-1 bg-white-500 picture"
            key={picture.id}
          >
            <div onClick={() => changeFavorite(picture.id)}>
              <IconHeart
                className="iconHeart"
                filled={picture.liked}
              />
            </div>
            <img src={picture.src.tiny} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

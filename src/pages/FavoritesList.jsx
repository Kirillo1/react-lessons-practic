import { Card } from "../components/ui/Card/Card.jsx";
import useProductsStore from "../store/useProductsStore.js";
import { Link } from "react-router-dom";

const FavoritesList = () => {
    // Достаем функцию для работы с сохраненками
    const { getFavoriteProducts, setFavorite } = useProductsStore();

    // Вызываем функцию для получения сохраненок
    const favoritesProducts = getFavoriteProducts();

    return (
        <section className="favorites min-h-72">
            <div className="max-w-7xl mx-auto px-2">
                <Link
                    to="/cards"
                    className=" text-indigo-500 hover:text-indigo-600 border-b-2 border-b-indigo-500 mb-8 inline-flex"
                >
                    Вернуться карточкам
                </Link>

                <h2 className="mb-4 text-4xl font-bold">
                    {favoritesProducts?.length
                        ? "Сохраненные ранее товары."
                        : "У вас нет сохраненных товаров."}
                </h2>

                <div className="flex flex-wrap gap-5">
                    {!!favoritesProducts &&
                        favoritesProducts.map((product) => (
                            <Card
                                key={product?.id}
                                details={product}
                                onToggleFavorite={setFavorite}
                            />
                        ))}
                </div>
            </div>
        </section>
    );
};

export default FavoritesList;

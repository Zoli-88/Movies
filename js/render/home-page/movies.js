import { listMovies } from "../../api/api.js"
import { cardComponent } from "../../components/_card.js";
import { renderError } from "../shared/error.js";
import { checkIfMobileOrDesktop } from "../../utils/utils.js";
import { activateSwiper } from "../shared/swiper.js";
import { swiperCard } from "../../components/_swiper-card.js";

async function renderMovies(searchResult) {
    const $container = document.querySelector("#container");
    const breakpointValue = 576;

    try {
        const data = await listMovies(searchResult);
        const movies = data.Search;

        function handleRenderedMoviesLayout(isDesktop) {
            if (isDesktop) {
                $container.innerHTML = "";
                $container.classList.add("grid-list");
                movies.forEach(movie => {
                    $container.innerHTML += cardComponent(movie, searchResult);
                });
            } else {
                $container.innerHTML = "";
                $container.classList.remove("grid-list");
                $container.innerHTML += swiperCard(movies, searchResult);
                activateSwiper();
            }
        }
        checkIfMobileOrDesktop(handleRenderedMoviesLayout, breakpointValue);
    } catch (error) {
        renderError(error);
    }
}

export { renderMovies };



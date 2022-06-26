import HomeScreen from "../components/home-screen.js";


const router= async () => {
    const main = document.getElementById("main-container");
    main.innerHTML = await HomeScreen.render();

};

window.addEventListener("load", router);


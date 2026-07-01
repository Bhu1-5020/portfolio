async function loadHTML(elementID , file) {
    try{

        const response = await fetch(file);
        const data = await response.text();
        document.getElementById(elementID).innerHTML = data ;

    }catch(error){
        console.error(error);
    }
}
loadHTML("navbar" , "navbar.html");
loadHTML("content" , "content.html");
loadHTML("footer" , "footer.html");

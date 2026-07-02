
async function loadHTML(elementID , file) {
    try{

        const response = await fetch(file);
        const data = await response.text();
        document.getElementById(elementID).innerHTML = data ;

    }catch(error){
        console.error(error);
    }
}

// typing effect

const text = " Hi, I am Bhuwan a Junior Full-Stack Developer" ; 
let i = 0 ; 
function type(){
    const element =  document.getElementById("type");
  if(i < text.length){
    element.innerHTML += text.charAt(i);
    i++ ;
    setTimeout(type , 300);
  }
}
setInterval(() =>{
    document.getElementById("cursor").classList.toggle("invisible");
}, 550);

async function init() {
    await loadHTML("navbar", "navbar.html");
    await loadHTML("content", "content.html");
    await loadHTML("footer", "footer.html");

    type();

}

init();
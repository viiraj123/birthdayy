const gift = document.getElementById("giftBox");

gift.addEventListener("click", () => {

gift.style.transform="rotate(20deg) scale(1.1)";

document.getElementById("surprise").style.display="block";

confetti();

});

function confetti(){

for(let i=0;i<120;i++){

let c=document.createElement("div");

c.className="confetti";

c.style.left=Math.random()*100+"vw";

c.style.animationDelay=Math.random()*2+"s";

c.style.backgroundColor=`hsl(${Math.random()*360},80%,70%)`;

document.body.appendChild(c);

setTimeout(()=>c.remove(),4000);

}

}
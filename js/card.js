const card=document.querySelector('.aboutcard');
const container=document.querySelector('.container_card');
const title=document.querySelector('.abouttitle');
const sneaker=document.querySelector('.aboutsneaker img');
const purchase=document.querySelector('.aboutpurchase button');
const description=document.querySelector('.aboutinfo h3');
const sizes=document.querySelector('.aboutsizes');
const sizebutton=document.querySelector(".aboutsizes button");
container.addEventListener("mousemove", (e) =>{
    let xAxis=(window.innerWidth/2 - e.pageX)/75;
    let yAxis=(window.innerHeight/2 - e.pageY)/75;
    card.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
container.addEventListener("mouseenter",(e)=>{
    card.style.transition='0.3s all ease';
    title.style.transform='translateZ(80px)';
    sneaker.style.transform='translateZ(70px) rotateZ(10deg)';
    description.style.transform='translateZ(60px)';
    purchase.style.transform='translateZ(50px)';
    sizes.style.transform='translateZ(60px)';
    card.style.boxShadow = '0 20px 20px rgba(72, 238, 72, 0.623) ,0px 0px 50px rgba(31, 160, 5, 0.2)';
});
container.addEventListener("mouseleave",(e)=>{
    card.style.transform=`rotateY(0deg) rotateX(0deg)`;
    card.style.transition='0.5s all ease';
    sneaker.style.transform='translateZ(0px) rotateZ(0deg)';
    title.style.transform='translateZ(0)';
    purchase.style.transform='translateZ(0px)';
    description.style.transform='translateZ(0px)';
    sizes.style.transform='translateZ(0px)';
    card.style.boxShadow = '0 20px 20px rgba(0,0,0,0.2) ,0px 0px 50px rgba(0,0,0,0.2)';
});

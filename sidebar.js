let sidebar = document.querySelector(".bg");
let i = 1;
setInterval(()=>{
    if(i==1){i=2}else{i=1};
    sidebar.style.background = `linear-gradient(rgba(0, 0, 0, 0.20), rgba(15, 10, 10, 0.20)), url("res/slide${i}.jpg")`;
}, 3000);

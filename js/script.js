document.addEventListener("DOMContentLoaded", () =>{
    let btnRandom = document.getElementById("btnRandom");
    const coin = document.getElementById("coin");
    let coinImg=document.getElementById("coinImg");
    let coinText = document.getElementById("coinText");

        btnRandom.addEventListener('click', ()=>{
            coin.classList.add("animate");
            setTimeout(()=>{
                let value=Math.random()<0.5;
                coinImg.src = value ? "resources/heads.svg" : "resources/tails.svg";
                coinText.innerText=value ? "Heads" : "Tails" 
                coin.classList.remove("animate");
            }, 600); 
        });

        coin.addEventListener('click', ()=>{
            coin.classList.add("animate");
            setTimeout(()=>{
                let value=Math.random()<0.5;
                coinImg.src = value ? "resources/heads.svg" : "resources/tails.svg";
                coinText.innerText=value ? "Heads" : "Tails" 
                coin.classList.remove("animate");
            }, 600);  
        });
        
    
    
});
    

    

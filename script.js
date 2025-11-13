if (document.getElementById("addPlayer")) {
    document.getElementById("addPlayer").addEventListener("click", ()=>{
        document.querySelector(".modal").style.display = "flex"
        document.querySelector(".modal").classList.add("centered-modal")
    })
    
    document.getElementById("close").addEventListener("click", ()=>{
        document.querySelector(".modal").style.display = "none"
        document.querySelector(".modal").classList.remove("centered-modal")
    })
}

let editButton = document.querySelectorAll(".editButton");
if(editButton){
    editButton.forEach(btn =>{
        btn.addEventListener("click", ()=>{
            document.querySelector(".modal").style.display = "flex"
            document.querySelector(".modal").classList.add("centered-modal")
        })
    })
    document.getElementById("close").addEventListener("click", ()=>{
        document.querySelector(".modal").style.display = "none"
        document.querySelector(".modal").classList.remove("centered-modal")
    })
}
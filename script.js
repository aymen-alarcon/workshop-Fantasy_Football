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

function displayPlayers(player) {
    return `
        <div class="${player.position}">
            <div class="player-card d-flex justify-content-between">
                <div class="name w-50">${player.name}</div>
                <div class="price">${player.price}</div>
                <div class="price">${player.team}</div>
                <i class="bi bi-plus"></i>
            </div>
        </div>
    `
}

async function loadPlayers(file) {
    let response = await fetch(file);
    let players = await response.json();
    players.forEach(player => {
       document.querySelector(".players").innerHTML += displayPlayers(player)
    });
}

loadPlayers("data.json")
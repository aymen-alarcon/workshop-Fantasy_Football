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

let playersAdded = []

function displayPlayers(player) {
    return `
        <div class="${player.position}">
            <div id="${player.id}" class="player-card d-flex justify-content-between">
                <div class="name${player.id} w-50">${player.name}</div>
                <div class="price${player.id}">${player.price}</div>
                <div class="team${player.id}">${player.team}</div>
                <i class="bi bi-plus"></i>
            </div>
        </div>
    `
}

function addPlayer(player) {
    if (!document.querySelectorAll('.bi-plus')) return
    document.querySelectorAll('.bi-plus').forEach(btn =>{
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            let chosenPlayer = {
                nom: document.querySelector(`.name${player.id}`).textContent,
                price: document.querySelector(`.price${player.id}`).textContent,
                team: document.querySelector(`.team${player.id}`).textContent,
            };
            console.log(chosenPlayer);
            playersAdded.push(chosenPlayer);
            localStorage.setItem('player', JSON.stringify(playersAdded));
        });
    })  
}

                                // <div class="card-body text-center">
                                //     <img src="assets/img/vinijr.webp" class="w-25 h-100 rounded-circle" alt="">
                                // </div>
                                // <div class="card-text text-center">
                                //     <i class="bi bi-x float-end"></i>
                                //     <div class="player-name">Thibaut Courtois</div>
                                //     <div class="team">Real Madrid</div>
                                //     <div class="price">$6m</div>
                                // </div>


async function loadPlayers(file) {
    let response = await fetch(file);
    let players = await response.json();
    players.forEach(player => {
       document.querySelector(".players").innerHTML += displayPlayers(player);
       addPlayer(player)
    });
}

loadPlayers("data.json")

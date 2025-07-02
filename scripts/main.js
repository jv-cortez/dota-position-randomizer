let positionList = [1,2,3,4,5];
let playerList = [];
let playerCounter = 0;

const randomizeArray = (array) => {
	for (let i = array.length - 1; i >= 0; i--) {
		const j = Math.floor(Math.random() * i + 1);
		[array[i], array[j]] = [array[j], array[i]];
	}
}

const returnPosition = (playerList) => {
	randomizeArray(positionList);
	const totalPlayers = playerList.length;
	for(let i = 0; i < totalPlayers; i++) {
		let positionElement = document.querySelector(`[data-id = "${i}"]`);
		positionElement.innerHTML = positionNames[positionList[i]];
	}
}

const randomizerBtn = document.getElementById("randomize");
// clicking randomize checks input for name
randomizerBtn.addEventListener("click", () => {
	checkNameInput(playerList);
});

const checkNameInput = (playerList) => {
	if (playerList){
		alert("Please write a name lol");
	} else {
		returnPosition(playerList);
	}
}

const countPlayerTotal = (playerDetails) => {
	if (playerCounter > 4){
		alert("5 stack already!");	
	} else {
		playerDetails.id = playerCounter++;
		playerList.push(playerDetails);
		renderPlayer(playerDetails);
	}
}

const createPlayer = () => {
	const playerDetails = {
		id : 0,
		position : 0
	};
	countPlayerTotal(playerDetails);
}

const renderPlayer = (playerDetails) => {
	const playerListContainer = document.querySelector("#playerListContainer");
	const player = document.createElement("div");
	player.setAttribute("class", "player");
	const playerId = playerDetails.id;
	const showPlayerCount = playerId + 1;
	const positionId = playerDetails.position;
	const playerPosition = positionNames[positionId];

	player.innerHTML = `
			<div class="name">
			<label for = "playerName">${showPlayerCount} Player: </label>
			<input type = "text" 
						 class = "playerName" 
						 name = "playerName"
						 placeholder = "Enter Name"
						 required >
			</div> 
			<div class = "position" data-id = ${playerId}>${playerPosition}</div>
	`;
	
	playerListContainer.append(player);
}

const addPlayer = document.getElementById("addPlayer");
addPlayer.addEventListener("click", createPlayer);

const removePlayers = () => {
	// remove playerList
	const playerListContainer = document.querySelector("#playerListContainer");
	playerListContainer.remove();
	playerCounter = 0;
	playerList = [];
	// recreate playerList
	const newPlayerListContainer = document.createElement("div");
	newPlayerListContainer.setAttribute("id", "playerListContainer");
	// add playerList after buttons div
	const referenceElement = document.getElementById("buttonsContainer");
	referenceElement.after(newPlayerListContainer);
}

const deletePlayer = document.getElementById("deletePlayerList");
deletePlayer.addEventListener("click", removePlayers);

const $start = document.getElementById('start');
const $intro = document.getElementById('intro');
const $instructions = document.getElementById('instructions');
const $board = document.getElementById('board');
const $player = document.getElementById('player');
// const treasure = '🚎';
const truck = '🚚'






/* GAME VARIABLES */
let $reward;


//get random position for obstacles
function getRandomPos(maxx, maxy) {
	let left = Math.random()*maxx
	let top = Math.random()*maxy
	return { left, top }
}


function setupBoard() {
	// Get positions and sizes
	let playerBox = $player.getBoundingClientRect();
	let boardBox = $board.getBoundingClientRect();
	let bodyBox = document.body.getBoundingClientRect();
	let min = Math.min(bodyBox.width, bodyBox.height);	
	let maxx = boardBox.width - playerBox.width;
	let maxy = boardBox.height - playerBox.height;
	let items = [];
	
	//Create Obstacles
		
	$reward = document.createElement('div');
	$reward.innerHTML = truck;
	$reward.id = 'item';
	
	var rewardPos = getRandomPos(maxx, maxy);
	$reward.style.left = rewardPos.left/min*100 + 'vmin';
	$reward.style.top = rewardPos.top/min*100 + 'vmin';
	$board.appendChild($reward);
	items.push($reward.getBoundingClientRect())

}




//is called when the start button is clicked
function init() {
	$intro.classList.add('hide');
	$board.classList.remove('hide');
	$instructions.classList.add('hide')

	
	setupBoard();
}

//how the player moves
window.addEventListener('mousemove', e => {
  $player.style.left = 1255 + 'px';
  $player.style.top = e.pageY + 'px';
  
  if($player.style.top >= "750px"){
  	$player.style.top =  750+ 'px';
  }
  
});

//how the obstacles move
function moveChar()
{
	// let x = parseFloat(rewardStyle.left)
	
	
	// x = Math.min(Math.max(x, 0), maxx );
	var x = $reward.style.left + 'px';
	
	while($reward.style.left < 0)
	{
	x += '10px';
	}
	
	return {x}
}



function update() {
	
	moveChar();

}


//start game
$start.addEventListener('click', init);

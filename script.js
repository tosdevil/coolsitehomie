const dragElements = document.querySelectorAll('.draggable')
const dropElements = document.querySelectorAll('.droppable')

dragElements.forEach(elem => {
	elem.addEventListener('dragstart',dragStart);
	// elem.addEventListener('drag',drag);
	// elem.addEventListener('dragend',dragEnd);
})

dropElements.forEach(elem => {
	elem.addEventListener('dragenter',dragEnter);
	elem.addEventListener('dragover',dragOver);
	elem.addEventListener('dragleave',dragLeave);
	elem.addEventListener('drop',drop);
});

function dragStart(event) {
	console.log('dragging...');
	event.dataTransfer.setData('id', event.target.id);
	event.dataTransfer.setData('imgsrc', event.target.src);
}

function dragOver(event) {
	event.preventDefault();
}

function drop(event) {
	event.preventDefault();
	dragLeave(event);
	const dragElementData = event.dataTransfer.getData('id');
	const dragImgElemData = event.dataTransfer.getData('imgsrc')
	const dropElementData = event.target.getAttribute('data-draggable-id');
	if (dragElementData == dropElementData) {
		CountGame();
		event.target.classList.add('dropped');
		const dragElement = document.getElementById(dragElementData);
		event.target.style.background = dragElement.style.background;
		dragElement.classList.add('dragged');
		dragElement.setAttribute('draggable', 'false');
		event.target.insertAdjacentHTML('afterbegin', `<img src = '${dragImgElemData}'>`)

	}

}

function dragEnter(event) {
	event.target.classList.add('droppable_hover')
}

function dragLeave(event) {
	event.target.classList.remove('droppable_hover')
}

const countergame = document.getElementById('counterr');
let counterrrr = 0;

function CountGame() {
	counterrrr += 1;
	countergame.innerHTML = ``;
	if (counterrrr > 0) {
		
		countergame.innerHTML = `${counterrrr}/4`;
	}
	if (counterrrr == 3) {
		countergame.innerHTML = `${counterrrr}/4. Almost there...`;
	}
	if (counterrrr == 4) {
		countergame.innerHTML = `Nice job!`;
	}
}
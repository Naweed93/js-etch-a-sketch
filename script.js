const container = document.createElement('div');
const body = document.querySelector('body');
const clear = document.querySelector('.clear');
const set = document.querySelector('.set');
const rowInput = document.querySelector('.row-input');
const columnInput = document.querySelector('.column-input');

body.appendChild(container);
container.classList.add('container');
function createGrid(rowNumber, columnNumber){
    for(let i = 0 ; i<rowNumber ; i++){
        let row = document.createElement('div');
        row.classList.add('row', `row-${i}`);
        container.appendChild(row);
        for(let j = 0; j<columnNumber; j++){
            let column = document.createElement('div');
            column.classList.add('column',`column-${j}`);
            row.appendChild(column);
            if (rowNumber !==16){
                
                column.style.width=960/rowNumber + 'px';
                column.style.height=960/rowNumber + 'px';
            }
        }
    }
}
createGrid(16,16);

clear.addEventListener('click',(e) => {
    container.innerHTML=""
});
set.addEventListener('click', (e) =>{
    if ( Number(rowInput.value) && Number(columnInput.value) ){
        container.innerHTML=""
        createGrid(Number(columnInput.value), Number(rowInput.value))
    }
});
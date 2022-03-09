const container = document.createElement('div');
const body = document.querySelector('body');


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
            row.appendChild(column)
        }
    }
}
createGrid(16,16);
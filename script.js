const grid = document.querySelector('.grid')
let square = document.querySelector('div')

function makeGrid (rows,cols) {
    
    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div')                                                
        cell.classList.add('cell')
        grid.appendChild(cell)
        cell.addEventListener('mouseover', (e) => {
            cell.style.backgroundColor = 'black';
        })
    }
    grid.style.gridTemplateColumns = `repeat(${cols}, auto)`
    grid.style.gridTemplateRows = `repeat(${rows}, auto)`
    

}
makeGrid(16,16)

const cellList = document.querySelectorAll('div')



const shadeButton = document.querySelector('#shade')

const resetButton = document.querySelector('#reset')
resetButton.addEventListener('click', (e) => {
    let newRows = prompt('How many rows would you like? Choose a number less than 100.')
    let newCols = prompt('How many columns would you like? Choose a number less than 100.')

    if (newRows > 0 && newRows < 101 && newCols > 0 && newCols < 101) {

        while (grid.firstChild) {
            grid.removeChild(grid.firstChild);
        }
         makeGrid(newRows,newCols)
    } else {
        alert('Invalid - choose a number between 1 and 100')
    }
})

const rainbowButton = document.querySelector('#rainbow')                                                                                                                                                            
rainbowButton.addEventListener('click', (e) => {
    cellList.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
        })
    })
})
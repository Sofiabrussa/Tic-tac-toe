import './App.css'

const Turns =  {  /* Constantes del juego */
  X: "x",
  O: "o"
}

const board = Array(9).fill(null) /*Creamos el tablero vacio que luego se llena con x o */
const Square = ({children, updateBoard, index}) =>  {  /*children es contenido que desees incluir dentro del componente Square, updateBoard es una función y index es el índice del cuadro en el arreglo.*/
  return (
    <div className='square'>  {/*El atributo key se establece en el índice del elemento en el arreglo, lo cual es importante cuando se renderizan listas en React para ayudar a React a identificar de manera única cada elemento.*/}
       {children}
    </div>
  )
}


function App() {
  return  (
    <main className="board">
      <h1> Tic-Tac-Toe</h1>
      <section className='game'>
        {
        board.map((_, index) =>  { /*para cada elemento en el arreglo board, se ejecutará la función proporcionada como argumento*/
          return (
            <Square key={index} index={index}> {/*Por cada elemento, se crea una instancia del componente Square */}
               {index}  {/*El contenido entre las etiquetas <Square> es el valor del índice, que se pasa como children al componente Square*/}
            </Square>
          )
        })}
      </section>
    </main>
  )
}

export default App

//rfce para sacar atajos
import { useEffect, useState } from "react"
import Character from "./Character";

function NavPage(props){
    return(
        <div className="d-flex justify-content-between aling-items-center">
            <p>Page: {props.page}</p>
            <button onClick={()=> props.setPage(props.page + 1) }>
                Page {props.page + 1}
            </button>
        </div>
    )
}

function CharacterList() {

    const [characters, setCharacters] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        async function fetchData() {//fetchData trae informacion de la api
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
            const data = await response.json();//almacena info de la api
            setCharacters(data.results);
        }

        fetchData()
    }, [page]) //ayuda a llamar la appi.

    return (
        <div>
            <NavPage page={page} setPage={setPage}/>
        <div className="row">
            {characters.map((character) => {
                return (
                    <div className="col-md-4" key={character.id} > 
                        <Character character={character} />
                    </div>
                    
                );
            })}
        </div>
        <NavPage page={page} setPage={setPage}/>
        </div>
    )
}

export default CharacterList
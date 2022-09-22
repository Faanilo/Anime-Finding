import AnimeCard from "./AnimeCard";
function Contenu(props) {
  return (
    <main>
      <div className="main-head">
        <form className="search-box" onSubmit={props.ssearch}>
          <input type="search" placeholder="search for an anime" required value={props.search} onChange={e => props.SetSearch(e.target.value)}/>
        </form>
      </div>
      <div className="anime-list">
      
      {props.animeList.map(anime=>(
        <div className='anime-card'>
          <AnimeCard anime ={anime} 
          key={anime.mal_id}/>
        </div>
      ))}
       
      </div>
    </main>
  );
}

export default Contenu;

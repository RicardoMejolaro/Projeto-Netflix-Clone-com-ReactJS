import React from 'react';
import './FeaturedMovie.css';

export default ({item}) => {
  /*Pegando apenas o ano de lançamento da atração */
  let firstDate = new Date(item.first_air_date);
  /*Pegando generos da atração */
  let genres = [];
  for (const genre in item.genres) {
    genres.push(item.genres[genre].name)
  }


  return (
    <section 
      className="featured" 
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
      }}
    >
      <div className="featured-vertical">
        <div className="fatured-horizontal">
          <div className="featured-name">{item.original_name}</div>
          <div className="featured-info">
            <div className="featured-points">{item.vote_average} pontos</div>
            <div className="featured-year">{firstDate.getFullYear()}</div>
            <div className="featured-seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
            <div className="featured-description">{item.overview}</div>

            <div className="featured-buttons">
              <a className="featured-watch-button" href={`/watch/${item.id}`}>► Assitir</a>
              <a className="featured-mylist-button" href={`/list/add/${item.id}`}>+ Minha Lista</a>
            </div>
            <div className="featured-genres">Gêneros: {genres.join(', ')}.</div>
          </div>
        </div>
      </div>
    </section>

  );
}
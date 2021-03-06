import React from 'react';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import './styles.css';

export default ({item}) => {
  /*Pegando apenas o ano de lançamento da atração */
  let firstDate = new Date(item.first_air_date);
  
  /*Limitando caracteres da descrição */
  let description = item.overview;
  if(description.length > 300) {
    description = description.substr(0, 300)+'...';
  }

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
            <div className="featured-description">{description}</div>

            <div className="featured-buttons">
              <a className="featured-watch-button" href={`/watch/${item.id}`}><PlayArrowIcon style={{marginRight: 5}} />Assistir</a>
              <a className="featured-mylist-button" href={`/list/add/${item.id}`}><InfoOutlinedIcon style={{marginRight: 10}} />Mais informações</a>
            </div>
            <div className="featured-genres">Gêneros: {genres.join(', ')}.</div>
          </div>
        </div>
      </div>
    </section>

  );
}
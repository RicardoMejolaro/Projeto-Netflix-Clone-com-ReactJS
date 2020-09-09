import React, {useEffect, useState} from 'react';
import Api from './Api';

import './App.css';

import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      /*Pegando todos os filmes */
      let listMovies = await Api.getHomeList();
      setMovieList(listMovies);

      /*Pegando o Featured*/
      let originals = listMovies.filter(original => original.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Api.getMovieInfo(chosen.id, 'tv')

      setFeaturedData(chosenInfo);
    }
    loadAll();
  }, []);

  return (
    <div className="page">
      {featuredData && 
        <FeaturedMovie item={featuredData}/>
      }

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div>
  );
}
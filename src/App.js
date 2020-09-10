import React, {useEffect, useState} from 'react';

import Api from './Api';

import './App.css';

import loading from '../src/assets/loading.gif';

import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false)

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

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, [])

  return (
    <div className="page">

      <Header black={blackHeader}/>

      {featuredData && 
        <FeaturedMovie item={featuredData}/>
      }

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>

      <footer>
        <p>Feito com <span role="img" aria-label="coração"> ♥ </span>por Ricardo Mejolaro.</p> 
        <p>Direitos de imagens para a <span>&copy;</span> Netflix e demais envolvidos.</p> 
        <p>Utilizada a API do site themoviedb.org</p>
      </footer>

      {movieList <= 0 &&
        <div className="loading">
          <img src={loading} alt="Carregando"/>
        </div>
      }
    </div>
  );
}
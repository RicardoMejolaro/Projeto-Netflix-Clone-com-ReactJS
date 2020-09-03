const API_KEY = 'a14cf7c9d8aad147deac2d5e30bda066';
const BASE_API = 'https://api.themoviedb.org/3';

/*
- Originais Netlix
- Recomendados (trending)
- Em alta (top rated)
- Filmes ação
- Filmes comédia
- Filmes terror
- Filmes romance
- Filmes documentários
*/

const basicFetch = async (endpoint) => {
  const req = await fetch(`${BASE_API}${endpoint}`)
  const json = await req.json();
  return json;
}

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais Netflix',
        items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
      }
      {
        slug: 'trending',
        title: 'Recomendados para Você',
        items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
      }
      {
        slug: 'toprated',
        title: 'Em Alta',
        items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
      }
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch(`discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
      }
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFetch(`discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
      }
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch(`discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
      }
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch(`discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
      }
      {
        slug: 'documentary',
        title: 'Documentários',
        items: await basicFetch(`discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
      }
    ];
  } 
}
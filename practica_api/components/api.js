export const getCharacters = async (name, status) => {
    let url = 'https://rickandmortyapi.com/api/character/';
    
    if (name || status) {
      url += '?';
      if (name) {
        url += `name=${name}&`;
      }
      if (status) {
        url += `status=${status}`;
      }
    }
  
    const response = await fetch(url);
    const data = await response.json();
  
    return data.results;
  };
  
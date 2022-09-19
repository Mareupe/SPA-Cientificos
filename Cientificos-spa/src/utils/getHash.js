//TODO manejo del id de los personajes

const getHash = () => 
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';

 export default getHash;
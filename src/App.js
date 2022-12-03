import './App.css';

//5- Request data with useQuery
import { useQuery, gql } from '@apollo/client';

const GetCharacters = gql`
query GetCharactersByNameAndId{
  characters {
    results {
      id
      name
    }
  }
}
`;

function DisplayCharacters() {
  const { loading, error, data } = useQuery(GetCharacters);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.characters.results.map(character => {
    return (<div key={character.id}>
      <p>{character.name}</p>
    </div>)
  })


}

export default function App() {
  return (
    <div>
    <DisplayCharacters/>
      <h2>My first Apollo app 🚀</h2>
    </div>
  );
}

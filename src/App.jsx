import './App.css';
import data from './shared/data/products.json'
import { animals } from './shared/data/animals';
import Card from './shared/components/card/index'
import AnimalCard from './shared/components/animal-card';
import FileNamer from './shared/components/filenamer';

const App = () => {

  const showAdditional = (additional) => {
    const alertInformation = Object.entries(additional)
      .map((infomation) => `${infomation[0]}: ${infomation[1]}`)
      .join('\n');
      alert(alertInformation)
  } 
  return (
    <div className="container">
      {/* <div className="title">
        <h1>List of Products</h1>
      </div>
      <div>
        {data.products.map((product, index) => (
          <Card key={`product-${index}`} data={product} />
        ))}
      </div>
      <div className="wrapper">
        <h1>Animals</h1>
        {animals.map((animal) => (
          <AnimalCard 
            key={animal.name} 
            name={animal.name}
            scientificName={animal.scientificName}
            size={animal.size}
            diet={animal.diet}
            additional={animal.additional}
            showAdditional={showAdditional}
          />
        ))}
      </div> */}
      <FileNamer />
    </div>
  );
}

export default App;

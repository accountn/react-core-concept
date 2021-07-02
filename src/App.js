import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const village = ['modhugram','bolpur','nawdaga','bahadurput','hashimpur','kashimpur'];
  const products = [
    {name:'spuse', price:'$90'},
    {name: 'color', price:'400'},
    {name: 'fruts', price: '300'},
    {name: 'bananana', price: '40'}
  ];
  const fruts = [
    {name: 'orange', country : 'india', price : '300'},
    {name: 'orange', country : 'india', price : '300'},
    {name: 'orange', country : 'india', price : '300'},
    {name: 'orange', country : 'india', price : '300'},
    {name: 'orange', country : 'india', price : '300'}
  ]
  // const villageName = village.map(vname => vname);
  // console.log(villageName);
  return (
    <div className="App">
      <header className="App-header">
        <Count></Count>
        <Users></Users>
        <ul>
          {
            village.map(vname => <li>{vname}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }
        {
          fruts.map(fp => <Frutsall fcc={fp}></Frutsall>)
        }
      </header>
    </div>
  );
}
function Product(props){
  
  const productStyle = {
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width:'200px',
    marginBottom:'50px',
    float:'left'
  }
  const {name, price} = props.product;
  
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h1>{price}</h1>
      <button>Buy now</button>
    </div>
  )
}

function Users(){
  const [name, setName] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setName(data));
  }, [])
  return(
    <div>
      <h1>Dynamic users: {name.length}</h1>
      <ul>
        {
          name.map(info => <li>{info.email}</li>)
        }
      </ul>
    </div>
  )
}

function Count(){
  const [count, setCount] = useState(4);
  // const handleIncrease = () => setCount(count + 1);
  
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
      <button onClick={ () => setCount(count + 1)}>increase</button>
    </div>
  )
}

function Frutsall(props){
  const frutsStyle = {
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width:'200px',
    marginBottom:'50px',
    float:'left'
  }
  const {name,country,price} = props.fcc;
  return (
    <div style={frutsStyle}>
      <h1>{name}</h1>
      <h4>{country}</h4>
      <p>{price}</p>
    </div>
  )
}
export default App;

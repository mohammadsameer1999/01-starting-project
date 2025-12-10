import reactImg from './assets/react-core-concepts.png'
function Header() {
  return ( <header>
    <img src="src/assets/image.png" alt="Stylized atom"/>
    <h1>This is my header</h1>
  <p>
    this my paragraph image code for all code
  </p>
  </header>
  );
}

function AddNumber() {
const a = 20;
const b = 40;
const sum = a + b;
  console.log("sum is here ----?", sum);

  return (
   <>
    sum is : {sum>80 ? "number bada hai" :"number chota hai" }
    
   </> 
    

  );
}

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function App() {
  const description = reactDescriptions[genRandomInt(2)]
  return (
    <div>
      <Header/>
      <AddNumber/>
      <header/>
      <header/>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;

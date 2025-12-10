import reactImg from './assets/react-core-concepts.png'
import componentImg from './assets/components.png'
import { CORE_CONCEPTS } from './data.js';
function Header() {
  return (<header>
    <img src={reactImg} alt="Stylized atom" />
    <h1>This is my header</h1>
    <p>
      this my paragraph image code for all code
    </p>
  </header>
  );
}

function CoreConcept(props) {
  return <li>
    <img src={props.img} alt={props.title} />
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </li>
}

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function App() {
  const description = reactDescriptions[genRandomInt(2)]
  return (
    <div>
      <Header />
      <Header />
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            img={CORE_CONCEPTS[0].image}
          />

          <CoreConcept
            title={CORE_CONCEPTS[1].title}
            description={CORE_CONCEPTS[1].description}
            img={CORE_CONCEPTS[1].image}
          />

          <CoreConcept
            title={CORE_CONCEPTS[2].title}
            description={CORE_CONCEPTS[2].description}
            img={CORE_CONCEPTS[2].image}
          />

          <CoreConcept
            title={CORE_CONCEPTS[3].title}
            description={CORE_CONCEPTS[3].description}
            img={CORE_CONCEPTS[3].image}
          />

          <CoreConcept
          title={CORE_CONCEPTS[4].title}
            description={CORE_CONCEPTS[4].description}
            img={CORE_CONCEPTS[4].image}
          //  {...CORE_CONCEPTS[4]} 
           />

        </ul>
      </section>

      <header />
      <header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;

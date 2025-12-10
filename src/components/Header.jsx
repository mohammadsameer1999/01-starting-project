
import reactImg from '../assets/react-core-concepts.png'



function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
    const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

  return (<header>
    <img src={reactImg} alt="Stylized atom" />
    <h1>This is my header</h1>
    <p>
      this my paragraph image code for all code
    </p>
  </header>
  );
}

export default Header;

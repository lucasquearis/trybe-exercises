import './App.css';
import Image from './components/Image';

const image = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg';
function App() {
  return (
    <Image
    source={image}
    alternativeText={'Cute cat staring'}
    />
  );
}

export default App;

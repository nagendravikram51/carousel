import logo from './logo.svg';
import './App.css';
import Carousel from './components';

const items = [{
  url: "https://www.datocms-assets.com/45470/1631110818-logo-react-js.png?fm=webp"
},
{
  url: 'https://reactjs.org/logo-og.png'
},
{
  url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDcPuqnigejRsHaePtBj8m9ZOYSMZ0vbSrO8fIaEnj1D18_5h5HwXmbYF3GU1PKaWbijA&usqp=CAU'
}
]

function App() {
  return <Carousel items={items}/>
}

export default App;

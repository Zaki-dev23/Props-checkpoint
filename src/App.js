
import image from "./assets/rectangle1.jpeg"
import './App.css';
import './components/Profile.css';
import  Profile  from './components/Profile';


const App = ()=>{
  return (
    <div className="clapyResets root">
      <Profile fullname="zakaria laasri" bio="James Maitland Stewart (May 20, 1908 – July 2, 1997) was an American actor and military pilot. Known for his distinctive drawl and everyman screen persona, Stewart's film career spanned 80 films from 1935 to 1991. With the strong morality he portrayed both on and off the screen, he epitomized the 'American ideal' in the twentieth century. In 1999, the American Film Institute (AFI) ranked him third on its list of the greatest American male actors." profession="webdev"> <img src={image} className="Image" alt='zakaria laasri'/> </Profile>
    </div>
  );
};
export default App

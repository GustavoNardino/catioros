import {useDogs} from './Providers/useDogs'
import {useState} from 'react'

function App() {
   const  [dogs, setDogs] :any = useDogs();
   console.log('IN APP',dogs)
  // const [dogs, setdogs] = useState(useDogs())
  // console.log('DOGS NO APP',dogs[0])

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <img style={{width: '50%'}} src={dogs.url} alt="" />
    </div>
  );
}

export default App;

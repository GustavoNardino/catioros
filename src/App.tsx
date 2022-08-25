import {useDogs} from './Providers/useDogs'

function App() {
   const  [dogs] :any = useDogs();
   console.log('IN APP',{dogs})
  // const [dogs, setdogs] = useState(useDogs())
  // console.log('DOGS NO APP',dogs[0])

  return (
    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
      <h3 style={{color: 'black'}}>CATIORO: </h3>
      <img style={{width: '50%'}} src={dogs.url} alt="" />
    </div>
  );
}

export default App;
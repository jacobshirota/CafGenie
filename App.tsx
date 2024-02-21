import React,{useState, useEffect} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoadedView from './src/loadedView';
import LoadingView from './src/loadingView';

//const cafeID = 17;

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const api = 'https://legacy.cafebonappetit.com/api/2/menus?cafe=17';

  useEffect(() => {
    fetch(api)
      .then((resp) => resp.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);


  return (
    <SafeAreaProvider>
      {loading?
        <LoadingView />
        :
        <LoadedView days={data.days} items={data.items} />
      }
    </SafeAreaProvider>
  );
}

export default App;

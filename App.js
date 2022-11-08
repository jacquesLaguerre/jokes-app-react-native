import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {View} from 'react-native'
import styles from "./styles.js";
//import Joke, Punchline, and Another component
import Joke from "./components/Joke.jsx";
import Punchline from "./components/Punchline.jsx";
import Another from "./components/Another.jsx";
export default function App() {
  // Create state to hold jokes
  const [jokeList, setJokeList] = useState();
  //Create state to hold last joke index
  const [currentJokeIndex, setCurrentJokeIndex] = useState(0);
  //Create function to get another
  const getNextJoke = () => {
    if (currentJokeIndex < jokeList.length - 1) {
      setCurrentJokeIndex(currentJokeIndex + 1);
    } else {
      setCurrentJokeIndex(0);
    }
  };
  //useEffect to get all jokes
  useEffect(() => {
    fetch("https://api.sampleapis.com/jokes/goodJokes")
      .then((result) => result.json())
      .then(setJokeList)
      .catch(alert);
  }, []);
  console.log(jokeList)
  return (
    <View style={styles.container}>
      {jokeList
      ?<>
      <Joke joke={jokeList[currentJokeIndex].setup} />
      <Punchline punchline={jokeList[currentJokeIndex].punchline} />
      </>
      :null 

      }
      <Another getNextJoke={getNextJoke} />
     
      <StatusBar style="auto" />
    </View>
  );
}


import React, { useState } from 'react'
import { Text, View, Button } from 'react-native'
import Cat from './Cat'

const Cafe = () => {
  const [hungryNum, setHungryNum] = useState(3);
  const [fullNum, setFullNum] = useState(0); 

  const incFullHandler = () => {
    setFullNum(fullNum+1)
    setHungryNum(hungryNum-1)
  }

  const resetStatsHandler = () => {
    setFullNum(fullNum-1)
    setHungryNum(hungryNum+1)
  }

  return(
    <View>
      <Text>Welcome!</Text>
      <Cat name="Maru" owner="John" onIncFull={incFullHandler} resetStats={resetStatsHandler} />
      <Cat name="Foo" owner="Jane" onIncFull={incFullHandler} resetStats={resetStatsHandler} />
      <Cat name="Jelly" owner="Joe" onIncFull={incFullHandler} resetStats={resetStatsHandler} />
      <Text>Hungry: {hungryNum}, Full: {fullNum}</Text>
    </View>
  )
}

export default Cafe
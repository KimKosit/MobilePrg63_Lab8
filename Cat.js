import React, { useState } from 'react'
import { Text, View, Button } from 'react-native'

const Cat = (props) => {
    const [isHungry, setIsHungry] = useState(true)
    return(
      <View>
          <Text>Hello, I am {props.name}</Text>
          <Text>My owner is {props.owner}</Text>
          <Text>I am {isHungry ? "Hungry" : "Full"}!</Text>
          <Button onPress={() => {setIsHungry(false), props.onIncFull()}} disabled={!isHungry} title={isHungry ? "Feed me please?" : "Thanks!"} />
          <Button onPress={() => {setIsHungry(true), props.resetStats()}} disabled={isHungry} title="Reset stats" />
      </View>
    )
  }
export default Cat
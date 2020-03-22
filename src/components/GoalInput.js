import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const addGoalHandler = () => {
    props.onAddGoalHandler(enteredGoal);
    setEnteredGoal("");
  };

  const goalInputHandler = goal => {
    setEnteredGoal(goal);
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Goal"
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style ={styles.ButtonContainer}>
        <View style={styles.Button}>
        <Button title="ADD" onPress={addGoalHandler} />
        </View>
        <View style={styles.Button}>
        <Button title="CANCEL" color="red" onPress={props.onCancel} />
        </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
    marginBottom: 10
  },
  ButtonContainer:{
      flexDirection:"row",
      justifyContent:'space-between',
      width:"60%"
  },
  Button:
  {
      width:'40%'
  }
});

export default GoalInput;

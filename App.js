import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalItem from "./src/components/GoalItem";
import GoalInput from "./src/components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTilte => {
    setCourseGoals(courseGoals => [
      ...courseGoals,
      { id: Math.random().toString(), value: goalTilte }
    ]);
    setIsAddMode(false);
  };
  const removeGoal = goalId => {
    setCourseGoals(currentGoal => {
      return currentGoal.filter(goal => goal.id !== goalId);
    });
  };
  const cancelGoalAdditional = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)}></Button>
      <GoalInput
        visible={isAddMode}
        onAddGoalHandler={addGoalHandler}
        onCancel={cancelGoalAdditional}
      />
      <FlatList
        keyExtractor={item => item.id}
        data={courseGoals}
        renderItem={itemdata => (
          <GoalItem
            id={itemdata.item.id}
            onDelete={removeGoal}
            title={itemdata.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});

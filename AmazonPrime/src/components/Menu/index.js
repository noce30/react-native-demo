import React from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import SubItem from "./SubItem";

export class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick() {
    Alert.alert(
      "Notification",
      "You clicked Home menu",
      [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Please login</Text>
        </View>
        <View style={styles.body}>
          <SubItem iconName="home" text="Home" onPress={this.onClick} />
          <SubItem iconName="bell-o" text="Notification" />
          <SubItem iconName="cogs" text="Setting" />
          <SubItem iconName="question-circle-o" text="Help?" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1
  },
  header: {
    backgroundColor: "#31C1E4",
    flex: 1,
    justifyContent: "center",
    paddingLeft: 10,
  },
  body: {
    flex: 9
  }
});

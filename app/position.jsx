import { View, Text } from "react-native";

const Position = () => {
  return (
    // Try setting `alignItems` to 'flex-start', 'flex-end', 'center', 'stretch'
    <View style={styles.container}>
      <Text style={styles.headerStyle}>position</Text>
      <View style={styles.elementsContainer}>
        <View style={[{ position: "relative" }, styles.yellow]} />
        <View style={[{ position: "relative" }, styles.red]} />
        <View style={[{ position: "relative" }, styles.green]} />
      </View>
    </View>
  );
};

const green = "#32B76C";
const yellow = "#FAA030";
const red = "#EE2C38";

const styles = {
  yellow: {
    width: 50,
    height: 50,
    top: 25,
    left: 25,
    backgroundColor: yellow,
  },
  red: {
    width: 50,
    height: 50,
    top: 50,
    left: 50,
    backgroundColor: red,
  },
  green: {
    width: 50,
    height: 50,
    top: 75,
    left: 75,
    backgroundColor: green,
  },

  container: {
    marginTop: 48,
    flex: 1,
  },

  headerStyle: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "300",
    marginBottom: 24,
  },
  elementsContainer: {
    flex: 1,
    backgroundColor: "#ADD8E6",
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24,
  },
};
export default Position;

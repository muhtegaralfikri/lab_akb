import { StyleSheet, Text, View } from "react-native";


const Rectangle = ({ name }: { name: string }) => (
  <View style={styles.rectangleContainer}>
    <Text style={styles.textStyle}>{name}</Text>
  </View>
);


const Pill = ({ id }: { id: string }) => (
  <View style={styles.pillContainer}>
    <Text style={styles.textStyle}>{id}</Text>
  </View>
);
const Triangle = () => <View style={styles.triangleShape} />;

export default function Index() {
  return (
    <View style={styles.mainContainer}>
      
      <Rectangle name="MUH TEGAR AL FIKRI" />
      <Pill id="105841110722" />
      <Triangle />
    </View>
  );
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 15, 
  },
  rectangleContainer: {
    backgroundColor: "maroon", 
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  
  pillContainer: {
    backgroundColor: "darkblue", 
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 50, 
  },
  
  textStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  
  triangleShape: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 60,
    borderRightWidth: 60,
    borderBottomWidth: 100,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "darkgreen", 
  },
});
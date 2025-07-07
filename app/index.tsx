import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{}}>
        <Text
          style={{
            fontSize: 20,
            color: "white",
            backgroundColor: "blue",
            padding: 10,
            borderRadius: 200,
          }}
        >
          105841110722
        </Text>
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            backgroundColor: "red",
            padding: 10,
            marginBottom: 10,
            marginTop: 10,
          }}
        >
          MUH TEGAR AL FIKRI
        </Text>
      </View>
      <View
        style={{
          width: 0,
          height: 0,
          backgroundColor: "transparent",
          borderLeftWidth: 50,
          borderLeftColor: "transparent",
          borderRightWidth: 50,
          borderRightColor: "transparent",
          borderBottomWidth: 70,
          borderBottomColor: "green",
        }}
      ></View>
    </View>
  );
}

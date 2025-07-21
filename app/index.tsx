import { Text, View, ScrollView, StyleSheet } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';

const iconsToDisplay = [
  { family: 'AntDesign', name: 'home', text: 'Rumah (AntDesign)' },
  { family: 'FontAwesome', name: 'car', text: 'Mobil (FontAwesome)' },
  { family: 'MaterialIcons', name: 'flight', text: 'Pesawat (MaterialIcons)' },
  { family: 'Ionicons', name: 'game-controller-outline', text: 'Game (Ionicons)' },
  { family: 'Feather', name: 'camera', text: 'Kamera (Feather)'},
  { family: 'AntDesign', name: 'setting', text: 'Pengaturan (AntDesign)' },
  { family: 'FontAwesome', name: 'music', text: 'Musik (FontAwesome)' },
  { family: 'MaterialIcons', name: 'shopping-cart', text: 'Keranjang (MaterialIcons)' },
  { family: 'Ionicons', name: 'book-outline', text: 'Buku (Ionicons)' },
  { family: 'Feather', name: 'coffee', text: 'Kopi (Feather)'},
];

const IconDisplay = ({ family, name }: { family: string, name: any }) => {
  const size = 24;
  const color = "black";

  switch (family) {
    case 'AntDesign':
      return <AntDesign name={name} size={size} color={color} />;
    case 'FontAwesome':
      return <FontAwesome name={name} size={size} color={color} />;
    case 'MaterialIcons':
      return <MaterialIcons name={name} size={size} color={color} />;
    case 'Ionicons':
      return <Ionicons name={name} size={size} color={color} />;
    case 'Feather':
      return <Feather name={name} size={size} color={color} />;
    default:
      return null;
  }
};

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>10 Ikon Berbeda</Text>
      {iconsToDisplay.map((icon, index) => (
        <View key={index} style={styles.iconRow}>
          <IconDisplay family={icon.family} name={icon.name} />
          <Text style={styles.iconText}>{icon.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

// Style
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  iconText: {
    marginLeft: 15,
    fontSize: 16,
  },
});

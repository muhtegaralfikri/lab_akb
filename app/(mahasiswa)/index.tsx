import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { DATA_MAHASISWA } from '../../data/mahasiswa';
import Ionicons from '@expo/vector-icons/Ionicons';
export default function DaftarMahasiswaScreen() {
  return (
    <View style={styles.container}>
      {/* FlatList untuk menampilkan daftar */}
      <FlatList
        data={DATA_MAHASISWA}
        keyExtractor={(item) => item.nim}
        renderItem={({ item }) => (
          // Setiap item adalah link yang mengarahkan ke halaman detail dinamis
          <Link href={`/${item.nim}`} asChild>
            <TouchableOpacity style={styles.itemContainer}>
              <Ionicons name="person-circle-outline" size={32} color="#444" />
              <Text style={styles.itemText}>{item.nama}</Text>
            </TouchableOpacity>
          </Link>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 18,
    marginLeft: 15,
  },
});

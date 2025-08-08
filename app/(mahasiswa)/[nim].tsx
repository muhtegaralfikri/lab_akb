import { View, Text, Image, StyleSheet } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { DATA_MAHASISWA } from '../../data/mahasiswa';

export default function DetailMahasiswaScreen() {
  // Hook ini untuk menangkap parameter 'nim' dari URL
  const { nim } = useLocalSearchParams(); 
  // Cari data mahasiswa di dalam array berdasarkan nim yang ditangkap
  const mahasiswa = DATA_MAHASISWA.find(m => m.nim === nim);
  // Penanganan kasus jika mahasiswa dengan NIM tersebut tidak ditemukan
  if (!mahasiswa) {
    return (
    <View style={styles.container}>
      <Text style={styles.nama}>Error</Text>
      <Text style={styles.nim}>Mahasiswa dengan NIM ini tidak ditemukan.</Text>
    </View>
  );
  }
  // Jika ditemukan, tampilkan datanya
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: mahasiswa.nama }} />
      <Image source={{ uri: mahasiswa.foto }} style={styles.foto} />
      <Text style={styles.nama}>{mahasiswa.nama}</Text>
      <Text style={styles.nim}>NIM: {mahasiswa.nim}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  foto: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  nama: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  nim: {
    fontSize: 18,
    color: 'gray',
  },
});

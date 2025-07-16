import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Text } from "react-native";

// Mencegah splash screen hilang secara otomatis sebelum font dimuat
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // Memuat semua font yang dibutuhkan untuk tugas
  const [loaded, error] = useFonts({
    // --- 5 FONT STATIS ---
    // (1 file = 1 gaya. Kita pakai yang Regular)
    'PressStart': require("../assets/fonts/PressStart2P-Regular.ttf"),
    'PTSerif-Regular': require("../assets/fonts/PTSerif-Regular.ttf"),
    'Ubuntu-Regular': require("../assets/fonts/Ubuntu-Regular.ttf"),
    'Lato-Regular': require("../assets/fonts/Lato-Regular.ttf"),
    'Poppins-Regular': require("../assets/fonts/Poppins-Regular.ttf"),

    // --- 5 FONT VARIABEL ---
    // (1 file = semua gaya. Diatur via fontWeight)
    'Inter-Variable': require("../assets/fonts/Inter-VariableFont_opsz,wght.ttf"),
    'Montserrat-Variable': require("../assets/fonts/Montserrat-VariableFont_wght.ttf"),
    'RobotoFlex-Variable': require("../assets/fonts/RobotoFlex-VariableFont_GRAD,XOPQ,XTRA,YOPQ,YTAS,YTDE,YTFI,YTLC,YTUC,opsz,slnt,wdth,wght.ttf"),
    'Oswald-Variable': require("../assets/fonts/Oswald-VariableFont_wght.ttf"),
    'Raleway-Variable': require("../assets/fonts/Raleway-VariableFont_wght.ttf"),
  });

  // useEffect untuk mengelola kapan splash screen harus disembunyikan
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  // Jika font belum selesai dimuat dan tidak ada error, jangan tampilkan apa-apa
  // Splash screen akan tetap terlihat
  if (!loaded && !error) {
    return null;
  }

  // Menangani jika ada error saat memuat font
  if (error) {
    console.error("Gagal memuat font:", error);
    return <Text>Terjadi kesalahan saat memuat font.</Text>;
  }

  // Jika font berhasil dimuat, tampilkan struktur navigasi aplikasi
  return <Stack />;
}
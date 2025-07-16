import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Text } from "react-native";

// Mencegah splash screen hilang secara otomatis sebelum font dimuat
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [loaded, error] = useFonts({
    //FONT STATIS
    'PressStart': require("../assets/fonts/PressStart2P-Regular.ttf"),
    'PTSerif-Regular': require("../assets/fonts/PTSerif-Regular.ttf"),
    'Ubuntu-Regular': require("../assets/fonts/Ubuntu-Regular.ttf"),
    'Lato-Regular': require("../assets/fonts/Lato-Regular.ttf"),
    'Poppins-Regular': require("../assets/fonts/Poppins-Regular.ttf"),

    //FONT VARIABEL
    'Inter-Variable': require("../assets/fonts/Inter-VariableFont_opsz,wght.ttf"),
    'Montserrat-Variable': require("../assets/fonts/Montserrat-VariableFont_wght.ttf"),
    'RobotoFlex-Variable': require("../assets/fonts/RobotoFlex-VariableFont_GRAD,XOPQ,XTRA,YOPQ,YTAS,YTDE,YTFI,YTLC,YTUC,opsz,slnt,wdth,wght.ttf"),
    'Oswald-Variable': require("../assets/fonts/Oswald-VariableFont_wght.ttf"),
    'Raleway-Variable': require("../assets/fonts/Raleway-VariableFont_wght.ttf"),
  });

  
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  
  if (!loaded && !error) {
    return null;
  }

  
  if (error) {
    console.error("Gagal memuat font:", error);
    return <Text>Terjadi kesalahan saat memuat font.</Text>;
  }


  return <Stack />;
}
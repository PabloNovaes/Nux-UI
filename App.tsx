import { useFonts } from 'expo-font';

import { Routes } from '@/routes';
import { StatusBar } from "expo-status-bar";
import { View } from 'react-native';
import "./global.css";

export default function App() {
  const [fontsLoaded] = useFonts({
    'Cereal-Bd': require('./assets/fonts/AirbnbCereal_W_Bd.otf'),
    'Cereal-Bk': require('./assets/fonts/AirbnbCereal_W_Bk.otf'),
    'Cereal-Blk': require('./assets/fonts/AirbnbCereal_W_Blk.otf'),
    'Cereal-Lt': require('./assets/fonts/AirbnbCereal_W_Lt.otf'),
    'Cereal-Md': require('./assets/fonts/AirbnbCereal_W_Md.otf'),
    'Cereal-XBd': require('./assets/fonts/AirbnbCereal_W_XBd.otf'),
  });

  // Aguarda carregamento das fontes
  if (!fontsLoaded) return null;

  return (
    <View className='flex-1'>
      <StatusBar style="dark" />
      <Routes />
    </View>
  );
}

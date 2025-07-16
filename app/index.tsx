import { Text, View, ScrollView } from "react-native";

const daftarMahasiswa = [
  { stambuk: "105841107622", nama: "MUH. FIKRIR MAULANA" },
  { stambuk: "105841107722", nama: "MUHAMMAD HASRADDIN HASNAN" },
  { stambuk: "105841107822", nama: "MUHAMMAD DZULFIKAR Hidayat" },
  { stambuk: "105841107922", nama: "AHMAD YANI" },
  { stambuk: "105841108122", nama: "Rosfika Awalia" },
  { stambuk: "105841108222", nama: "YOGI A. AMMAH" },
  { stambuk: "105841108722", nama: "Usron" },
  { stambuk: "105841108822", nama: "Rika Armayani" },
  { stambuk: "105841109022", nama: "ANNAS URBACH NINGRUM" },
  { stambuk: "105841109222", nama: "Besse Taleha" },
  { stambuk: "105841109322", nama: "Dinda safitri" },
  { stambuk: "105841109422", nama: "MUH. FARREL APTA INDRATAMA" },
  { stambuk: "105841109622", nama: "FAUZAN AZHARI RAHMAN" },
  { stambuk: "105841109722", nama: "MUH. FADHIL AHMAD" },
  { stambuk: "105841109822", nama: "DAYANG AISYAH" },
  { stambuk: "105841102222", nama: "ILFAUZA FEBRIANTY FAISAL" },
  { stambuk: "105841110322", nama: "SABAN" },
  { stambuk: "105841110422", nama: "NUR FADILLAH SARI" },
  { stambuk: "105841110522", nama: "MUH. HIJRIL ILMAN" },
  { stambuk: "105841110622", nama: "Wa Nanda Sulystrian" },
  { stambuk: "105841110722", nama: "MUH. TEGAR AL FIKRI" },
  { stambuk: "105841110822", nama: "RAYHANATUL JANNAH" },
  { stambuk: "105841110922", nama: "HANNA MARYAM" },
  { stambuk: "105841111022", nama: "Afifah Auliyah" },
];

export default function Index() {

  const staticFonts = ['Poppins-Regular', 'Lato-Regular', 'Ubuntu-Regular', 'PTSerif-Regular', 'PressStart'];
  const variableFonts = ['Inter-Variable', 'Montserrat-Variable', 'Oswald-Variable', 'Raleway-Variable', 'RobotoFlex-Variable'];
  
  const indexSaya = 20;
  const dataSaya = daftarMahasiswa[indexSaya];
  
  let namaSebelum : { stambuk: string; nama: string; }[] = [];
  let namaSesudah : { stambuk: string; nama: string; }[] = [];

  namaSebelum = daftarMahasiswa.slice(indexSaya - 5, indexSaya);

  const sisaSetelah = daftarMahasiswa.slice(indexSaya + 1);
  if (sisaSetelah.length < 5) {
    const kurangBerapa = 5 - sisaSetelah.length;
    const ambilDariAwal = daftarMahasiswa.slice(0, kurangBerapa);
    namaSesudah = [...sisaSetelah, ...ambilDariAwal];
  } else {
    namaSesudah = sisaSetelah.slice(0, 5);
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ alignItems: 'center' }}>
        
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 20 }}>
          5 Nama Sebelum (Font Statis)
        </Text>
        {namaSebelum.map((mhs, index) => (
          <Text key={mhs.stambuk} style={{ fontFamily: staticFonts[index % staticFonts.length], marginBottom: 20, fontSize: 16 }}>
            {mhs.nama}
          </Text>
        ))}

        <View style={{ marginVertical: 20, padding: 20, borderWidth: 2, borderColor: 'blue', alignItems: 'center' }}>
          <Text style={{ marginBottom: 20, fontSize: 16, textAlign: 'center' }}>
            {dataSaya.nama}
          </Text>
          <Text style={{ fontWeight: '800' }}>
            {dataSaya.stambuk}
          </Text>
        </View>

        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 20 }}>
          5 Nama Sesudah (Font Variabel)
        </Text>
        {namaSesudah.map((mhs, index) => (
          <Text 
            key={mhs.stambuk} 
            style={{ 
              fontFamily: variableFonts[index % variableFonts.length], 
              fontWeight: (`${(index + 3) * 100}`) as '300' | '400' | '500' | '600' | '700', 
              marginBottom: 20, 
              fontSize: 16 
            }}>
            {mhs.nama}
          </Text>
        ))}

      </View>
    </ScrollView>
  );
}
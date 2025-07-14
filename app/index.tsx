import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  Pressable,
  Dimensions,
  FlatList,
} from 'react-native';


const imageData = [
  { id: '1', primary: 'https://picsum.photos/id/10/200', alternate: 'https://picsum.photos/id/11/200' },
  { id: '2', primary: 'https://picsum.photos/id/12/200', alternate: 'https://picsum.photos/id/13/200' },
  { id: '3', primary: 'https://picsum.photos/id/14/200', alternate: 'https://picsum.photos/id/15/200' },
  { id: '4', primary: 'https://picsum.photos/id/16/200', alternate: 'https://picsum.photos/id/17/200' },
  { id: '5', primary: 'https://picsum.photos/id/18/200', alternate: 'https://picsum.photos/id/19/200' },
  { id: '6', primary: 'https://picsum.photos/id/20/200', alternate: 'https://picsum.photos/id/21/200' },
  { id: '7', primary: 'https://picsum.photos/id/22/200', alternate: 'https://picsum.photos/id/23/200' },
  { id: '8', primary: 'https://picsum.photos/id/24/200', alternate: 'https://picsum.photos/id/25/200' },
  { id: '9', primary: 'https://picsum.photos/id/26/200', alternate: 'https://picsum.photos/id/27/200' },
];


const GridImageCell = ({ primaryUrl, alternateUrl }: { primaryUrl: string; alternateUrl: string }) => {
  const [isAlternate, setIsAlternate] = useState(false);
  const [scale, setScale] = useState(1);

  const handlePress = () => {
    setIsAlternate(prev => !prev);
    const newScale = scale * 1.2;
    setScale(newScale <= 2 ? newScale : 2);
  };

  const imageUrl = isAlternate ? alternateUrl : primaryUrl;

  const containerDynamicStyle = {
    zIndex: scale > 1 ? 99 : 1,
  };

  const imageDynamicStyle = {
    transform: [{ scale: scale }],
  };

  return (
    <Pressable
      onPress={handlePress}
      style={[styles.cellContainer, containerDynamicStyle]}
    >
      <Image
        source={{ uri: imageUrl }}
        style={[styles.image, imageDynamicStyle]}
        resizeMode="cover"
      />
    </Pressable>
  );
};


export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={imageData}
        renderItem={({ item }) => (
          <GridImageCell
            primaryUrl={item.primary}
            alternateUrl={item.alternate}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={3}
        key={'three-columns'} 
      />
    </SafeAreaView>
  );
}

const numColumns = 3;
const gap = 8; 
const screenWidth = Dimensions.get('window').width;


const totalHorizontalGaps = gap * (numColumns + 1);
const cellSize = (screenWidth - totalHorizontalGaps) / numColumns;


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: gap / 2, 
  },
  cellContainer: {
    width: cellSize,
    height: cellSize,
    margin: gap / 2, 
    backgroundColor: '#eee', 
  },
  
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
});
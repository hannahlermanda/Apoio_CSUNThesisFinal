import { StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import React from 'react';
import tw from 'twrnc';

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View>
      <Image 
            style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
            }}
            source={require('@/app/Pictures/Apoio_Logo_2024.png')}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    text: {
        color: 'blue',
    },
});
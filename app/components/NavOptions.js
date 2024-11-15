import { FlatList, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc';

//Options on the Screen
const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "See trusted contacts",
        image: "https://i.pinimg.com/originals/8a/9f/f0/8a9ff09d16b89f217d87c7ce8af64f25.png",
        screen: "TrustedContacts", //Demo?
    },
];



const NavOptions = () => {
  return (
    <FlatList 
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => (
            <TouchableOpacity
                style={tw`p-2 pl-5 pb-8 pt-4 bg-blue-100 m-2 w-30`}    //Padding:2, Padding Left: 5, Padding Bottom: 8, Padding Top: 4, Background Color: Light Blue, Margin:2, Width: 30
            >
                <View>
                    <Image 
                        style={
                            {width: 100,
                             height: 100,
                             resizeMode: "contain"
                            }
                        }
                        //Where the images are from
                        source={
                            {uri:item.image}
                        }
                    />
                    <Text>
                        {item.title}
                    </Text>
                </View>
            </TouchableOpacity>
        )}
    />
  );
};

export default NavOptions

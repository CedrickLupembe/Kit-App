import { View, Text, Image } from "react-native";

import { profil } from "../src/Object";

const Profils = () => {
  return (
    <View className=" w-full h-1/5 flex-row items-center px-4">
      {profil.map((item) => (
        <View key={item.name} className="mr-4">
          <Image source={{ uri: item.picture }} />
          <Text>{item.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default Profils;

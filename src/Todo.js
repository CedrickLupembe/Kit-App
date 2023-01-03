import Ionicons from "react-native-vector-icons/Ionicons";
import { View, Text, Image } from "react-native";

// Components
import Profils from "../components/Profils";

const Todo = () => {
  return (
    <View className="flex h-screen">
      <View className="w-full h-1/5 bg-sky-500 relative justify-end items-center">
        <View className="w-full flex-row relative justify-center h-28">
          <View className="w-3/5 px-3 flex-row justify-around items-center h-full">
            <View className=" bg-sky-200 rounded-full border-2 p-1">
              <Image
                source={require("../assets/Images/About.jpeg")}
                className="w-12 h-12 border-2 border-sky-700 rounded-full"
              />
            </View>
            <View>
              <Text className="font-bold text-white">Cedrick Lupembe</Text>
              <Text className=" text-sky-200 text-xs">Web developer</Text>
            </View>
          </View>

          <View className="w-2/5 px-3 flex-row justify-around items-center h-full">
            <Text className="text-lg">
              <Ionicons
                name="ios-notifications-outline"
                style={{ fontSize: 22, color: "#ffff" }}
              />
            </Text>
            <Text className="text-lg">
              <Ionicons
                name="menu-outline"
                style={{ fontSize: 25, color: "#ffff" }}
              />
            </Text>
          </View>
        </View>
      </View>

      <View className=" w-full h-4/5">
        <Profils />
      </View>
    </View>
  );
};

export default Todo;

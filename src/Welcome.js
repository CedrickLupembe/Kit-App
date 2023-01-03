import { useNavigation } from "@react-navigation/native";
import { Text, View, Image, TouchableOpacity } from "react-native";

const Welcome = () => {
  const navigation = useNavigation();

  const GoToSignup = () => {
    navigation.navigate("Signup");
  };
  const GoTodo = () => {
    navigation.navigate("Todo");
  };
  return (
    <View className="flex h-screen py-10">
      <View className="w-full h-2/4 relative flex justify-center items-center">
        <Image
          source={require("../assets/Images/illustration.png")}
          className="w-80 h-80"
        />
      </View>
      <View className="w-full h-2/4 px-5 relative flex justify-center items-center">
        <Text className=" font-bold text-3xl text-center">
          Growing your business is <Text className=" text-sky-500">easier</Text>{" "}
          then you think !!
        </Text>

        <Text className="mt-5 text-slate-400">Sign up take only 2 minutes</Text>
        <TouchableOpacity className="mt-4 w-full py-3 rounded-full flex justify-center items-center bg-slate-800">
          <Text className="text-white" onPress={GoTodo}>
            Get Started
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="mt-4 w-full py-3 rounded-full flex justify-center items-center bg-slate-100">
          <Text className="text-slate-800" onPress={GoToSignup}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;

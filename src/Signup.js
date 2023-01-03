import { View, Text, TextInput, TouchableOpacity } from "react-native";

const Signup = () => {
  return (
    <View className="w-full h-screen bg-white">
      <View className="h-1/4 relative flex justify-center items-center">
        <Text className="text-3xl font-bold">Welcome back</Text>
        <Text className=" mt-2 text-slate-400">
          Welcome back, Please enter your details
        </Text>
      </View>

      <View className=" w-full h-5/6">
        <View className="w-full py-2 px-4 h-auto">
          <Text className="mb-3">Email</Text>
          <TextInput
            textContentType="email"
            placeholder="cedrick@gmail.com"
            className="border-2 border-slate-200 py-3 px-5 rounded-lg"
          />
        </View>

        <View className="w-full py-2 px-4 h-auto">
          <Text className="mb-3">Password</Text>
          <TextInput
            placeholder="Enter a password"
            textContentType="password"
            className="border-2 border-slate-200 py-3 px-5 rounded-lg"
          />
        </View>

        <TouchableOpacity className="mt-1 w-full">
          <Text className="text-sky-500 text-center">Forgot Password</Text>
        </TouchableOpacity>

        <View className="px-4">
          <TouchableOpacity className="mt-4 w-full py-4 rounded-lg flex justify-center items-center bg-slate-800">
            <Text className="text-white">Sign up</Text>
          </TouchableOpacity>

          <TouchableOpacity className="mt-3 py-4 w-full border-2 rounded-lg flex justify-center items-center border-slate-200">
            <Text className=" text-slate-800 text-center">
              Continue with google
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity className="mt-7 w-full flex-row items-center justify-center">
          <Text>Already have an account ? </Text>
          <Text className="text-sky-500 text-center">Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;

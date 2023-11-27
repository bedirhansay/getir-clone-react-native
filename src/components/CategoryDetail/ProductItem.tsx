import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import React from "react";
import { Button } from "components/ui/Button";
import { Colors } from "constants/colors";
import { Product } from "utils";

export const ProductItem = ({ item }: { item: Product }) => {
  const { width, height } = Dimensions.get("window");
  const productWidth = width / 3;
  return (
    <Pressable
      style={{
        width: width * 0.285,
      }}
      className="ml-4 mb-4 mt-4 items-center flex flex-col  "
    >
      <Image
        style={{
          width: width * 0.285,
          height: 100,
        }}
        className="rounded-md"
        source={{
          uri: item.image,
        }}
      />
      <View className="flex flex-row gap-2 mt-0 ">
        <Text className="text-sm font-bold text-gray-500 line-through ">
          {"\u20BA"}
          {item.fiyat}
        </Text>
        <Text className="text-sm font-bold text-purple ">
          {"\u20BA"}
          {item.fiyatIndirimli}
        </Text>
      </View>

      <View className="flex flex-col gap-2 mt-0">
        <Text className=" font-semibold text-left text-black  text-xs">
          {item.name}
        </Text>
        <Text className="text-xs font-semibold text-gray-500 ">
          {item.miktar}
        </Text>
      </View>
      <Button
        onPress={() => console.log("+ yazar")}
        className="rounded-md bg-white border-gray-400 w-8 h-8 shadow-xl absolute  right-[-10] top-[-10]"
        size={28}
        icon={"add"}
        color={Colors.purple}
      />
    </Pressable>
  );
};

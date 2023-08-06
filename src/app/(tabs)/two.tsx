import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React, {useState} from "react";
import {Ionicons} from "@expo/vector-icons";

import {NativeStackScreenProps} from "@react-navigation/native-stack";

import { AirbnbRating, Rating } from "react-native-ratings";







const DetailScreen: React.FC = ({
  route: {
    params: {product},
  },
  navigation: {goBack},
}) => {
  return (
    <SafeAreaView>
      <View
        style={{
          paddingHorizontal: 45
        }}
      >
        <View
          style={{
            paddingHorizontal: 44,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => goBack()}>
            <Ionicons name="chevron-back" size={24} color={"green"} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name="grid-outline" size={30} color="green" />
          </TouchableOpacity>
        </View>
        <Image
          source={product.cover}
          style={{
            width: "100%",
            height: 400,
            marginVertical: 4,
            borderRadius: 7
          }}
        />
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            marginVertical: 7
          }}
        >
          {product.ingredients.map(ingredient => (
            <View
              key={ingredient.id}
              style={{
                backgroundColor: "#eee",
                padding: 4,
                borderRadius: 45,
                alignItems: "center",
              }}
            >
              <Image
                source={ingredient.image}
                style={{
                  width: 90,
                  height: 70,
                }}
              />
              <Text
                style={{
                  color: "#fff",
                  marginVertical: 4
                }}
              >
                {ingredient.name}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#eee",
          padding: 4,
          borderTopLeftRadius: 4,
          borderTopRightRadius:7
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 4,
              
                color: "#ddd"
              }}
            >
              {product.title}
            </Text>
            <Text
              style={{
            
             
                color: "#000",
              }}
            >
              Size: {product.size}
            </Text>
          </View>
          <View
            style={{
              alignItems: "flex-end",
            }}
          >
            <AirbnbRating
              count={5}
              showRating={false}
              size={16}
              selectedColor="#ffa"
              defaultRating={product.rating}
              isDisabled
            />
            <Text
              style={{
                fontSize: 7,
           
                color: "#000",
              }}
            >
              ({product.reviewsCount} Reviews)
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 7,
            alignItems: "center",
          }}
        >
          <Text
            style={{
             
              fontSize: 7
            }}
          >
            $ {product.price}
          </Text>
          <View
            style={{
              flexDirection: "row",
              padding:  3,
              borderWidth: 1,
              borderColor: "#000",
              borderRadius: 7,
              height: 45,
            }}
          >
            <TouchableOpacity
              style={{
                padding: 7
              }}
            >
              <Ionicons
                name="remove-outline"
                color={"#000"}
                size={20}
              />
            </TouchableOpacity>
            <TextInput
              value="1"
              style={{
             
                paddingHorizontal: 7
              }}
            />
            <TouchableOpacity
              style={{
                padding: 7
              }}
            >
              <Ionicons name="add" color={"#000"} size={20} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#ddd",
              padding: 4,
              borderRadius: 7,
            }}
          >
            <Text
              style={{
                color: "#eeee",
                fontSize: 4,
               
              }}
            >
              Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;

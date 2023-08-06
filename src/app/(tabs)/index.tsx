// import React, { useEffect, useState } from "react";
// import {
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   Image,
//   TextInput,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import MasonryList from "@react-native-seoul/masonry-list";

// import { Food, Foods, user } from "@/src/Data";

// const SearchScreen: React.FC = () => {
//   const [search, setSearch] = useState<string>("");
//   const [results, setResults] = useState<Food[]>(Foods);

//   useEffect(() => {
//     setResults(Foods.filter((product) => product.title.includes(search)));
//   }, [search]);

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView>
//         <View style={styles.header}>
//           <TouchableOpacity>
//             <Ionicons name="chevron-back" size={24} color="#000" />
//           </TouchableOpacity>
//           <Text style={styles.headerText}>Search Food</Text>
//           <TouchableOpacity>
//             <Image
//               source={user.profile}
//               style={styles.profileImage}
//             />
//           </TouchableOpacity>
//         </View>
//         <View style={styles.searchContainer}>
//           <View style={styles.searchInputContainer}>
//             <Ionicons name="search" size={24} color="#ddd" />
//             <TextInput
//               style={styles.searchInput}
//               placeholder="Search"
//               placeholderTextColor="#000"
//               onChangeText={(value) => setSearch(value)}
//               defaultValue={search}
//             />
//           </View>
//           <TouchableOpacity style={styles.filterButton}>
//             <Ionicons name="filter-outline" size={24} color="#fff" />
//           </TouchableOpacity>
//         </View>
//         <MasonryList
//           data={[
//             { id: 0, title: `Found ${results.length} Results` },
//             ...results,
//           ]}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={({ item, i }) => (
//             <>
//               {i === 0 ? (
//                 <Text style={styles.resultsText}>{item.title}</Text>
//               ) : (
//                 <TouchableOpacity style={styles.foodContainer}>
//                   <Image
//                     source={item.image}
//                     style={styles.foodImage}
//                   />
//                   <Text style={styles.foodTitle}>{item.title}</Text>
//                   <Text style={styles.foodSubTitle}>{item.subTitle}</Text>
//                   <View style={styles.priceContainer}>
//                     <Text style={styles.price}>$ {item.price}</Text>
//                     <TouchableOpacity style={styles.heartButton}>
//                       <Ionicons name="heart" size={20} color="#fff" />
//                     </TouchableOpacity>
//                   </View>
//                 </TouchableOpacity>
//               )}
//             </>
//           )}
//         />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingHorizontal: 16,
//     marginTop: 20,
//   },
//   headerText: {
//     color: "#000",
//     fontSize: 18,
//   },
//   profileImage: {
//     height: 50,
//     width: 50,
//     borderRadius: 25,
//   },
//   searchContainer: {
//     marginVertical: 12,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingHorizontal: 16,
//   },
//   searchInputContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#ddd",
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 25,
//     width: "80%",
//     height: 50,
//   },
//   searchInput: {
//     color: "#000",
//     marginLeft: 8,
//   },
//   filterButton: {
//     height: 50,
//     width: 50,
//     backgroundColor: "#f57c00",
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 25,
//   },
//   resultsText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginVertical: 10,
//     marginHorizontal: 16,
//   },
//   foodContainer: {
//     padding: 8,
//     backgroundColor: "#f5f5f5",
//     marginVertical: 10,
//     marginHorizontal: 16,
//     borderRadius: 4,
//   },
//   foodImage: {
//     width: "100%",
//     height: 220,
//     borderRadius: 4,
//   },
//   foodTitle: {
//     fontSize: 16,
//     color: "#000",
//     marginTop: 8,
//   },
//   foodSubTitle: {
//     color: "#888",
//     marginVertical: 4,
//   },
//   priceContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginTop: 8,
//   },
//   price: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   heartButton: {
//     height: 35,
//     width: 35,
//     backgroundColor: "#f57c00",
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 18,
//   },
// });

// export default SearchScreen;

import React, {useEffect, useState} from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import MasonryList from "@react-native-seoul/masonry-list";

import {Food, Foods, user} from "@/src/Data";

const SearchScreen: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [results, setResults] = useState<Food[]>(Foods);

  useEffect(() => {
    setResults(Foods.filter(product => product.title.includes(search)));
  }, [search]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="chevron-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Search Food</Text>
          <TouchableOpacity>
            <Image source={user.profile} style={styles.profileImage} />
          </TouchableOpacity>
        </View>
        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <Ionicons name="search" size={24} color="#ddd" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search for food"
              placeholderTextColor="#000"
              onChangeText={value => setSearch(value)}
              defaultValue={search}
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="filter-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        <MasonryList
          data={[{id: 0, title: `Found ${results.length} Results`}, ...results]}
          keyExtractor={item => item.id.toString()}
          renderItem={({item, i}) => (
            <>
              {i === 0 ? (
                <Text style={styles.resultsText}>{item.title}</Text>
              ) : (
                <TouchableOpacity style={styles.foodContainer}>
                  <Image source={item.image} style={styles.foodImage} />
                  <Text style={styles.foodTitle}>{item.title}</Text>
                  <Text style={styles.foodSubTitle}>{item.subTitle}</Text>
                  <View style={styles.priceContainer}>
                    <Text style={styles.price}>$ {item.price}</Text>
                    <TouchableOpacity style={styles.heartButton}>
                      <Ionicons name="heart" size={20} color="#fff" />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              )}
            </>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 12,
  },
  headerText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ddd",
    borderRadius: 30,
    paddingHorizontal: 16,
    height: 50,
    flex: 1,
  },
  searchInput: {
    color: "#000",
    marginLeft: 8,
    flex: 1,
  },
  filterButton: {
    height: 50,
    width: 50,
    backgroundColor: "#f57c00",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  resultsText: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  foodContainer: {
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    marginVertical: 10,
    padding: 12,
  },
  foodImage: {
    width: "100%",
    height: 220,
    borderRadius: 8,
  },
  foodTitle: {
    fontSize: 16,
    color: "#000",
    marginTop: 8,
  },
  foodSubTitle: {
    color: "#888",
    marginTop: 4,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
  },
  heartButton: {
    height: 35,
    width: 35,
    backgroundColor: "#f57c00",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 18,
  },
});

export default SearchScreen;

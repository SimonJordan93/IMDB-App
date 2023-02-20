import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  Platform,
  Image,
  TouchableOpacity,
} from "react-native";

import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView
        style={[
          {
            marginTop:
              Platform.OS === "android" ? Constants.statusBarHeight : 0,
          },
          styles.black,
        ]}
      >
        <View style={styles.header}>
          <Image
            source={require("./assets/img/imdb.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <View style={styles.topSection}>
          <Text style={styles.movieTitle}>Interstellar</Text>
          <Text style={styles.movieStats}>
            2014 PG-13 2h49min Adventure, Drama, Sci-Fi
          </Text>
          <View style={styles.moviePres}>
            <Image
              source={require("./assets/img/film.jpg")}
              style={styles.movieBanner}
              resizeMode="contain"
            />
            <View style={styles.movieDesc}>
              <Text style={styles.synopsis}>
                A team of explorers travel through a wormhole in space in an
                attempt to ensure humanity's survival.{" "}
              </Text>
              <TouchableOpacity
                style={styles.addWatchlist}
                activeOpacity={0.7}
                onPress={() => {
                  console.log("ADDED TO WATCHLIST !");
                }}
              >
                <Text style={styles.addText}>+ ADD TO WATCHLIST</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.ratings}>
            <View style={styles.rateBox}>
              <AntDesign name="star" style={[styles.icon, styles.yellow]} />
              <Text style={styles.white}>8.6/10</Text>
              <Text style={styles.grey}>1.1M</Text>
            </View>
            <View style={styles.rateBox}>
              <AntDesign name="staro" style={[styles.icon, styles.white]} />
              <Text style={styles.white}>RATE THIS</Text>
            </View>
            <View style={styles.rateBox}>
              <View style={styles.metascoreBox}>
                <Text style={[styles.metascore, styles.white]}>74</Text>
              </View>
              <Text style={styles.white}>Metascore</Text>
              <Text style={styles.grey}>46 critic reviews</Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomSection}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  black: {
    backgroundColor: "#111",
    height: 1000,
  },
  header: {
    backgroundColor: "#3C3C3C",
    height: 60,
    width: "100%",
    justifyContent: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 20,
  },
  logo: {
    height: 70,
    width: 70,
    marginLeft: 20,
  },
  topSection: {
    backgroundColor: "#222",
    width: "100%",
    marginBottom: 15,

    shadowColor: "#444",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  movieTitle: {
    fontSize: 36,
    color: "#FFF",
    margin: 10,
  },
  movieStats: {
    fontSize: 14,
    color: "#999",
    marginLeft: 10,
    marginBottom: 15,
  },
  moviePres: {
    flexDirection: "row",
    marginBottom: 30,
  },
  movieBanner: {
    height: 160,
    width: 120,
    marginLeft: 10,
    marginRight: 15,
    flex: 1,
  },
  movieDesc: {
    height: 160,
    flex: 2,
  },
  synopsis: {
    color: "#DDD",
    marginBottom: 15,
  },
  addWatchlist: {
    backgroundColor: "#1981e3",
    width: "90%",
    borderRadius: 3,
    padding: 7,
    alignItems: "center",
  },
  addText: {
    color: "#DDD",
    fontWeight: "bold",
  },
  ratings: {
    // borderWidth: 1,
    // borderColor: "white",
    // height: 100,
    flexDirection: "row",
  },
  rateBox: {
    // borderWidth: 1,
    // borderColor: "white",
    flex: 1,
    alignItems: "center",
    marginBottom: 10,
  },
  icon: {
    fontSize: 30,
    // borderWidth: 1,
    // borderColor: "white",
    marginBottom: 10,
  },
  yellow: {
    color: "#e3ce0e",
  },
  white: {
    color: "white",
  },
  grey: {
    color: "#999",
    fontSize: 12,
  },
  metascoreBox: {
    backgroundColor: "limegreen",
    padding: 2,
    marginBottom: 10,
  },
  metascore: {
    fontSize: 18,
  },
  bottomSection: {
    backgroundColor: "#222",
    width: "100%",
    height: 800,
  },
});

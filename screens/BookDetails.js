import {
  Text,
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  Image
} from "react-native";

const BookDetails = (props) => {
  const { name, book_image, bookDescription } = props.route.params.item;
  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <View style={style.bookCover}>
          <Image source={{ uri: book_image }} style={style.bookCoverImage} />
        </View>
        <View>
          <Text
            style={{
              fontSize: 30,
              marginTop: 20,
              fontWeight: "bold",
              textAlign: "justify"
            }}
          >
            {name}
          </Text>
        </View>
        <View style={{marginTop: 10}}>
          <Text style={{fontSize: 20, fontWeight: "bold"}}>Description:</Text>
          <Text
            style={{
              fontSize: 15,
              opacity: 0.5,
              textAlign: "justify",
            }}
          >
            {bookDescription}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookDetails;

const style = StyleSheet.create({
  container: {
    padding: 10
  },
  bookCover: {
    flex: 1,
    width: "100%",
    alignItems: "center"
  },
  bookCoverImage: {
    width: "90%",
    height: 350,
    borderRadius: 12
  }
});

import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
  Dimensions
} from "react-native";
import { Card, Title } from "react-native-paper";

export default function Books({ navigation }) {
  const cardGap = 16;
  const cardWidth = (Dimensions.get("window").width - cardGap * 3) / 2;
  const BOOKS = [
    {
      name: "JavaScript code book for begginer",
      book_image:
        "https://aestheticblasphemy.com/static/media/images/archive/JavaScript-TheGoodParts.jpg?itok=K3YlQY2x",
      bookDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis vulputate lacus, vitae consectetur justo consequat non. Integer a odio at metus pretium egestas nec eu odio. Sed ornare risus et ex congue vulputate. Suspendisse vel dui pellentesque, tincidunt orci sed, ullamcorper lacus. Maecenas vel luctus"
    },
    {
      name: "JavaScript",
      book_image:
        "https://aestheticblasphemy.com/static/media/images/archive/JavaScript-TheGoodParts.jpg?itok=K3YlQY2x",
      bookDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis vulputate lacus, vitae consectetur justo consequat non. Integer a odio at metus pretium egestas nec eu odio. Sed ornare risus et ex congue vulputate. Suspendisse vel dui pellentesque, tincidunt orci sed, ullamcorper lacus. Maecenas vel luctus"
    },
    {
      name: "JavaScript",
      book_image:
        "https://aestheticblasphemy.com/static/media/images/archive/JavaScript-TheGoodParts.jpg?itok=K3YlQY2x",
      bookDescription:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis vulputate lacus, vitae consectetur justo consequat non. Integer a odio at metus pretium egestas nec eu odio. Sed ornare risus et ex congue vulputate. Suspendisse vel dui pellentesque, tincidunt orci sed, ullamcorper lacus. Maecenas vel luctus"
    },
    {
      name: "JavaScript",
      book_image:
        "https://aestheticblasphemy.com/static/media/images/archive/JavaScript-TheGoodParts.jpg?itok=K3YlQY2x",
      bookDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis vulputate lacus, vitae consectetur justo consequat non. Integer a odio at metus pretium egestas nec eu odio. Sed ornare risus et ex congue vulputate. Suspendisse vel dui pellentesque, tincidunt orci sed, ullamcorper lacus. Maecenas vel luctus"
    },
    {
      name: "JavaScript",
      book_image:
        "https://aestheticblasphemy.com/static/media/images/archive/JavaScript-TheGoodParts.jpg?itok=K3YlQY2x",
      bookDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis vulputate lacus, vitae consectetur justo consequat non. Integer a odio at metus pretium egestas nec eu odio. Sed ornare risus et ex congue vulputate. Suspendisse vel dui pellentesque, tincidunt orci sed, ullamcorper lacus. Maecenas vel luctus"
    }
  ];
  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <View style={style.cardContainer}>
          {BOOKS.map((item, index) => {
            return (
              <Card
                key={index}
                style={{
                  marginTop: cardGap,
                  marginLeft: index % 2 !== 0 ? cardGap : 0,
                  width: cardWidth,
                  height: 300
                }}
                onPress={() => {
                  navigation.navigate("BookDetails", { item });
                }}
              >
                <Card.Cover source={{ uri: item.book_image }} />
                <Card.Content>
                  <Title style={{ fontSize: 18, fontWeight: "bold" }}>
                    {item.name.length > 15
                      ? item.name.substring(0, 15) + "..."
                      : item.name}
                  </Title>
                  <Text style={{ opacity: 0.5 }}>
                    {item.bookDescription.length > 50
                      ? item.bookDescription.substring(0, 50) + "..."
                      : item.bookDescription}
                  </Text>
                </Card.Content>
              </Card>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  container: {
    padding: 10
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap"
  }
});

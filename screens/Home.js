import * as React from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from "react-native";
import { Card, DataTable, Title } from "react-native-paper";

export default function Home() {
  const DATA = [
    {
      name: "JavaScript code",
      barcode: "00193456786",
      date: "2022/01/06-2022/02/06",
    },
    {
      name: "JavaScript",
      barcode: "00193456786",
      date: "2022/01/06-2022/02/06",
    },
    {
      name: "JavaScript",
      barcode: "00193456786",
      date: "2022/01/06-2022/02/06",
    },
    {
      name: "JavaScript",
      barcode: "00193456786",
      date: "2022/01/06-2022/02/06",
    },
    {
      name: "JavaScript",
      barcode: "00193456786",
      date: "2022/01/06-2022/02/06",
    },
    {
      name: "JavaScript",
      barcode: "00193456786",
      date: "2022/01/06-2022/02/06",
    },
  ];
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            height: 80,
            flex: 1,
            justifyContent: "center",
            marginVertical: 10,
          }}
        >
          <Text
            style={{
              fontSize: 25,
              color: "#000",
              marginHorizontal: 10,
              fontWeight: "bold",
            }}
          >
            Welcome,
          </Text>
          <Text
            style={{
              fontSize: 35,
              color: "crimson",
              marginHorizontal: 10,
              fontWeight: "bold",
            }}
          >
            Bishal Bhandari
          </Text>
        </View>
        <View styles={styles.container}>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title style={styles.header}>
                Total books
              </DataTable.Title>
              <DataTable.Title style={styles.header}>
                Total books
              </DataTable.Title>
              <DataTable.Title style={styles.lastTableData}>
                Total books
              </DataTable.Title>
            </DataTable.Header>
            <DataTable.Row>
              <DataTable.Cell style={styles.tableData}>36</DataTable.Cell>
              <DataTable.Cell style={styles.tableData}>1</DataTable.Cell>
              <DataTable.Cell style={styles.lastTableData}>1</DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </View>
        <View style={{ marginVertical: 30 }}>
          <View style={{ alignItems: "center", flex: 1 }}>
            <Text style={{ fontSize: 25}}>Recent Activity</Text>
          </View>
          <View style={{paddingHorizontal: 10}}>
            {DATA.map((item, index) => {
              return (
                <Card key={index} style={{ marginTop: 10 }}>
                  <Card.Content>
                    <Title>{item.name}</Title>
                    <Text style={{opacity: 0.5}}>Barcode: {item.barcode}</Text>
                    <Text style={{opacity: 0.5}}>Date: {item.date}</Text>
                  </Card.Content>
                </Card>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tableData: {
    borderRightWidth: 1,
    borderRightColor: "#C5C5C5",
    flex: 1,
    justifyContent: "center",
  },
  header: {
    borderRightWidth: 1,
    borderRightColor: "#C5C5C5",
    flex: 1,
    justifyContent: "center",
  },
  lastTableData: {
    flex: 1,
    justifyContent: "center",
  },
});

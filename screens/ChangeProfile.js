import { Text, View, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { Avatar, Button, TextInput, Checkbox } from "react-native-paper";
import { Province, District } from "../constants/Address";
import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";

const provinceData = [];
const districtData = [];
Province.map((item) => {
  provinceData.push({ label: item.province, value: item.id });
});
District.map((item) => {
  districtData.push({
    label: item.district,
    value: item.id,
    provinceValue: item.provinceId
  });
});
export default function ChangeProfile() {
  const [permProvinceValue, setPermProvinceValue] = useState(null);
  const [permCheckValue, setPermCheckedValue] = useState(null);
  const [permDistrictValue, setPermDistrictValue] = useState(null);
  const [tempProvinceValue, setTempProvinceValue] = useState(null);
  const [tempCheckValue, setTempCheckedValue] = useState(null);
  const [tempDistrictValue, setTempDistrictValue] = useState(null);
  const [permAddressValue, setPermAddressValue] = useState("");
  const [permWardNoValue, setPermWardNoValue] = useState("");
  const [tempAddressValue, setTempAddressValue] = useState("");
  const [tempWardNoValue, setTempWardNoValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [checkBox, setCheckBox] = useState(false);
  const availablePermDistrict = districtData.filter(
    (d) => d.provinceValue === permCheckValue
  );
  const availableTempDistrict = districtData.filter(
    (d) => d.provinceValue === tempCheckValue
  );
  console.log("address: ", permAddressValue);
  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <View style={style.avatar}>
          <Avatar.Image
            size={150}
            source={{
              uri: "https://aestheticblasphemy.com/static/media/images/archive/JavaScript-TheGoodParts.jpg?itok=K3YlQY2x"
            }}
          />
        </View>
        <View style={style.editListItem}>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
            Personal Information
          </Text>
          <View style={style.viewStyle}>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>
              Full Name <Text style={{ color: "red" }}>*</Text>
            </Text>
            <TextInput mode="outlined" />
          </View>
          <View style={style.viewStyle}>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>
              Username <Text style={{ color: "red" }}>*</Text>
            </Text>
            <TextInput mode="outlined" />
          </View>
          <View style={style.viewStyle}>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>
              Email <Text style={{ color: "red" }}>*</Text>
            </Text>
            <TextInput mode="outlined" autoCapitalize="none" />
          </View>
          <View style={style.viewStyle}>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>
              Phone Number <Text style={{ color: "red" }}>*</Text>
            </Text>
            <TextInput mode="outlined" keyboardType="numeric" />
          </View>
        </View>
        <View style={style.editListItem}>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
            Permanent Address
          </Text>
          <View style={style.addressViewStyle}>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>
              Province <Text style={{ color: "red" }}>*</Text>
            </Text>
            <Dropdown
              style={[style.dropdown, isFocus && { borderColor: "blue" }]}
              placeholderStyle={style.placeholderStyle}
              selectedTextStyle={style.selectedTextStyle}
              inputSearchStyle={style.inputSearchStyle}
              iconStyle={style.iconStyle}
              data={provinceData}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? "Select province" : "..."}
              searchPlaceholder="Search..."
              value={permProvinceValue}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                setPermProvinceValue(item.value);
                setPermCheckedValue(item.value);
                setIsFocus(false);
              }}
            />
          </View>
          <View style={style.addressViewStyle}>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>
              District <Text style={{ color: "red" }}>*</Text>
            </Text>
            <Dropdown
              style={[style.dropdown, isFocus && { borderColor: "blue" }]}
              placeholderStyle={style.placeholderStyle}
              selectedTextStyle={style.selectedTextStyle}
              inputSearchStyle={style.inputSearchStyle}
              iconStyle={style.iconStyle}
              data={availablePermDistrict}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? "Select district" : "..."}
              searchPlaceholder="Search..."
              value={permDistrictValue}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                setPermDistrictValue(item.value);
                setIsFocus(false);
              }}
            />
          </View>
          <View style={style.viewStyle}>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>
              Address <Text style={{ color: "red" }}>*</Text>
            </Text>
            <TextInput
              mode="outlined"
              onChangeText={(Text) => setPermAddressValue(Text)}
              defaultValue={permAddressValue}
            />
          </View>
          <View style={style.viewStyle}>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>
              Ward no. <Text style={{ color: "red" }}>*</Text>
            </Text>
            <TextInput
              mode="outlined"
              keyboardType="numeric"
              onChangeText={(Text) => setPermWardNoValue(Text)}
            />
          </View>
        </View>
        <View style={style.editListItem}>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
            Temporary Address
          </Text>
          <View
            style={{
              marginTop: 10,
              flexWrap: "wrap",
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <Checkbox
              status={checkBox ? "checked" : "unchecked"}
              onPress={() => {
                setCheckBox(!checkBox);
              }}
              label="hello world"
            />
            <Text style={{ opacity: 0.5 }}>Same as permanent address</Text>
          </View>
          <View style={style.addressViewStyle}>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>Province</Text>
            <Dropdown
              style={[style.dropdown, isFocus && { borderColor: "blue" }]}
              placeholderStyle={style.placeholderStyle}
              selectedTextStyle={style.selectedTextStyle}
              inputSearchStyle={style.inputSearchStyle}
              iconStyle={style.iconStyle}
              data={provinceData}
              search
              maxHeight={300}
              disable={checkBox === true ? true : false}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? "Select province" : "..."}
              searchPlaceholder="Search..."
              value={checkBox === true ? permProvinceValue : tempProvinceValue}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                setTempProvinceValue(item.value);
                setTempCheckedValue(item.value);
                setIsFocus(false);
              }}
            />
          </View>
          <View style={style.addressViewStyle}>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>District</Text>
            <Dropdown
              style={[style.dropdown, isFocus && { borderColor: "blue" }]}
              placeholderStyle={style.placeholderStyle}
              selectedTextStyle={style.selectedTextStyle}
              inputSearchStyle={style.inputSearchStyle}
              iconStyle={style.iconStyle}
              data={availableTempDistrict}
              search
              disable={checkBox === true ? true : false}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? "Select district" : "..."}
              searchPlaceholder="Search..."
              value={checkBox === true ? permDistrictValue : tempDistrictValue}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                setTempDistrictValue(item.value);
                setIsFocus(false);
              }}
            />
          </View>
          <View style={style.viewStyle}>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>Address</Text>
            <TextInput
              mode="outlined"
              onChangeText={(Text) => setTempAddressValue(Text)}
              editable={checkBox === true ? false : true}
              value={checkBox === true ? permAddressValue : tempAddressValue}
            />
          </View>
          <View style={style.viewStyle}>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>Ward no.</Text>
            <TextInput
              mode="outlined"
              keyboardType="numeric"
              editable={checkBox === true ? false : true}
              onChangeText={(Text) => setTempWardNoValue(Text)}
              value={checkBox === true ? permWardNoValue : tempWardNoValue}
            />
          </View>
        </View>
        <View style={style.btn}>
          <Button mode="outlined" style={style.saveBtn}>
            Save
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 10
  },
  avatar: {
    alignItems: "center",
    marginTop: 20
  },
  editListItem: {
    backgroundColor: "#f6f6f6",
    borderRadius: 7,
    marginTop: 20
  },
  textField: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderRadius: 30,
    paddingLeft: 20,
    marginTop: 5
  },
  viewStyle: {
    marginTop: 10
  },
  saveBtn: {
    width: "40%"
  },
  btn: {
    marginVertical: 30,
    alignItems: "center"
  },
  addressViewStyle: {
    flex: 1,
    marginTop: 10
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: 10
  },
  icon: {
    marginRight: 5
  },
  label: {
    position: "absolute",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14
  },
  placeholderStyle: {
    fontSize: 16
  },
  selectedTextStyle: {
    fontSize: 16,
    color: "#000"
  },
  iconStyle: {
    width: 20,
    height: 20
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16
  }
});

import { View, Text, StyleSheet } from "react-native";
import React, { forwardRef } from "react";
import Subheader from "../components/Subheader";
import TabButton from "../components/Buttons/TabButton";
import BottomSheetWrapper, { Ref } from "../components/BottomSheetWrapper";

const OptionsBottomSheet = forwardRef<Ref>((props, ref) => {
  return (
    <View style={{ flex: 1 }}>
      <BottomSheetWrapper ref={ref} snapPoints={["50%"]}>
        <View style={styles.toggle}>
          <TabButton title="Delivery" isActive={true} />
          <TabButton title="Pickup" isActive={false} />
        </View>
        <Text style={styles.subheader}>Your Location</Text>
        <Subheader
          title="Your Location"
          icon="location-outline"
          link="/"
          //link="/(modal)/location-search"
        />
        <Text style={styles.subheader}>Arrival Time</Text>
        <Subheader title="Now" icon="stopwatch-outline" link="/" />
      </BottomSheetWrapper>
    </View>
  );
});

const styles = StyleSheet.create({
  toggle: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginBottom: 32,
  },
  subheader: {
    fontSize: 16,
    fontWeight: "600",
    margin: 16,
  },
});

export default OptionsBottomSheet;

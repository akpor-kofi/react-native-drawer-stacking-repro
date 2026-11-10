import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import React, { useState } from 'react';
import { Button, StatusBar, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { Drawer } from 'react-native-drawer-layout';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  const [open, setOpen] = useState(false);
  const { width } = useWindowDimensions();

  return (
    <GestureHandlerRootView style={styles.root}>
      <StatusBar hidden />
      <Drawer
        drawerType="front"
        drawerPosition="right"
        drawerStyle={{ width: Math.min(360, width * 0.88), backgroundColor: '#00ff00' }}
        overlayStyle={{ backgroundColor: '#440044' }}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        renderDrawerContent={() => <View style={styles.drawer} />}
      >
        <View style={styles.scene}>
          <Text style={styles.label}>react-native-drawer-layout 4.2.12</Text>
          <Button title="Open drawer" onPress={() => setOpen(true)} />
        </View>
      </Drawer>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1 },
  scene: { flex: 1, paddingTop: 30, paddingHorizontal: 16, backgroundColor: '#ff00ff' },
  drawer: { flex: 1, backgroundColor: '#00ff00' },
  label: { fontSize: 20, fontWeight: 'bold' },
});

registerRootComponent(App);

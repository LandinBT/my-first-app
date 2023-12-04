import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from "react-native-paper";
import { StyleSheet } from "react-native";

import Tasks from "./Tasks";
import NewTask from "./NewTask";

// constants
const Tab = createMaterialBottomTabNavigator();

const Menu = () => {
  const theme = useTheme();
  theme.colors.secondaryContainer = "e5e5e5";

  return (
    <Tab.Navigator
      tabBarActivateBackgroundColor="#fff"
      activeColor="#000"
      inactiveColor="#95a5a6"
      barStyle={styles.navigationBar}
    >
      <Tab.Screen
        name="Tareas"
        component={Tasks}
        options={{
          tabBarLabel: "Tareas",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="format-list-bulleted"
              color="#000"
              size={24}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Nueva Tarea"
        component={NewTask}
        options={{
          tabBarLabel: "Nueva Tarea",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="checkbox-marked-circle-plus-outline" color="#000" size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  navigationBar: {
    backgroundColor: "#fff"
  },
});

export default Menu;

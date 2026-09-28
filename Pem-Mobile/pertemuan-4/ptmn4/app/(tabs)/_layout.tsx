import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{
          title: 'Beranda',
          drawerLabel: 'Beranda',
        }}
      />

      <Drawer.Screen
        name="profile"
        options={{
          title: 'Profil',
          drawerLabel: 'Profil',
        }}
      />

      <Drawer.Screen
        name="explore"
        options={{
          drawerItemStyle: { display: 'none' },
        }}
      />
    </Drawer>
  );
}
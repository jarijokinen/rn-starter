import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { List, Switch } from 'react-native-paper';
import { mmkv } from '@/utils/mmkv';

const settingSwitch = (value: boolean, handler: () => void): JSX.Element => (
  <Switch value={value} onValueChange={handler} />
);

const SettingsScreen = (): JSX.Element => {
  const [settingOne, setSettingOne] = useState(false);

  useEffect(() => {
    loadSettingOne();
  }, []);

  const loadSettingOne = () => {
    setSettingOne(mmkv.getBoolean('setting.one') === true);
  };

  const onToggleSettingOne = () => {
    const val = !settingOne;
    setSettingOne(val);
    mmkv.set('setting.one', val);
  };

  return (
    <View>
      <List.Item
        title="Setting One"
        right={() => settingSwitch(settingOne, onToggleSettingOne)}
      />
    </View>
  );
};

export default SettingsScreen;

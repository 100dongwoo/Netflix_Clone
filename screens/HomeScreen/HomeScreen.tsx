import * as React from 'react';
import { FlatList, Image, StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import styles from './styles';
import categories from '../../assets/data/categories';

const firstCategory = categories.items[0];
const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={firstCategory.movies}
                renderItem={({ item }) => (
                    <Image
                        source={{
                            uri: item.poster,
                        }}
                        style={styles.image}
                    />
                )}
                horizontal
            />
        </View>
    );
};
export default HomeScreen;

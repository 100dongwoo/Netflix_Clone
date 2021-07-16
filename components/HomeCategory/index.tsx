import * as React from 'react';
import { FlatList, Image, StyleSheet } from 'react-native';
import { Text, View } from '../Themed';
import styles from './styles';
import categories from '../../assets/data/categories';

interface HomeCategoryProps {
    category: {
        id: string;
        title: string;
        movies: { id: string; poster: string }[];
    };
}

const HomeCategory = (props: HomeCategoryProps) => {
    const { category } = props;
    return (
        <>
            <Text style={styles.title}>{category.title}</Text>
            <FlatList
                data={category.movies}
                renderItem={({ item }) => (
                    <Image
                        source={{
                            uri: item.poster,
                        }}
                        style={styles.image}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </>
    );
};
export default HomeCategory;

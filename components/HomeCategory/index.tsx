import * as React from 'react';
import { FlatList, Image, Pressable, StyleSheet } from 'react-native';
import { Text, View } from '../Themed';
import styles from './styles';
import categories from '../../assets/data/categories';
import { useNavigation } from '@react-navigation/native';

interface HomeCategoryProps {
    category: {
        id: string;
        title: string;
        movies: { id: string; poster: string }[];
    };
}

const HomeCategory = (props: HomeCategoryProps) => {
    const navigation = useNavigation();
    const { category } = props;
    const onMoviePress = (movie) => {
        navigation.navigate('MovieDetailScreen', { id: movie.id });
    };
    return (
        <>
            <Text style={styles.title}>{category.title}</Text>
            <FlatList
                data={category.movies}
                renderItem={({ item }) => (
                    <Pressable onPress={() => onMoviePress(item)}>
                        <Image
                            source={{
                                uri: item.poster,
                            }}
                            style={styles.image}
                        />
                    </Pressable>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </>
    );
};
export default HomeCategory;

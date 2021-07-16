import React, { useEffect, useRef, useState } from 'react';
import styles from './styles';
import { Text, View } from 'react-native';
import { Episode } from '../../types';
import { Video } from 'expo-av';
import { Playback } from 'expo-av/build/AV';
import { unloadAllAsync } from 'expo-font';

interface VideoPlayerProps {
    episode: Episode;
}

const VideoPlayer = (props: VideoPlayerProps) => {
    const { episode } = props;

    const video = useRef<Playback>(null);
    const [status, setStatus] = useState({});
    useEffect(() => {
        if (!video) {
            return;
        }
        (async () => {
            await video?.current?.unloadAsync();
            await video?.current?.loadAsync({ uri: episode.video }, {}, false);
        })();
    }, [episode]);
    return (
        <Video
            ref={video}
            style={styles.video}
            source={{
                uri: episode.video,
            }}
            posterSource={{
                uri: episode.poster,
            }}
            posterStyle={{
                resizeMode: 'cover',
            }}
            usePoster={false}
            useNativeControls
            resizeMode="contain"
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
    );
};

export default VideoPlayer;

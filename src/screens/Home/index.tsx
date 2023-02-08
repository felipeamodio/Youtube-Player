import React, {useCallback, useState} from 'react';
import {View, ActivityIndicator, useWindowDimensions, Alert, Text} from 'react-native';
import YoutubeIframe, {PLAYER_STATES} from 'react-native-youtube-iframe';
import * as ScreenOrientation from 'expo-screen-orientation';

import { styles, VIDEO_HEIGHT, SCREEN_SPACE } from './styles';

export function Home() {
    const [videoReady, setVideoReady] = useState(false);
    
    const {width} = useWindowDimensions();

    const VIDEO_WIDTH = width - (SCREEN_SPACE * 2);

    const onFullScreenChange = useCallback((isFullScreen: boolean) => {
        if(isFullScreen){
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE); //deixa o celular deitado
        }else{
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT); //deixa o celular em pé
        }
    }, []);

    const onChangeState = useCallback((state: string) => {
        if(state === PLAYER_STATES.ENDED){
            Alert.alert('Eai, curtiu?', 'Não deixe de curtir, comentar e seguir o canal! 😅👍');
        }
    }, [])

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Youtube Player</Text>
            <View style={styles.player}>
                <YoutubeIframe 
                    videoId='3g1Tu2Ulrk0'
                    height={videoReady ? VIDEO_HEIGHT : 0}
                    width={VIDEO_WIDTH}
                    onReady={() => setVideoReady(true)}
                    onFullScreenChange={onFullScreenChange}
                    onChangeState={onChangeState}
                />

                { !videoReady 
                    &&
                    <ActivityIndicator 
                    color='#FFED00' 
                    size='large'
                    /> }
            </View>
            <Text style={styles.desc}>Project using a lib React Native Youtube-iframe</Text>
            <Text style={[styles.desc, {marginTop: 20}]}>and ScreenOrientation for a better performance</Text>
        </View>
    )
}
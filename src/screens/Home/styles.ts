import {StyleSheet} from 'react-native';

export const VIDEO_HEIGHT = 180;
export const SCREEN_SPACE = 24;

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#000000',
        padding: SCREEN_SPACE,
    },
    player: {
        width: '100%',
        height: VIDEO_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 48
    },
    title: {
        fontSize: 30,
        color: '#FFFFFF',
        fontWeight: '800',
        textAlign: 'center',
        marginTop: 40
    },
    desc: {
        fontSize: 17,
        color: '#FFFFFF',
        fontWeight: '800',
        marginTop: 60
    },
})
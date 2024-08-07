import { StyleSheet } from "react-native";
import { COLORS } from "../../constantes/colors";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: COLORS.primary
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    musicsRenderContainer: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center'
    },

    imageWrapper: {
        width: 300,
        height: 300,
        marginBottom: 25,
        shadowColor: COLORS.gray,
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.9,
        elevation: 3
    },

    image: {
        width: '100%',
        height: '100%',
        borderRadius: 15
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: COLORS.gray
    },

    artist: {
        fontSize: 16,
        fontWeight: '200',
        textAlign: 'center',
        color: COLORS.grayScale
    },

    slider: {
        width: 350,
        height: 40,
        marginTop: 25,
        flexDirection: 'row'
    },

    progressContainer: {
        width: 340,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    progressText: {
        color: COLORS.white
    },

    controls: {
        flexDirection: 'row',
        width: '60%',
        justifyContent: 'space-between',
        marginTop: 15
    },

    button: {
        marginTop: 20
    },

    bottomContainer: {
        borderTopColor: COLORS.secondary,
        borderTopWidth: 1,
        width: width,
        alignItems: 'center',
        paddingVertical: 15
    },

    boxItems: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%'
    }
})
import { Animated, Dimensions, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from './styles';
import { COLORS } from '../../constantes/colors';
import Slider from '@react-native-community/slider';
import { Audio } from 'expo-av';
import { musics } from '../../data';

const { width } = Dimensions.get('window');

export const MusicPlayer = () => {

    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.container}>
                <View style={{ width: width }}>
                    <Animated.FlatList
                        ref={musicSlider}
                        data={musics}
                        renderItem={({ item }) => (
                            <Animated.View style={styles.musicsRenderContainer}>
                                <View style={styles.imageWrapper}>
                                    <Image source={item.image} style={styles.image} />
                                </View>
                            </Animated.View>
                        )}
                        keyExtractor={(item) => item.id}
                        horizontal={true}
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={16}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { x: RolarX } } }],
                            { useNativeDriver: true }
                        )}
                    />
                </View>

                <View>
                    <Text style={styles.title}>{musics[musicIndex].title}</Text>
                    <Text style={styles.artist}>{musics[musicIndex].artist}</Text>
                </View>

                <View>
                    <Slider
                        style={styles.slider}
                        value={position}
                        minimumValue={0}
                        maximumValue={duration}
                        thumbTintColor="#2B7CB5"
                        minimumTrackTintColor="#2B7CB5"
                        maximumTrackTintColor="#FFFFFF"
                        
                    />
                    <View style={styles.progressContainer}>
                        <Text style={styles.progressText}>00:00</Text>
                        <Text style={styles.progressText}>00:00</Text>
                    </View>
                </View>

                <View style={styles.controls}>
                    <TouchableOpacity onPress={previousMusic}>
                        <Ionicons name="play-skip-back-outline" size={35} color='#2B7CB5' style={styles.button} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={isPlaying ? pauseSound : playSound}>
                        <Ionicons name={isPlaying ? "pause-circle" : "play-circle"} size={75} color='#2B7CB5' />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={nextMusic}>
                        <Ionicons name="play-skip-forward-outline" size={35} color='#2B7CB5' style={styles.button} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.bottomContainer}>
                <View style={styles.boxItems}>
                    <TouchableOpacity>
                        <Ionicons name="heart-outline" size={30} color={COLORS.gray} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="repeat" size={30} color={COLORS.gray} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="share-outline" size={30} color={COLORS.gray} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="ellipsis-horizontal" size={30} color={COLORS.gray} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

import React, { useState } from 'react'
import { View, Image } from 'react-native'
import { Feather } from '@expo/vector-icons'
import styles from '../../styles/form/primary'

import * as ImagePicker from 'expo-image-picker'

import Link from '../../components/form/Link'


const Upload = ({ label }) => {
    const [image, setImage] = useState(null)

    async function handleChoosePhoto() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri)
        }
    }

    function removePhoto() {
        setImage(null)
    }

    if (image) {
        return (
            <View style={{ ...styles.container, marginVertical: 10 }}>
                {image && <Image source={{ uri: image }} style={{ width: 180, height: 180, borderRadius: 90 }} />}
                <Link label='Remover Foto' onPress={removePhoto} />
            </View>
        )
    }

    return (
        <View style={{ ...styles.container, marginVertical: 10 }}>
            {/* <Image
                source={require('./Images/facebook.png')}
                style={styles.ImageIconStyle}
            /> */}
            <Feather name='camera' size={150} color='#EAEAEA' />
            <Link label={label} fontSize={15} onPress={handleChoosePhoto} />
        </View>
    )
}

export default Upload


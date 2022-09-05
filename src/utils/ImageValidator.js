import { Image } from 'react-native';

export async function isValidImageDimensionsPromise(uri, validWidth, validHeight) {
    return new Promise((resolve, reject) => { 
        Image.getSize(uri, (width, height) => { 

            console.log('Widt', width);
            console.log('height', height);

            if (width  === validWidth && height === validHeight) {
                return resolve(true);
            }

            return resolve(false);
        })
    })
}

import { Image } from 'react-native';

export async function isValidImageDimensionsPromise(uri, validWidth, validHeight) {
    return new Promise((resolve, reject) => {
        Image.getSize(uri, (width, height) => {

            console.log('Widt', width);
            console.log('height', height);

            if (width === validWidth && height === validHeight) {
                return resolve(true);
            }

            return resolve(false);
        })
    })
}

export function isAfterToday(date) {
    const today = new Date();

    today.setHours(23, 59, 59, 998);

    return date > today;
}

export function isValidURL(str) {
    console.log('test url', str);
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
}

export const TYPING = 'TYPING';
export const BACKGROUND_SOUND_CHANGED = 'BACKGROUND_SOUND_CHANGED';
export const SUBMIT = 'SUBMIT';

export const typing = (text) => {
    return {
        type: TYPING,
        payload: text
    }
}

export const backgroundSoundChanged = (url) => {
    return {
        type: BACKGROUND_SOUND_CHANGED,
        payload: url
    }
}
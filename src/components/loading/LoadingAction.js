export const SHOW_LOADING = 'SHOW_LOADING';
export const HIDE_LOADING = 'HIDDEN_LOADING';

export const show = () => {
    return {
        type: SHOW_LOADING
    }
}

export const hide = () => {
    return {
        type: HIDE_LOADING
    }
}
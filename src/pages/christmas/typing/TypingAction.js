export const TYPING = 'TYPING_ACTION';
export const INIT_MESSAGE = 'INIT_MESSAGE';

export const initMessage = (message) => {
    if(!message) {
        message = "Chúc ai đó được hạnh phúc bên nửa yêu thương! </br> " +
        "Chúc ai đó còn cô đơn sẽ tìm thấy bờ vai chia sẻ! </br>" +
        "Chúc ai đó sẽ gặp được nhau sau những ngày xa cách!</br>" +
        "Chúc ai đó có một mùa giáng sinh tràn đầy niềm vui,</br>hạnh phúc và bình yên thật nhiều!</br>" +
        "Chúc ai đó một năm mới nhiều may mắn,</br>gặt hái nhiều thành công trong học tập cũng như cuộc sống!!!</br>" +
        "Chúc ai đó luôn hạnh phúc ấm áp bên gia đình và người thân!</br>" +
        "</br></br>______________________BT__________";
    }
    return {
        type: INIT_MESSAGE,
        payload: message
    }
}
export const typing = (count) => {
    return {
        type: TYPING,
        payload: count
    }
}
export function open(url, title, width, height) {
    var y = window.outerHeight / 2 + window.screenY - ( height / 2)
    var x = window.outerWidth / 2 + window.screenX - ( width / 2)
    return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + width + ', height=' + height + ', top=' + y + ', left=' + x);
}
function setCookie(name, value, days) {
    let expires = '';
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie =
        name + '=' + encodeURIComponent(value) + expires + '; path=/';
}
function getCookie(name) {
    const nameEQ = name + '=';
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        cookie = cookie.trim();
        if (cookie.startsWith(nameEQ)) {
            return decodeURIComponent(cookie.substring(nameEQ.length));
        }
    }
    return null;
}
export { setCookie, getCookie };
export default { setCookie, getCookie };



export function setCookie(name, value, days) {
    let expires = "";
    console.log(1);

    if (days) {
        console.log(2);
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    console.log(3);
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
    console.log(4);
    console.log(document.cookie, 'document.cookie');
    console.log(5);
}

export function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

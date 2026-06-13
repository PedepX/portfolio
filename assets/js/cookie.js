document.cookie= "nome=Pedro";
console.log(document.cookie);

const dias = 7
const data = new Date();

data.setTime(data.getTime() + (dias * 24 * 60 * 60 * 1000));
document.cookie = `tema=dark; expires=${data.toUTCString()}`;

function getCookie(nome) {
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
        const item = cookie.trim();
        if (item.startsWith(nome + "=")) {
            return item.substring(nome.length + 1);
        }
    }
    return null;
}
console.log(getCookie("Pedro")); 
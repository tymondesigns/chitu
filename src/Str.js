
class Str {

    static capitalize (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    static contains (str, val) {
        return str.indexOf(val) !== -1;
    }

    static limit (str, limit = 100, end = '...') {
        return str.substring(0, limit) + end;
    }

    static random (length = 32) {
        // return (Math.random() + 1).toString(36).substring(length);
        let s = '';
        while (s.length < length && length > 0) {
            let r = Math.random();
            s += (r < 0.1 ? Math.floor(r * 100) : String.fromCharCode(Math.floor(r * 26) + (r > 0.5 ? 97 : 65)));
        }

        return s;
    }
}

export default Str;

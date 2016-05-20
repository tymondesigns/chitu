
class Str {

    static capitalize (str) {
        return str.replace(/(?:^|\s)\S/g, s => s.toUpperCase());
    }

    static ucfirst (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    static contains (str, val) {
        return str.indexOf(val) !== -1;
    }

    static limit (str, limit = 100, end = '...') {
        return str.substring(0, limit) + end;
    }

    static random (length = 32) {
        let s = '';
        while (s.length < length && length > 0) {
            let r = Math.random();
            s += (r < 0.1 ? Math.floor(r * 100) : String.fromCharCode(Math.floor(r * 26) + (r > 0.5 ? 97 : 65)));
        }

        return s;
    }

    /**
     * Determine if a given string starts with a given substring.
     *
     * @param   {String}   str       The string to check against
     * @param   {String}   val       The string to check start
     * @param   {Integer}  position  The position to start in the string
     *
     * @return  {Boolean}
     */
    static startsWith (str, val, position = 0) {
        return String.prototype.startsWith.call(str, val, position) || str.substr(position, val.length) === val;
    }
}

export default Str;

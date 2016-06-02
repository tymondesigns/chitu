import charMap from './charMap';

/**
 * Some String utilities
 */
class Str {

    /**
     * Capitalize all words in a string
     *
     * @param   {String}  str  The string to capitalize
     *
     * @return  {String}
     */
    static capitalize (str) {
        return str.replace(/(?:^|\s)\S/g, s => s.toUpperCase());
    }

    /**
     * Capitalize the first character in a string.
     *
     * @param   {String}  str  The string to capitalize
     *
     * @return  {String}
     */
    static ucfirst (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    /**
     * Lowercase the first character in a string.
     *
     * @param   {String}  str  The string to convert to lowercase
     *
     * @return  {String}
     */
    static lcfirst (str) {
        return str.charAt(0).toLowerCase() + str.slice(1);
    }

    /**
     * Determine if a given string contains a given string.
     *
     * @param   {String}   str           The haystack
     * @param   {String}   val           The needle
     * @param   {Integer}  [position=0]  The position to start
     *
     * @return  {Boolean}
     */
    static contains (str, val, position = 0) {
        return str.indexOf(val, position) !== -1;
    }

    /**
     * Limit a string to a given length with a suffix.
     *
     * @param   {String}  str          The string to limit
     * @param   {Number}  [limit=100]  The limit
     * @param   {String}  [end=...]    The suffix
     *
     * @return  {String}
     */
    static limit (str, limit = 100, end = '...') {
        return str.substring(0, limit) + (str.length > limit ? end : '');
    }

    /**
     * Generate a "random" alpha-numeric string.
     *
     * @param   {Number}  [length=32]  The length of the generated string
     *
     * @return  {String}
     */
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
     * @param   {String}   str           The string to check against
     * @param   {String}   val           The string to check start
     * @param   {Integer}  [position=0]  The position to start in the string
     *
     * @return  {Boolean}
     */
    static startsWith (str, val, position = 0) {
        return str.startsWith(val, position);
    }

    /**
     * Determine if a given string ends with a given substring.
     *
     * @param   {String}   str                    The string to check against
     * @param   {String}   val                    The string to check ending
     * @param   {Integer}  [position=str.length]  The position to end in the string
     *
     * @return  {Boolean}
     */
    static endsWith (str, val, position = str.length) {
        return str.endsWith(val, position);
    }

    /**
     * Determine if a given string is lowercase
     *
     * @param   {String}  str  The string to check
     *
     * @return  {Boolean}
     */
    static isLowerCase (str) {
        return str === str.toLowerCase();
    }

    /**
     * Determine if a given string is uppercase
     *
     * @param   {String}  str  The string to check
     *
     * @return  {Boolean}
     */
    static isUpperCase (str) {
        return str === str.toUpperCase();
    }

    /**
     * Strip all whitespace from a string.
     *
     * @param   {String}  str  The string to strip
     *
     * @return  {String}
     */
    static strip (str) {
        return str.replace(/\s+/g, '');
    }

    /**
     * Convert the string to Studly case
     *
     * @param   {String}  str  The string to convert
     *
     * @return  {String}
     */
    static studly (str) {
        return this.strip(this.capitalize(str.replace(/[_-]+/g, ' ')));
    }

    /**
     * Convert the string to Camel case
     *
     * @param   {String}  str  The string to convert
     *
     * @return  {String}
     */
    static camel (str) {
        return this.lcfirst(this.studly(str));
    }

    /**
     * Convert the string to Snake case
     *
     * @param   {String}  str            The string to convert
     * @param   {String}  [delimeter=_]  The delimeter to insert
     *
     * @return  {String}
     */
    static snake (str, delimeter = '_') {
        if (! this.isLowerCase(str)) {
            return this.strip(str).replace(/([A-Z])/g, `${delimeter}$1`).toLowerCase();
        }

        return str;
    }

    /**
     * Transliterate a UTF-8 value to ASCII.
     *
     * @param  {String}  str  The string to convert
     *
     * @return  {String}
     */
    static ascii (str) {
        for (let char in charMap) {
            charMap[char].forEach(c => {
                str = str.replace(c, char);
            });
        }

        return str;
    }

    static slug (str, separator = '-') {
        let val = this.ascii(str);

        // let flip = separator == '-' ? '_' : '-';

        

        return this.strip(val);
    }
}

export default Str;


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
     * @param   {String}  str  The haystack
     * @param   {String}  val  The needle
     *
     * @return  {Boolean}
     */
    static contains (str, val) {
        return str.indexOf(val) !== -1;
    }

    /**
     * Limit a string to a given length with a suffix.
     *
     * @param   {String}  str    The string to limit
     * @param   {Number}  limit  The limit
     * @param   {String}  end    The suffix
     *
     * @return  {String}
     */
    static limit (str, limit = 100, end = '...') {
        return str.substring(0, limit) + end;
    }

    /**
     * Generate a random string of a given length.
     *
     * @param   {Number}  length  The length of the generated string
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
     * @param   {String}   str       The string to check against
     * @param   {String}   val       The string to check start
     * @param   {Integer}  position  The position to start in the string
     *
     * @return  {Boolean}
     */
    static startsWith (str, val, position = 0) {
        return String.prototype.startsWith ?
            String.prototype.startsWith.call(str, val, position) :
            str.substr(position, val.length) === val;
    }

    // static endsWith () {

    // }

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
}

export default Str;

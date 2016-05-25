
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

    get charMap () {
        return {
            '0': ['°', '₀', '۰'],
            '1': ['¹', '₁', '۱'],
            '2': ['²', '₂', '۲'],
            '3': ['³', '₃', '۳'],
            '4': ['⁴', '₄', '۴', '٤'],
            '5': ['⁵', '₅', '۵', '٥'],
            '6': ['⁶', '₆', '۶', '٦'],
            '7': ['⁷', '₇', '۷'],
            '8': ['⁸', '₈', '۸'],
            '9': ['⁹', '₉', '۹'],
            'a': ['à', 'á', 'ả', 'ã', 'ạ', 'ă', 'ắ', 'ằ', 'ẳ', 'ẵ', 'ặ', 'â', 'ấ', 'ầ', 'ẩ', 'ẫ', 'ậ', 'ā', 'ą', 'å', 'α', 'ά', 'ἀ', 'ἁ', 'ἂ', 'ἃ', 'ἄ', 'ἅ', 'ἆ', 'ἇ', 'ᾀ', 'ᾁ', 'ᾂ', 'ᾃ', 'ᾄ', 'ᾅ', 'ᾆ', 'ᾇ', 'ὰ', 'ά', 'ᾰ', 'ᾱ', 'ᾲ', 'ᾳ', 'ᾴ', 'ᾶ', 'ᾷ', 'а', 'أ', 'အ', 'ာ', 'ါ', 'ǻ', 'ǎ', 'ª', 'ა', 'अ', 'ا'],
            'b': ['б', 'β', 'Ъ', 'Ь', 'ب', 'ဗ', 'ბ'],
            'c': ['ç', 'ć', 'č', 'ĉ', 'ċ'],
            'd': ['ď', 'ð', 'đ', 'ƌ', 'ȡ', 'ɖ', 'ɗ', 'ᵭ', 'ᶁ', 'ᶑ', 'д', 'δ', 'د', 'ض', 'ဍ', 'ဒ', 'დ'],
            'e': ['é', 'è', 'ẻ', 'ẽ', 'ẹ', 'ê', 'ế', 'ề', 'ể', 'ễ', 'ệ', 'ë', 'ē', 'ę', 'ě', 'ĕ', 'ė', 'ε', 'έ', 'ἐ', 'ἑ', 'ἒ', 'ἓ', 'ἔ', 'ἕ', 'ὲ', 'έ', 'е', 'ё', 'э', 'є', 'ə', 'ဧ', 'ေ', 'ဲ', 'ე', 'ए', 'إ', 'ئ'],
            'f': ['ф', 'φ', 'ف', 'ƒ', 'ფ'],
            'g': ['ĝ', 'ğ', 'ġ', 'ģ', 'г', 'ґ', 'γ', 'ဂ', 'გ', 'گ'],
            'h': ['ĥ', 'ħ', 'η', 'ή', 'ح', 'ه', 'ဟ', 'ှ', 'ჰ'],
            'i': ['í', 'ì', 'ỉ', 'ĩ', 'ị', 'î', 'ï', 'ī', 'ĭ', 'į', 'ı', 'ι', 'ί', 'ϊ', 'ΐ', 'ἰ', 'ἱ', 'ἲ', 'ἳ', 'ἴ', 'ἵ', 'ἶ', 'ἷ', 'ὶ', 'ί', 'ῐ', 'ῑ', 'ῒ', 'ΐ', 'ῖ', 'ῗ', 'і', 'ї', 'и', 'ဣ', 'ိ', 'ီ', 'ည်', 'ǐ', 'ი', 'इ'],
            'j': ['ĵ', 'ј', 'Ј', 'ჯ', 'ج'],
            'k': ['ķ', 'ĸ', 'к', 'κ', 'Ķ', 'ق', 'ك', 'က', 'კ', 'ქ', 'ک'],
            'l': ['ł', 'ľ', 'ĺ', 'ļ', 'ŀ', 'л', 'λ', 'ل', 'လ', 'ლ'],
            'm': ['м', 'μ', 'م', 'မ', 'მ'],
            'n': ['ñ', 'ń', 'ň', 'ņ', 'ŉ', 'ŋ', 'ν', 'н', 'ن', 'န', 'ნ'],
            'o': ['ó', 'ò', 'ỏ', 'õ', 'ọ', 'ô', 'ố', 'ồ', 'ổ', 'ỗ', 'ộ', 'ơ', 'ớ', 'ờ', 'ở', 'ỡ', 'ợ', 'ø', 'ō', 'ő', 'ŏ', 'ο', 'ὀ', 'ὁ', 'ὂ', 'ὃ', 'ὄ', 'ὅ', 'ὸ', 'ό', 'о', 'و', 'θ', 'ို', 'ǒ', 'ǿ', 'º', 'ო', 'ओ'],
            'p': ['п', 'π', 'ပ', 'პ', 'پ'],
            'q': ['ყ'],
            'r': ['ŕ', 'ř', 'ŗ', 'р', 'ρ', 'ر', 'რ'],
            's': ['ś', 'š', 'ş', 'с', 'σ', 'ș', 'ς', 'س', 'ص', 'စ', 'ſ', 'ს'],
            't': ['ť', 'ţ', 'т', 'τ', 'ț', 'ت', 'ط', 'ဋ', 'တ', 'ŧ', 'თ', 'ტ'],
            'u': ['ú', 'ù', 'ủ', 'ũ', 'ụ', 'ư', 'ứ', 'ừ', 'ử', 'ữ', 'ự', 'û', 'ū', 'ů', 'ű', 'ŭ', 'ų', 'µ', 'у', 'ဉ', 'ု', 'ူ', 'ǔ', 'ǖ', 'ǘ', 'ǚ', 'ǜ', 'უ', 'उ'],
            'v': ['в', 'ვ', 'ϐ'],
            'w': ['ŵ', 'ω', 'ώ', 'ဝ', 'ွ'],
            'x': ['χ', 'ξ'],
            'y': ['ý', 'ỳ', 'ỷ', 'ỹ', 'ỵ', 'ÿ', 'ŷ', 'й', 'ы', 'υ', 'ϋ', 'ύ', 'ΰ', 'ي', 'ယ'],
            'z': ['ź', 'ž', 'ż', 'з', 'ζ', 'ز', 'ဇ', 'ზ'],
            'aa': ['ع', 'आ', 'آ'],
            'ae': ['ä', 'æ', 'ǽ'],
            'ai': ['ऐ'],
            'at': ['@'],
            'ch': ['ч', 'ჩ', 'ჭ', 'چ'],
            'dj': ['ђ', 'đ'],
            'dz': ['џ', 'ძ'],
            'ei': ['ऍ'],
            'gh': ['غ', 'ღ'],
            'ii': ['ई'],
            'ij': ['ĳ'],
            'kh': ['х', 'خ', 'ხ'],
            'lj': ['љ'],
            'nj': ['њ'],
            'oe': ['ö', 'œ', 'ؤ'],
            'oi': ['ऑ'],
            'oii': ['ऒ'],
            'ps': ['ψ'],
            'sh': ['ш', 'შ', 'ش'],
            'shch': ['щ'],
            'ss': ['ß'],
            'sx': ['ŝ'],
            'th': ['þ', 'ϑ', 'ث', 'ذ', 'ظ'],
            'ts': ['ц', 'ც', 'წ'],
            'ue': ['ü'],
            'uu': ['ऊ'],
            'ya': ['я'],
            'yu': ['ю'],
            'zh': ['ж', 'ჟ', 'ژ'],
            '(c)': ['©'],
            'A': ['Á', 'À', 'Ả', 'Ã', 'Ạ', 'Ă', 'Ắ', 'Ằ', 'Ẳ', 'Ẵ', 'Ặ', 'Â', 'Ấ', 'Ầ', 'Ẩ', 'Ẫ', 'Ậ', 'Å', 'Ā', 'Ą', 'Α', 'Ά', 'Ἀ', 'Ἁ', 'Ἂ', 'Ἃ', 'Ἄ', 'Ἅ', 'Ἆ', 'Ἇ', 'ᾈ', 'ᾉ', 'ᾊ', 'ᾋ', 'ᾌ', 'ᾍ', 'ᾎ', 'ᾏ', 'Ᾰ', 'Ᾱ', 'Ὰ', 'Ά', 'ᾼ', 'А', 'Ǻ', 'Ǎ'],
            'B': ['Б', 'Β', 'ब'],
            'C': ['Ç', 'Ć', 'Č', 'Ĉ', 'Ċ'],
            'D': ['Ď', 'Ð', 'Đ', 'Ɖ', 'Ɗ', 'Ƌ', 'ᴅ', 'ᴆ', 'Д', 'Δ'],
            'E': ['É', 'È', 'Ẻ', 'Ẽ', 'Ẹ', 'Ê', 'Ế', 'Ề', 'Ể', 'Ễ', 'Ệ', 'Ë', 'Ē', 'Ę', 'Ě', 'Ĕ', 'Ė', 'Ε', 'Έ', 'Ἐ', 'Ἑ', 'Ἒ', 'Ἓ', 'Ἔ', 'Ἕ', 'Έ', 'Ὲ', 'Е', 'Ё', 'Э', 'Є', 'Ə'],
            'F': ['Ф', 'Φ'],
            'G': ['Ğ', 'Ġ', 'Ģ', 'Г', 'Ґ', 'Γ'],
            'H': ['Η', 'Ή', 'Ħ'],
            'I': ['Í', 'Ì', 'Ỉ', 'Ĩ', 'Ị', 'Î', 'Ï', 'Ī', 'Ĭ', 'Į', 'İ', 'Ι', 'Ί', 'Ϊ', 'Ἰ', 'Ἱ', 'Ἳ', 'Ἴ', 'Ἵ', 'Ἶ', 'Ἷ', 'Ῐ', 'Ῑ', 'Ὶ', 'Ί', 'И', 'І', 'Ї', 'Ǐ', 'ϒ'],
            'K': ['К', 'Κ'],
            'L': ['Ĺ', 'Ł', 'Л', 'Λ', 'Ļ', 'Ľ', 'Ŀ', 'ल'],
            'M': ['М', 'Μ'],
            'N': ['Ń', 'Ñ', 'Ň', 'Ņ', 'Ŋ', 'Н', 'Ν'],
            'O': ['Ó', 'Ò', 'Ỏ', 'Õ', 'Ọ', 'Ô', 'Ố', 'Ồ', 'Ổ', 'Ỗ', 'Ộ', 'Ơ', 'Ớ', 'Ờ', 'Ở', 'Ỡ', 'Ợ', 'Ø', 'Ō', 'Ő', 'Ŏ', 'Ο', 'Ό', 'Ὀ', 'Ὁ', 'Ὂ', 'Ὃ', 'Ὄ', 'Ὅ', 'Ὸ', 'Ό', 'О', 'Θ', 'Ө', 'Ǒ', 'Ǿ'],
            'P': ['П', 'Π'],
            'R': ['Ř', 'Ŕ', 'Р', 'Ρ', 'Ŗ'],
            'S': ['Ş', 'Ŝ', 'Ș', 'Š', 'Ś', 'С', 'Σ'],
            'T': ['Ť', 'Ţ', 'Ŧ', 'Ț', 'Т', 'Τ'],
            'U': ['Ú', 'Ù', 'Ủ', 'Ũ', 'Ụ', 'Ư', 'Ứ', 'Ừ', 'Ử', 'Ữ', 'Ự', 'Û', 'Ū', 'Ů', 'Ű', 'Ŭ', 'Ų', 'У', 'Ǔ', 'Ǖ', 'Ǘ', 'Ǚ', 'Ǜ'],
            'V': ['В'],
            'W': ['Ω', 'Ώ', 'Ŵ'],
            'X': ['Χ', 'Ξ'],
            'Y': ['Ý', 'Ỳ', 'Ỷ', 'Ỹ', 'Ỵ', 'Ÿ', 'Ῠ', 'Ῡ', 'Ὺ', 'Ύ', 'Ы', 'Й', 'Υ', 'Ϋ', 'Ŷ'],
            'Z': ['Ź', 'Ž', 'Ż', 'З', 'Ζ'],
            'AE': ['Ä', 'Æ', 'Ǽ'],
            'CH': ['Ч'],
            'DJ': ['Ђ'],
            'DZ': ['Џ'],
            'GX': ['Ĝ'],
            'HX': ['Ĥ'],
            'IJ': ['Ĳ'],
            'JX': ['Ĵ'],
            'KH': ['Х'],
            'LJ': ['Љ'],
            'NJ': ['Њ'],
            'OE': ['Ö', 'Œ'],
            'PS': ['Ψ'],
            'SH': ['Ш'],
            'SHCH': ['Щ'],
            'SS': ['ẞ'],
            'TH': ['Þ'],
            'TS': ['Ц'],
            'UE': ['Ü'],
            'YA': ['Я'],
            'YU': ['Ю'],
            'ZH': ['Ж'],
            ' ': ['\xC2\xA0', '\xE2\x80\x80', '\xE2\x80\x81', '\xE2\x80\x82', '\xE2\x80\x83', '\xE2\x80\x84', '\xE2\x80\x85', '\xE2\x80\x86', '\xE2\x80\x87', '\xE2\x80\x88', '\xE2\x80\x89', '\xE2\x80\x8A', '\xE2\x80\xAF', '\xE2\x81\x9F', '\xE3\x80\x80']
        };
    }
}

export default Str;

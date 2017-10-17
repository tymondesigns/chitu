

export default function ordinal (num) {
    const suffix = ['th', 'st', 'nd', 'rd'];
    let v = num % 100;

    return num + (suffix[(v - 20) % 10] || suffix[v] || suffix[0]);
}

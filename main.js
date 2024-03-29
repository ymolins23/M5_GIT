const gcd = (a, b) => (!b ? a : gcd(b, a % b));
const gcdMultiple = (...arr) => [...arr].reduce((a, b) => gcd(a, b));

gcdMultiple(8, 3);
gcdMultiple(...[12, 8, 3]);


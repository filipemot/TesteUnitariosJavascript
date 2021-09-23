const sum = (a, b) => a + b;

const inOneHour = () => {
    const now = Date.now();
    const oneHourInMilliseconds = 60 * 60 * 1000;
    return now + oneHourInMilliseconds;
};

module.exports = { sum, inOneHour };
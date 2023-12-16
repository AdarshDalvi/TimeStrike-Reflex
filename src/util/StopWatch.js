const addZeros = (timeUnit, millis = false) => {
    let updatedTimeUnit = timeUnit;
    if (millis) {
        updatedTimeUnit =
            timeUnit < 10
                ? `00${timeUnit}`
                : timeUnit < 100
                  ? `0${timeUnit}`
                  : timeUnit;
    } else if (timeUnit < 10) {
        updatedTimeUnit = '0' + timeUnit;
    }
    return updatedTimeUnit;
};

const formatTime = (stopWatchTime) => {
    let minutes = `${Math.floor(stopWatchTime / 60000) % 60}`.slice(-2);
    let seconds = `${Math.floor((stopWatchTime / 1000) % 60)}`.slice(-2);
    let milliseconds = `${stopWatchTime % 1000}`.slice(-3);

    return `${addZeros(minutes)}:${addZeros(seconds)}.${addZeros(
        milliseconds,
        true
    )} `;
};

export { addZeros, formatTime };

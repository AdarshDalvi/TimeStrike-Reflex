import { useEffect, useState } from "react"

export default function StopWatch({ targetTime }) {

    const [stopWatchTime, setStopWatchTime] = useState(0)

    const [isTimeRunning, setIsTimeRunning] = useState(false)


    useEffect(() => {
        let interval = null

        if (isTimeRunning) {
            interval = setInterval(() => {
                setStopWatchTime((prevTime) => prevTime + 10)
            }, 10)
        } else {
            clearInterval(interval)
        }

        // Additional check to stop the timer when it reaches or exceeds the target time
        if (stopWatchTime >= targetTime * 1000) {
            setIsTimeRunning(false);
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval)
        }
    }, [isTimeRunning, stopWatchTime])

    const formatTime = () => {
        let minutes = `${Math.floor(stopWatchTime / 60000) % 60}`.slice(-2)
        let seconds = `${Math.floor((stopWatchTime / 1000) % 60)}`.slice(-2)
        let milliseconds = `${(stopWatchTime % 1000)}`.slice(-3)

        return `${addZeros(minutes)}:${addZeros(seconds)}.${addZeros(milliseconds, true)} `
    }

    const addZeros = (timeUnit, millis = false) => {
        let updatedTimeUnit = timeUnit
        if (millis) {
            updatedTimeUnit = timeUnit < 10 ? `00${timeUnit}` : timeUnit < 100 ? `0${timeUnit}` : timeUnit
        } else if (timeUnit < 10) {
            updatedTimeUnit = '0' + timeUnit
        }
        return updatedTimeUnit
    }

    return (
        <>
            <button onClick={() => setIsTimeRunning(prevTimeValue => !prevTimeValue)} className="bg-black text-white px-6 py-2 rounded font-medium mb-8">{isTimeRunning ? 'Stop' : 'Start'}</button>
            <p className={`text-black text-xl font-semibold ${stopWatchTime >= targetTime * 1000 && 'animate-blink'}`} >
                {formatTime()}
            </p>
        </>
    )
}


// const formatTime = () => {
//     const seconds = Math.floor(time / 1000);
//     const milliseconds = (time % 1000);

//     const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
//     const displayMilliseconds = milliseconds < 10 ? `00${milliseconds}` : milliseconds < 100 ? `0${milliseconds}` : milliseconds;

//     return `${displaySeconds}.${displayMilliseconds}`;
// };
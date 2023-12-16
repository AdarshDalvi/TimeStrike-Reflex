import { useEffect, useState, useRef } from "react"
import DialogModal from "./DialogModal"
import { formatTime } from "../util/StopWatch"

export default function StopWatch({ targetTime }) {

    const [stopWatchTimer, setStopWatchTimer] = useState(0)
    const [stopWatchStarted, setStopWatchStarted] = useState(false)
    const [stopWatchEnded, setStopWatchEnded] = useState(false)
    const dialogRef = useRef()

    useEffect(() => {
        let intervalId = null

        if (stopWatchStarted && !(stopWatchTimer >= targetTime * 1000) && !stopWatchEnded) {
            intervalId = setInterval(() => {
                setStopWatchTimer(prevTime => prevTime + 10)
            }, 10)
        } else {
            clearInterval(intervalId)
        }


        if (stopWatchTimer >= targetTime * 1000 || stopWatchEnded) {
            dialogRef.current.open()
        }


        return () => clearInterval(intervalId)

    }, [stopWatchTimer, stopWatchStarted])

    const startTimer = () => {
        setStopWatchStarted(true)
    }

    const stopTimer = () => {
        setStopWatchEnded(true)
    }

    const resetTimer = () => {
        setStopWatchTimer(0)
        setStopWatchStarted(false)
        setStopWatchEnded(false)
    }

    return (
        <>
            <DialogModal targetTime={targetTime} resetStopWatchTimer={resetTimer} stopWatchTimer={stopWatchTimer} ref={dialogRef} />
            <button onClick={stopWatchStarted ? stopTimer : startTimer} className="bg-black  text-white px-6 py-2 rounded font-medium mb-8">{!stopWatchStarted ? 'Start' : 'Stop'}</button>
            <p className={`text-black text-xl font-semibold ${stopWatchTimer >= targetTime * 1000 && 'animate-blink'}`} >
                {formatTime(stopWatchTimer)}
            </p>
        </>
    )
}

import { forwardRef, useRef, useImperativeHandle } from 'react'
import ReactDOM from 'react-dom'
import { formatTime } from '../util/StopWatch'

function DialogModal({ targetTime, resetStopWatchTimer, stopWatchTimer }, ref) {
    const currentDialogRef = useRef()
    useImperativeHandle(ref, () => {
        return {
            open: () => currentDialogRef.current.showModal()
        }
    }, [])
    const remainingTime = targetTime * 1000 - stopWatchTimer
    const userLost = remainingTime <= 0
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100)

    return ReactDOM.createPortal(
        <dialog ref={currentDialogRef} className='backdrop:bg-black/90 p-8  bg-[#d7fcf8] rounded-lg open:animate-slideInFromTop'>
            <h1 className='text-5xl mb-1'>{userLost ? 'You Lost' : `Your Accuracy: ${score}%`}</h1>
            <p className='text-lg'>The target time was <strong className='text-[#10655b]'>{targetTime} seconds.</strong></p>
            <p className='text-lg'>You stopped the timer with <strong className='text-[#10655b]'>{formatTime(remainingTime)} seconds left.</strong></p>
            <form method="dialog" className='text-right'>
                <button onClick={resetStopWatchTimer} className='mt-4 py-2 px-4 border-none bg-[#12352f] text-lg cursor-pointer rounded text-white hover:bg-[#051715]'>Close</button>
            </form>
        </dialog>,
        document.getElementById('modal')
    )
}

export default forwardRef(DialogModal)


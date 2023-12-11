import { useRef, useState } from "react"

export default function Player() {
    const inputRef = useRef()
    const [playerName, setPlayerName] = useState('')

    function handleClick() {
        setPlayerName(inputRef.current.value)
    }
    return (
        <>
            <h2 className="font-bold text-custom-turqoise pb-4">Welcome {playerName ? playerName : 'unknown entity'}!</h2>
            <div className="flex w-full max-w-[24rem] ">
                <input ref={inputRef} required name="playerName" type="text" className="w-9/12 focus:outline-none pl-3 pr-2 py-2 border-[1.5px] rounded-tl rounded-bl border-solid border-custom-turqoise bg-[#192f2b]" />
                <button className="flex-1 py-1.5 bg-custom-turqoise border-solid border-custom-turqoise -ml-0.5 rounded-r rounded-br text-[#061e1a] text-sm font-semibold focus:outline-none" onClick={handleClick}>
                    Set Name</button>
            </div>
        </>
    )
}

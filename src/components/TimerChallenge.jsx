import StopWatch from "./StopWatch";

export default function TimerChallenge({ title, time }) {
    return (
        <div className="flex flex-col items-center w-full max-w-xs rounded pt-4 px-4 pb-8  bg-gradient-to-b from-[#4df8df] to-[#4df0f8] self-start">
            <h2 className="text-black font-semibold mb-2">{title}</h2>
            <p className="text-black border-[1px] px-4 py-1 rounded border-slate-700 text-sm font-medium mb-8">{time} second</p>
            <StopWatch targetTime={time} />
        </div>
    )
}

import Player from "./components/Player"
import TimerChallenge from "./components/TimerChallenge"


function App() {




  return (
    <>
      <h1 className="mb-2">
        The <span className="text-cyan-400">TimeStrike</span> Reflex
      </h1>
      <p className="text-lg text-center mb-4">StopTime Reflex challenges you to halt the timer at the exact set time for high scores!</p>
      <Player />
      <div className="flex w-full flex-wrap justify-evenly gap-y-20 gap-x-8 mt-12">
        <TimerChallenge
          title='Easy'
          time={10}
        />
        <TimerChallenge
          title='Easy'
          time={6}
        />
        <TimerChallenge
          title='Easy'
          time={2}
        />
        <TimerChallenge
          title='Easy'
          time={1}
        />
      </div>
    </>
  )
}

export default App

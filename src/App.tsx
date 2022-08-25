function App() {
  return (
    <div className="w-screen min-h-screen grid place-items-center bg-slate-700 py-8">
      {/* Player outside + border */}
      <div className="w-[28rem] h-[38rem] rounded-3xl shadow grid place-items-center p-1 bg-gradient-to-br from-sky-500 via-blue-700 to-violet-500">
        {/* Player inside */}
        <div className="w-full h-full rounded-[21px] flex flex-col overflow-hidden relative">
          {/* Cloudy bg */}
          <div className="absolute inset-0 ui-bg z-0"></div>
          {/* List */}
          <div className="flex-grow w-full z-10">
            <ul>
              <li>yuh</li>
            </ul>
          </div>
          {/* Player */}
          <div className="h-36 w-full backdrop-blur-md bg-black/40 z-20 rounded-t-3xl border-t border-gray-50 border-opacity-20 flex flex-col justify-center">
            {/* Handle */}
            <div className="mb-3 w-9 h-[5px] mx-auto rounded-full bg-white/20"></div>
            {/* Art + player row */}
            <div className="justify-between flex flex-row mx-5">
              {/* Artwork + title */}
              <div className="flex flex-row items-center mb-3">
                <div className="bg-red-500 rounded w-14 h-14"></div>
                <div className="flex flex-col ml-3">
                  <h1 className="text-white">You Right</h1>
                  <h2 className="text-white/60 text-sm">
                    Doja Cat & The Weeknd
                  </h2>
                </div>
              </div>
              {/* Control Buttons */}
              <div className="flex flex-row items-center space-x-3">
                <div className="bg-white/60 rounded w-8 h-8"></div>
                <div className="bg-white rounded w-10 h-10"></div>
                <div className="bg-white/60 rounded w-8 h-8"></div>
              </div>
            </div>
            {/* Slider */}
            <div className="flex flex-row justify-between items-center mx-5">
              <span className="text-white/50 text-sm">1:11</span>
              <div className="h-1 bg-white flex-grow rounded-full mx-3"></div>
              <span className="text-white/80 text-sm">3:25</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

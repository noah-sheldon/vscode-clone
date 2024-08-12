

export default function Home() {
  return (
    <div className="lg:container mx-auto inline-block">
      <section className="flex h-10 m-4 justify-between items-center">
        <div className="flex h-10 m-4 justify-between items-center">
          <img className="h-8" src="download.png" alt="Visual Studio Logo"/>
          <h1 className="text-xl font-bold p-4">Visual Studio Code</h1>
          <ul className="flex items-center">
            <a><li className="p-4 cursor-pointer font-semibold text-slate-400 hover:text-slate-200">Docs</li ></a>
            <a><li className="p-4 cursor-pointer font-semibold text-slate-400 hover:text-slate-200">Updates</li ></a>
            <a><li className="p-4 cursor-pointer font-semibold text-slate-400 hover:text-slate-200">Blog</li ></a>
            <a><li className="p-4 cursor-pointer font-semibold text-slate-400 hover:text-slate-200">API</li ></a>
            <a><li className="p-4 cursor-pointer font-semibold text-slate-400 hover:text-slate-200">Extensions</li ></a>
            <a><li className="p-4 cursor-pointer font-semibold text-slate-400 hover:text-slate-200">FAQ</li ></a>
            <a><li className="p-4 cursor-pointer font-semibold text-slate-400 hover:text-slate-200">Learn</li ></a>
          </ul>
        </div>
        <div className="flex items-center h-8">
          <img className="p-4 rounded" src="https://code.visualstudio.com/assets/icons/theme-light.svg" alt="dark mode toggle" />
          <input className="rounded bg-black" type="search" value="Search Docs" id="" />
          <button className="ml-4 px-4 h-8 bg-[#0078D4] hover:bg-[#0069b9] cursor-pointer items-center rounded" name="" id="" >Download</button>
        </div>
      </section>
      <section className="flex items-center justify-center">
        <p><a href="https://code.visualstudio.com/updates" className="decoration-underline">Version 1.92</a> is now available! Read about the new features and fixes from July.</p>
        <button type="button" className="justify-end items-end">X</button>
      </section>
    </div>
    
  );
}

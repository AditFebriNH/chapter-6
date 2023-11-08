const Footer = () => {
  return (
    <div className="grid grid-cols-1 bg-slate-950 px-6 py-10 md:px-10 lg:grid-cols-2">
      <div className="md:ml-40">
        <h1 className="text-6xl font-bold text-red-700">Movielist</h1>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-2 lg:grid-cols-3">
        <div className="text-white">
          <h2 className="text-lg font-bold md:text-2xl lg:text-3xl xl:text-4xl ">
            TEAM 5
          </h2>
          <div className="mt-2 flex flex-col md:mt-4 md:text-2xl xl:text-2xl ">
            <p>Arwin</p>
            <p>Alivia</p>
            <p>Adit</p>
            <p>Melinda</p>
          </div>
        </div>
        <div className="text-white">
          <h2 className="text-lg font-bold md:text-2xl lg:text-3xl xl:text-4xl ">
            RESOURCE
          </h2>
          <div className="mt-2 flex flex-col md:mt-4 md:text-2xl xl:text-2xl ">
            <p>Tailwinds</p>
            <p>JavaScripts</p>
            <p>React JS</p>
            <p>TMBD API</p>
          </div>
        </div>
        <div className=" text-white">
          <h1 className="text-lg font-bold md:text-2xl xl:text-4xl  ">TOOLS</h1>
          <div className="mt-2 flex flex-col md:mt-4 md:text-lg  xl:text-2xl ">
            <p>Github</p>
            <p>Visual Studio Code</p>
            <p>Postman</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

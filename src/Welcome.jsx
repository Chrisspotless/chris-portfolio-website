function Welcome(props) {

  return ( 

    // Build a portfolio website
    
    <div className=" mx-auto p-4 rounded-lg shadow-md bg-slate-950 text-white">
      <h1>  {props.logo} {props.links}</h1>
    </div>
  );
}

export default Welcome;

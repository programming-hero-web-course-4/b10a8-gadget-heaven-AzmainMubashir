import { useEffect } from "react";

const Error = () => {

  useEffect(()=> {
    document.title ="Page Not Found | Gadget Heaven"
})
    return (
        <div>
            <div className="hero bg-white min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Error 404</h1>
      <p className="py-6">
      The page you are looking for might be removed or is temporarily unavailable.
      <br /><br />
      Please try again later.
      </p>
      <a href="/" className="btn btn-primary bg-purple-600 text-white border-none px-5 font-medium text-base hover:bg-purple-800">Home</a>
    </div>
  </div>
</div>            
        </div>
    );
};

export default Error;
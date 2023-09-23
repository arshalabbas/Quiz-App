const Error = () => {
  return (
    <div className="flex_center h-screen flex-col">
      <div>
        <h1 className="font-biryani text-black text-xl text-center">
          <span className="font-bold">Error 404</span> | Page Not Found
        </h1>
      </div>

      <div>
        <a href="/" className="text-blue-500 underline">
          Home
        </a>
      </div>
    </div>
  );
};

export default Error;

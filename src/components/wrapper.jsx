const Wrapper = ({ children }) => {
  return (
    <>
      <div className="h-full flex flex-col min-h-screen">{children}</div>
    </>
  );
};

export default Wrapper;

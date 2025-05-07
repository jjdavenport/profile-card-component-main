const Wrapper = ({ children }) => {
  return (
    <>
      <div className="font-custom bg-images bg-size bg-dark-cyan flex h-full min-h-screen flex-col bg-size-(--size) bg-position-(--position) bg-no-repeat text-base md:bg-size-(--size-md) md:bg-position-(--position-md)">
        {children}
      </div>
    </>
  );
};

export default Wrapper;

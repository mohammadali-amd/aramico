const productLayout = ({ children }) => {
  return (
    <div className="flex">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {children}
        </div>
    </div>
  );
};

export default productLayout;
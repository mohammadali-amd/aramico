const Divider = ({ width = 90, mb = 30, mt = 8 }) => {
  return (
    <hr
      style={{
        border: "1px solid var(--primary)",
        height: "1px",
        width: `${width}px`,
        marginBottom: `${mb}px`,
        marginTop: `${mt}px`,
      }}
    // className={`w-${width} h-[2px] bg-primary border-0 mb-${mb} mt-${mt}`}
    />
  );
};

export default Divider;

const Divider = ({width = '32', mb = '6', mt = '2'}) => {
  return (
    <hr className={`w-${width} h-[2px] bg-primary border-0 mb-${mb} mt-${mt}`} />
  );
};

export default Divider;
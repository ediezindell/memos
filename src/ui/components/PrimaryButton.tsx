const PrimaryButtton = ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<"button">) => {
  return (
    <button
      type="button"
      className="bg-primary hover:opacity-80 text-white py-2 px-4 w-full"
      {...props}
    >
      {children}
    </button>
  );
};
export default PrimaryButtton;

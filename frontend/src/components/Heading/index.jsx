
const SectionHeading = ({
  as: Tag = "h2", 
  children,
  align = "left",
  color = "text-red-500",
  className = "",
}) => {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <Tag
      className={`text-2xl md:text-3xl font-bold mb-6 ${color} ${alignment} ${className}`}
    >
      {children}
    </Tag>
  );
};

export default SectionHeading;

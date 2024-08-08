export const CustomButton = ({
  borderColor,
  title,
}: {
  borderColor: string;
  title: string;
}) => {
  return (
    <button
      style={{
        border: `2px solid ${borderColor}`,
        padding: "10px 20px",
        cursor: "pointer",
        margin: 2,
        borderRadius: 8,
        backgroundColor: "transparent",
        color: "white",
      }}
    >
      {title}
    </button>
  );
};

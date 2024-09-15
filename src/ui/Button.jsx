export default function Button({ children, width }) {
  const defaultClass =
    "py-[6px] px-4 bg-gray-900 text-gray-50 border-0 rounded-xl text-base hover-shadow hover:shadow-4xl hover:scale-[1.02]";
  const maxWidth = width || "max-w-[136px]";

  function handleClick() {
    window.open("https://drive.google.com/file/d/1S26ev_DSaCQGpeKQyYNVTD8F6VMiSZ5Z/view?usp=sharing ");
  }
  return (
    <button className={`${defaultClass} ${maxWidth}`} onClick={handleClick}>
      {children}
    </button>
  );
}

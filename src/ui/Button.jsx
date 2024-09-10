export default function Button({ children, width }) {
  const defaultClass = "py-[6px] px-4 bg-gray-900 text-gray-50 border-0 rounded-xl text-base";
  const maxWidth = width || "max-w-[136px]";
  return <button className={`${defaultClass} ${maxWidth}`}>{children}</button>;
}

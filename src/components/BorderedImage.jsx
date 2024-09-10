export default function BorderedImage({ src, shadowPos, size, borderColor }) {
  const imageSize =
    size === "big" ? { maxHeight: "480px", maxWidth: "100%" } : { maxHeight: "320px", maxWidth: "100%" };
  const shadowSize = size === "big" ? { height: "240px" } : { height: "260px" };

  return (
    <div
      className={`flex relative z-0 mx-auto justify-center p-4 md:p-0`}
      style={{ maxWidth: imageSize.maxWidth }}
    >
      <img
        src={`/images/${src}`}
        alt="me"
        className={`h-full object-cover border-8 ${borderColor}`}
        style={{ maxHeight: imageSize.maxHeight }}
      />
      <div
        className={`absolute hidden sm:block bg-gray-200 -z-10  w-full top-4
        ${shadowPos == "right" ? "-right-5 animate-swanging-right" : "-left-5 animate-swanging-left"}`}
        style={{ height: imageSize.maxHeight }}
      ></div>
      <div
        className={`absolute block sm:hidden bg-gray-200 -z-10 bottom-0`}
        style={{
          width: imageSize.maxWidth,
          height: shadowSize.height,
        }}
      ></div>
    </div>
  );
}

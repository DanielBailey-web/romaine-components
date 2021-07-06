import React, { useEffect } from "react";
import { IconWrapper } from ".";
import { useRomaine } from "romaine";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export const PerspectiveIcon = (props: Props) => {
  const { setMode } = useRomaine();
  useEffect(() => {
    // using keydown because it already requires another key to be pressed
    const eventListenerPerspective = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === "C") {
        e.preventDefault();
        setMode && setMode("perspective-crop");
      }
    };
    window.removeEventListener("keydown", eventListenerPerspective);
    window.addEventListener("keydown", eventListenerPerspective);
    return () => {
      window.removeEventListener("keydown", eventListenerPerspective);
    };
  }, []);
  return (
    <IconWrapper
      {...props}
      onClick={() => setMode && setMode("perspective-crop")}
      selected="perspective-crop"
      tooltip={"Perspective Cropper (Ctrl + Shift + C)"}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        height="25px"
        width="25px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M208 151c-28 0-60.378 17.102-90.992 37.512-30.615 20.41-58.84 44.594-75.37 61.125L35.27 256l6.367 6.363c16.53 16.53 44.756 40.716 75.37 61.125C147.623 343.898 180 361 208 361h3.73l2.633-2.637c8.644-8.643 15.787-18.62 21.49-29.47-20.47-1.078-36.916-10.11-47.767-23.13C176.512 291.872 171 273.874 171 256c0-17.875 5.512-35.873 17.086-49.762 10.85-13.02 27.297-22.053 47.768-23.13-5.704-10.85-12.847-20.828-21.49-29.47L211.728 151H208zm32 50c-17.6 0-29.66 6.65-38.086 16.762C193.488 227.872 189 241.875 189 256s4.488 28.127 12.914 38.238C210.34 304.348 222.4 311 240 311h3.7c1.89-5.276 3.485-10.685 4.796-16.182-2.5 1.36-5.324 2.182-8.496 2.182-9.282 0-15.65-6.92-19.363-14.348-3.715-7.428-5.637-16.6-5.637-26.652 0-10.053 1.922-19.224 5.637-26.652C224.35 221.918 230.717 215 240 215c3.172 0 5.995.822 8.496 2.182-1.31-5.497-2.905-10.906-4.797-16.182H240zm176 7v32h-96v32h96v32l48-48-48-48zm-168 16a8 16 0 0 0-8 16 8 16 0 0 0 8 16 8 16 0 0 0 8-16 8 16 0 0 0-8-16z"></path>
      </svg>
    </IconWrapper>
  );
};

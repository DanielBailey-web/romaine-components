import React, { useState } from "react";

export interface IconProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  selected: boolean;
}

export const IconWrapper = ({ selected, children, ...props }: IconProps) => {
  const [hover, sethover] = useState(selected);
  return (
    <div
      onMouseEnter={() => sethover(true)}
      onMouseLeave={() => sethover(false)}
      style={{
        border: selected || hover ? "thin solid black" : "",
        borderRadius: "4px",
        backgroundColor: hover ? "#888" : selected ? "#555" : "#fff0",
        display: "grid",
        placeItems: "center",
        height: "40px",
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export * from "./CropperIcon";

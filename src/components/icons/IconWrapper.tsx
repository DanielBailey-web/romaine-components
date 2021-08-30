import React, { useState } from "react";
import { useRomaine } from "romaine";

export interface IconProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  selected?: boolean | string;
  tooltip?: string;
}

export const IconWrapper = ({
  selected,
  children,
  tooltip,
  ...props
}: IconProps) => {
  const {
    romaine: { mode },
  } = useRomaine();
  const [hover, sethover] = useState<boolean>(false);
  return (
    <abbr style={{ cursor: "pointer" }} title={tooltip}>
      <div
        onMouseEnter={() => sethover(true)}
        onMouseLeave={() => sethover(false)}
        style={{
          border:
            selected === true || selected === mode || hover
              ? "thin solid black"
              : "",
          borderRadius: "4px",
          backgroundColor: hover
            ? "#888"
            : selected === true || selected === mode
            ? "#555"
            : "#fff0",
          display: "grid",
          placeItems: "center",
          height: "40px",
        }}
        {...props}
      >
        {children}
      </div>
    </abbr>
  );
};

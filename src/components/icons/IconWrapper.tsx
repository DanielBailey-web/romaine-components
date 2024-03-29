import React, { useState } from "react";
import { useRomaine } from "romaine";

export interface IconProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  selected?: boolean | string;
  tooltip?: string;
  disabled?: boolean;
}

export const IconWrapper = ({
  selected,
  children,
  tooltip,
  disabled = false,
  ...props
}: IconProps) => {
  const {
    romaine: { mode },
  } = useRomaine();
  const [hover, sethover] = useState<boolean>(false);
  return (
    <abbr
      style={{ cursor: disabled ? "not-allowed" : "pointer" }}
      title={tooltip}
    >
      <button
        onMouseEnter={() => sethover(true)}
        onMouseLeave={() => sethover(false)}
        style={{
          border:
            selected === true || selected === mode || hover
              ? "thin solid black"
              : "thin solid transparent",
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
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    </abbr>
  );
};

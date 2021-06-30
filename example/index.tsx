import React, { useRef, useState } from "react";
import { Canvas, Romaine, RomaineRef, useRomaine } from "romaine";
import { PerspectiveIcon } from "../src/components/icons/PerspectiveIcon";
import {
  CropperIcon,
  FolderSelection,
} from "../src/romaine_components.development";
export const RomaineExample = () => {
  return (
    <Romaine>
      <ChildComponent />
    </Romaine>
  );
};

export const ChildComponent = () => {
  const RomaineRef = useRef<RomaineRef>(null);
  const { loaded } = useRomaine();
  const [state, setstate] = useState<File | string | null>(null);
  return (
    <div>
      {loaded && (
        <Canvas
          ref={RomaineRef}
          image={state}
          maxHeight={500}
          maxWidth={500}
          onChange={() => {}}
          onDragStop={() => {}}
          pointSize={5}
          lineWidth={1}
        >
          <FolderSelection
            image={state}
            getFiles={(files) => setstate(files && files[0])}
          >
            <span style={{ display: "grid", placeItems: "center" }}>
              {state ? "Choose a Different File" : "Choose or Drag a File Here"}
            </span>
          </FolderSelection>
          <div
            style={{
              position: "absolute",
              top: "0",
              bottom: "0",
              right: "0",
              width: "240px",
            }}
          >
            <div
              style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)" }}
            >
              <CropperIcon />
              <PerspectiveIcon />
            </div>
          </div>
        </Canvas>
      )}
    </div>
  );
};

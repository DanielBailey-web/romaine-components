import React, { useRef, useState } from "react";
import { Canvas, Romaine, RomaineRef, useRomaine } from "romaine";
import {
  CropperIcon,
  FolderSelection,
  PerspectiveIcon,
  RotateLeft,
  RotateRight,
} from "../src/romaine_components.development";
interface RomaineExampleProps {
  setBlob?: React.Dispatch<React.SetStateAction<Blob | null>>;
  image: string | null;
}
export const RomaineExample = ({
  setBlob,
  image = "https://source.unsplash.com/random",
}: RomaineExampleProps) => {
  return (
    <Romaine>
      <ChildComponent setBlob={setBlob} image={image} />
    </Romaine>
  );
};
/**
 *
 * @todo 1) move the get blob button into its own file
 */
export const ChildComponent = ({ setBlob, image }: RomaineExampleProps) => {
  const RomaineRef = useRef<RomaineRef>(null);
  const { loaded, setMode } = useRomaine();
  const [state, setstate] = useState<File | string | null>(image);

  return (
    <div style={{ marginTop: "4em" }}>
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
          wrapperProps={{ style: { border: "thin solid black" } }}
        >
          <FolderSelection
            image={state}
            getFiles={(files) => setstate(files && files[0])}
          >
            <span style={{ display: "grid", placeItems: "center" }}>
              {state ? "Choose a Different File" : "Choose or Drag a File Here"}
            </span>
          </FolderSelection>
          <button
            style={{
              position: "absolute",
              right: 0,
              bottom: "3ch",
              zIndex: 400,
              border: "thin solid black",
              borderRadius: 0,
              fontSize: "16px",
              background: "white",
              width: "240px",
            }}
            onClick={async () => {
              setMode && setMode(null);
              // need to let mode actually get set to null
              // React 18 useTransition would be nice here...
              // but for backwards compatability doing this...
              setTimeout(async () => {
                if (setBlob && RomaineRef.current?.getBlob) {
                  const newBlob =
                    (await RomaineRef.current?.getBlob({
                      type: "image/jpeg",
                    })) || null;
                  setBlob(newBlob);
                } else {
                  if (RomaineRef.current?.getBlob)
                    console.log(
                      "Image as Blob: ",
                      await RomaineRef.current?.getBlob({ type: "image/jpeg" })
                    );
                  console.warn("You must give the example setBlob as an input");
                }
              }, 0);
            }}
          >
            Export Image
          </button>
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
              <RotateLeft />
              <RotateRight />
              <CropperIcon />
              <PerspectiveIcon />
            </div>
          </div>
        </Canvas>
      )}
    </div>
  );
};

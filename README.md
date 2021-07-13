# romaine-components

Component library for use with romaine

# Installation

`$ npm i romaine-components`

# Example

```
import { useEffect, useState } from "react";
import "./App.css";
//@ts-ignore
import { RomaineExample } from "romaine-components";

function App() {
  const [blob, setBlob] = useState<Blob | null>(null);

  useEffect(() => {
    if (blob !== null) {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "image.png"); //or any other extension
      document.body.appendChild(link);
      link.click();
    }
  }, [blob]);

  return (
    <div className="App">
      <RomaineExample setBlob={setBlob} />
    </div>
  );
}

export default App;
```

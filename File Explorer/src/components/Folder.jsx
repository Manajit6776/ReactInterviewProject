import { useState } from "react";

function Folder({ explorer }) {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  console.log(explorer);
  if (explorer.isFolder) {
    return (
      <div>
        <div className="folder" onClick={handleShow}>
          <span>📁 {explorer.name}</span>
          {/* <span>
            <button>+Folder</button>
            <button>+File</button>
          </span> */}
        </div>
        <div className="child" style={{ display: show ? "block" : "none" }}>
          {explorer.items.map((exp) => {
            return <Folder explorer={exp} />;
          })}
        </div>
      </div>
    );
  } else {
    return <div className="file">📄 {explorer.name}</div>;
  }
}

export default Folder;

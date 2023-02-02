import React from "react";

function PdfView({ src }) {
  return <iframe style={{ width: "800px", height: "600px" }} src={src} />;
}

export default PdfView;

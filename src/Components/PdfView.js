import React from "react";

function PdfView({ src }) {
  return <iframe 
          className="VisorPDF"
          title="PDF Viewer" 
          src={src}


          />;
}
export default PdfView;

import React from "react";

function PdfView({ src }) {
  return <iframe title="PDF Viewer" className='VisorPDF' src={src} />;

}

export default PdfView;

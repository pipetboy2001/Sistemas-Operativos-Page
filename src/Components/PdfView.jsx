import React from "react";

function PdfView({ src }) {
  return <iframe className='VisorPDF' src={src} />;
}

export default PdfView;

import React from "react";
import "./page.module.css";
import GalleryImgComp from "@/components/GalleryImgComp";

const GalleryPage = () => {
  return (
    <section id="Gallery" className="galleryMainContainer">
      <GalleryImgComp />
    </section>
  );
};

export default GalleryPage;

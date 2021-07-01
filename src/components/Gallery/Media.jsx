import React, { useState,useEffect, useCallback } from "react";

import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";
import classes from './Media.module.css'
import Measure from "react-measure";

const Media = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const [width, setWidth] = useState()
  let columns = 3 
  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  useEffect(() => {
    if(width<724 && width > 350) {
      columns = 2
    }
    else if (width < 350){
      columns = 1
    }
    else {
      columns = 3
    }


  }, [width])



  return (
    <Measure onResize={e => setWidth(e?.entry?.width)} >

      {
        ({ measureRef }) => (
          <div ref={measureRef} >
           
            <div    className={classes.media}>
        <h1 className={classes.text}>Gallery</h1>
      <Gallery margin={'10'} photos={photos} onClick={openLightbox}  columns={columns} direction={"column"}/>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div >
          </div>
        )
      }

   
    </Measure>
  )};

export default Media;
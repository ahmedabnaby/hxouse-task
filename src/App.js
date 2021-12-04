import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { SRLWrapper } from "simple-react-lightbox";
function App() {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const closeIcon = (
    <h2><strong>BACK</strong></h2>
  );
 
  return (
    <div>
      <img src="images/1.jfif" className="main-image" alt="..." onClick={onOpenModal}/>
      <Modal open={open} onClose={onCloseModal} center classNames={{
          overlayAnimationIn: 'customEnterOverlayAnimation',
          overlayAnimationOut: 'customLeaveOverlayAnimation',
          modalAnimationIn: 'customEnterModalAnimation',
          modalAnimationOut: 'customLeaveModalAnimation',
        }}
        animationDuration={800}
        closeIcon={closeIcon}
      >
        <div className="container">
          <div className="image-preview">
            <img src="images/1.jfif" alt="..."/>
          </div>
          <div className="text-preview">
            <h1>ERIKA</h1>
            <h3>Fashion Designer</h3>
            <h5>Erika War moved from rural Alberta to Toronto in her teens to pursue a career in the creative industry. Her work has bounced between the fashion, tech, and music industries while specializing in photography and digital media. In 2019,
               she launched a recycling design studio MADE by WAR, and subsequently, a collection of gender-neutral pop-art inspired clothing.</h5>
            <div className="inner-img-preview">
            <SRLWrapper>
              <div className="row">
                <div className="col-md-3">
              <img src="images/10.jpg" alt="..."/>
                </div>
                <div className="col-md-3">
              <img src="images/2.jfif" alt="..."/>
              </div>
              <div className="col-md-3">
              <img src="images/3.jfif" alt="..."/>
                </div>
              </div>
              </SRLWrapper>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;

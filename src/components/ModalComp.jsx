import React from 'react'
import { Modal, Button } from 'react-bootstrap'
const ModalComp = ({ modalShow, setModalShow, viewImageUrl }) => {
  return (
    <Modal
      show={modalShow}
      onHide={() => setModalShow(false)}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header className='py-2' closeButton></Modal.Header>
      <Modal.Body className='p-0'>
        <img style={{ width: '100%' }} src={viewImageUrl} alt='selected' />
      </Modal.Body>
    </Modal>
  )
}

export default ModalComp

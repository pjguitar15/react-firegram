import React from 'react'
import { Modal, Button } from 'react-bootstrap'
const ModalComp = ({ modalShow, setModalShow, viewImageUrl }) => {
  const clickHandler = () => {
    setModalShow(false)
  }
  return (
    <Modal
      show={modalShow}
      onHide={() => setModalShow(false)}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <img style={{ width: '100%' }} src={viewImageUrl} alt='selected' />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={clickHandler}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalComp

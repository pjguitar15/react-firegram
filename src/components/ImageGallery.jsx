import React, { useState } from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import useFirestore from '../hooks/useFirestore'
import ModalComp from './ModalComp.jsx'
const ImageGallery = () => {
  const [modalShow, setModalShow] = useState(false)
  const [viewImageUrl, setViewImageUrl] = useState()
  const { docs } = useFirestore('images')

  const clickHandler = (url) => {
    setModalShow(true)
    setViewImageUrl(url)
  }
  return (
    <Container className='py-5'>
      <ModalComp
        viewImageUrl={viewImageUrl}
        setModalShow={setModalShow}
        modalShow={modalShow}
      />
      <Row>
        {docs &&
          docs.map((item) => (
            <div className='col-lg-3 p-1'>
              <Card
                className='card-item'
                key={item.id}
                onClick={() => clickHandler(item.url)}
              >
                <Card.Img src={item.url} alt='uploaded pic' />
              </Card>
            </div>
          ))}
      </Row>
    </Container>
  )
}

export default ImageGallery

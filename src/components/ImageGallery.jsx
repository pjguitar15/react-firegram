import React, { useState } from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import useFirestore from '../hooks/useFirestore'
import ModalComp from './ModalComp.jsx'
const ImageGallery = () => {
  const [modalShow, setModalShow] = useState(false)
  const [viewImageUrl, setViewImageUrl] = useState()
  const { docs, loading } = useFirestore('images')

  const clickHandler = (url) => {
    setModalShow(true)
    setViewImageUrl(url)
  }
  return (
    <div style={{ background: '#f8f9fe' }}>
      <Container className='py-5'>
        <ModalComp
          viewImageUrl={viewImageUrl}
          setModalShow={setModalShow}
          modalShow={modalShow}
        />
        <Row>
          {loading && <h1 className='text-center display-1'>Loading...</h1>}
          {docs &&
            docs.map((item) => (
              <div className='col-lg-3 p-3'>
                <Card
                  className='card-item '
                  key={item.id}
                  onClick={() => clickHandler(item.url)}
                >
                  <Card.Img
                    style={{
                      maxHeight: '100%',
                      maxWidth: '100%',
                      objectFit: 'cover',
                    }}
                    src={item.url}
                    alt='uploaded pic'
                  />
                </Card>
              </div>
            ))}
        </Row>
      </Container>
    </div>
  )
}

export default ImageGallery

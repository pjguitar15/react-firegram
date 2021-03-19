import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import ProgressBar from './ProgressBar'
const Header = () => {
  const [file, setFile] = useState(null)
  const types = ['image/png', 'image/jpeg']
  const changeHandler = (e) => {
    const selected = e.target.files[0]
    if (selected && types.includes(selected.type)) {
      console.log(selected)
      setFile(selected)
    } else {
      setFile(null)
      alert('Please upload an image file')
    }
  }
  return (
    <Container>
      <h1>Firegram</h1>
      <input onChange={changeHandler} type='file' />
      <p className='font-weight-bold'>{file && file.name}</p>
      {file && <ProgressBar file={file} setFile={setFile} />}
    </Container>
  )
}

export default Header

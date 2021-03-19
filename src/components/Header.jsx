import React, { useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import ProgressBarComp from './ProgressBarComp.jsx'
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
    <div className='bg-white p-5 shadow-sm'>
      <Container>
        <h1 className='display-4 text-center'>Firegram</h1>
        <p className='lead text-center'>More than catch a picture</p>
        <div className='d-flex justify-content-center align-items-center'>
          <label className='btn btn-warning col-3'>
            Upload
            <input
              style={{ display: 'none' }}
              onChange={changeHandler}
              type='file'
            />
          </label>
        </div>
        <p className='font-weight-bold'>{file && file.name}</p>
        {file && <ProgressBarComp file={file} setFile={setFile} />}
      </Container>
    </div>
  )
}

export default Header

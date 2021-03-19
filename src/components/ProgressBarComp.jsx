import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage'
import { ProgressBar } from 'react-bootstrap'
const ProgressBarComp = ({ file, setFile }) => {
  const { url, progress } = useStorage(file)
  useEffect(() => {
    if (url) {
      setFile(null)
    }
  }, [url])
  return (
    <>
      <ProgressBar animated now={progress} />
      {/* <div
        className='progress-bar bg-warning'
        style={{ width: progress + '%' }}
      >
        {Math.ceil(progress) + '%'}
      </div> */}
    </>
  )
}

export default ProgressBarComp

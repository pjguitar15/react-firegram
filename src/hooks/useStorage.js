import { useState, useEffect } from 'react'
import { projectStorage, projectFirestore, timestamp } from '../firebase'

const useStorage = (file) => {
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState('')
  const [url, setUrl] = useState('')

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name)
    const collectionRef = projectFirestore.collection('images')

    storageRef.put(file).on('state_changed', (snap) => {
      // get percentage with this formula
      let percentage = (snap.bytesTransferred / snap.totalBytes * 100)
      setProgress(percentage)
    }, (err) => {
      setError(err)
    }, async () => {
      // this function fires when upload is complete
      const url = await storageRef.getDownloadURL()

      // call timestamp function and assign to var
      const createdAt = timestamp()

      // adds image url to firestore collection
      collectionRef.add({ url, createdAt })
      setUrl(url)
    })
  }, [file])

  return { progress, url, error }

}

export default useStorage
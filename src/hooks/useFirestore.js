import { useState, useEffect } from 'react'
import { projectFirestore } from '../firebase'

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([])

  useEffect(() => {
    const unsubscribe = projectFirestore.collection(collection)
      .orderBy('createdAt', 'desc').onSnapshot(snap => {
        let documents = []
        snap.forEach(item => {
          documents.push({ ...item.data(), id: item.id })
        })
        setDocs(documents)
      })
    return () => unsubscribe()
  }, [collection])

  return { docs }
}

export default useFirestore
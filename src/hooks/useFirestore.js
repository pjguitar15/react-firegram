import { useState, useEffect } from 'react'
import { projectFirestore } from '../firebase'

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    const unsubscribe = projectFirestore.collection(collection)
      .orderBy('createdAt', 'desc').onSnapshot(snap => {
        let documents = []
        snap.forEach(item => {
          documents.push({ ...item.data(), id: item.id })
        })
        setDocs(documents)
        setLoading(false)
      })
    return () => unsubscribe()
  }, [collection])

  return { docs, loading }
}

export default useFirestore
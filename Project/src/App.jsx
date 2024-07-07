import React, {useState, useEffect} from "react"
import ImageCard from "./components/ImageCard"
import ImageSearch from "./components/ImageSearch"

function App() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [term, setTerm] = useState("")

  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=${import.meta.env.VITE_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits)
      setLoading(false)
    })
    .catch(err => console.log(err))
  },[term])
  return (
    <>
      <ImageSearch searchText={(text) => setTerm(text)} />

      {!loading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>}

      <div className="container mx-auto">
        {loading ? <h1 className="text-center mx-auto text-6xl mt-32">Loading...</h1> : 
        <div className="grid grid-cols-3 gap-4">
          {images.map(image => (
            <ImageCard key={image.id} image = {image} />
          ))}
        </div>}
      </div>
    </>
  )
}

export default App

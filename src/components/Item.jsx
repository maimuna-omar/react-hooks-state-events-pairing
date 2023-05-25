import React, {useState}from 'react'

function Item({video}) {
    const [likes, setLikes]=useState(video.upvotes)
    const [disLikes, setDisLikes]=useState(video.downvotes)
  
    function handleUpvotes(){
      setLikes(prevlikes => prevlikes+1)
    }
    function handleDownvotes(){
      setDisLikes(prevDisLikes => prevDisLikes+1)
    }
  return (
    <div>
         <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h2>{video.title}</h2>
      <p>{video.views} views | uploaded {video.createdAt}</p>
      <button onClick={handleUpvotes}>{likes} 👍 </button> 
      <button onClick={handleDownvotes}> {disLikes} 👎 </button>

  </div>
  )
}

export default Item;
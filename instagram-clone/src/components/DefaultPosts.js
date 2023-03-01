import React from 'react'

function DefaultPosts() {
    const postsData = [
        {
            logoImg: "https://cdn.pixabay.com/photo/2012/04/23/17/29/k-39336_640.png"  ,
            fullName: "Kamil Memmedov" ,
            postsUrl: "https://image.slidesharecdn.com/powerpoint-140222211954-phpapp01/95/tuleyb-ve-k-mevsimi-2-638.jpg?cb=1393104017",
            caption:  "Kuran Rum Suresi 50 ayet meali "
        },
        {
            logoImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/LetterR.svg/800px-LetterR.svg.png"  ,
            fullName: "Rustem Huseynov" ,
            postsUrl:"https://images.unsplash.com/photo-1588513646744-e94675143d6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWVkaW5hfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" ,
            caption: "Medine-i Munevvere " ,
        },
        {
            logoImg: "https://cdn.pixabay.com/photo/2012/04/23/17/29/k-39336_640.png"  ,
            fullName: "Rustem Memmedov" ,
            postsUrl:   "https://images.unsplash.com/photo-1575101261474-5cb5653bb416?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1lZGluYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"          ,
            caption:  "Mescid-i Nebevi"
        },
    ]
  return (
    <div>
        {
            postsData.map( (post , index) => {
                return(
                    <div className='card p-2  my-4 col-6 mx-auto shadow' key={index}>
                        <div className='card-title d-flex gap-3'>
                            <img width='50' src={post.logoImg} />
                            <h2 className='text-dark'>
                                {post.fullName}
                            </h2>
                        </div>
                        
                        <div className="card-body">
                            <img className='img-fluid' src={post.postsUrl}/>
                        </div>
                        
                        <div>
                            
                            <p >
                                <strong>{post.fullName}:</strong> {post.caption}
                            </p>
                            
                        </div>

                    </div>
                )
            })
        }
       
    </div>
  )
}

export default DefaultPosts
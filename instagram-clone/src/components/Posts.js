import React,{useEffect, useState} from 'react'
import { listAll, ref , uploadBytes , getStorage, getDownloadURL} from 'firebase/storage'
import app from '../firebase';
import uuid from 'react-uuid';
import Post from './Post';
import  {doc, collection, getDoc, getDocs, getFirestore, updateDoc } from 'firebase/firestore';

function Posts({userId}) {
    const [post , setPost] = useState(null);
    const [imgLink , setLink] = useState([]);
    const [linksAll , setLinksAll] = useState([]);

    const storage = getStorage(app);
    const db = getFirestore(app);
    const docRef = doc (db , "users" , userId);


        function handleUpload() {
            if(post === null) return;
            const imageRef = ref(storage , `images/${post.name} ${uuid()}`)
            uploadBytes(imageRef , post )
            .then( currentPost => {
                getDownloadURL(currentPost.ref)
                .then(url => setLink([...imgLink , url]))
            })

        }
        
        useEffect( () =>{

          async function uploadImages() {
            try{
              const queries = await getDocs(collection (db , "users" ))
              queries.forEach( doc =>{     
                if(userId === doc.id){
                  setLinksAll(doc.data().imgLinks);
                  ///// other datas also

                  async function updataData(){
                    await updateDoc( docRef ,{      
                        imgLinks: [...doc.data().imgLinks , ...imgLink]
                    })
                  }
                  updataData();
                }
              } )
              
            }
          catch (e){
            console.log(e);
          }
        }

        uploadImages();            

        }, [imgLink])

        console.log(imgLink);
       
       
  
    return (
    <div >
         {(imgLink.length > 0  && post !== null)  ?  <Post   links={linksAll}/> : null}
        
        <input 
      type='file'
      accept="image/png, image/jpeg"
      onChange={(e) => setPost(e.target.files[0])}
      />

      <button onClick={handleUpload}>Upload</button>
    
    </div>
  )
}

export default Posts
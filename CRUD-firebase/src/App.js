import React from "react";
import {getDocs,addDoc,doc,deleteDoc, updateDoc,collection} from 'firebase/firestore';
import {db} from "./config"
function App(){

  const coll="products"
  const id="4p59U24q2HiZ144Luq9N"

    return(
        <div>
 
{/**1.........Read operation on firebase collection 
           * at first,insert some data in to  your firestore collection
           * firestore-tools is necessary for this code to run
          */}
          <button style={{marginLeft:'14px',backgroundColor:'lightgreen'}} onClick={async()=>{
           const  ans= await getDocs(collection(db, "products"))
            ans.forEach((obj) => {
              console.log(obj.data(),obj.id);
            });
            console.log("read worked")
          }}>Read Data</button>

{/**2..........Insert operation on firebase collection */}
          <button style={{marginLeft:'14px',backgroundColor:'lightgreen'}}onClick={async()=>{
            if(await addDoc(collection(db,"products"),
             {
              phone: "oppo",
              price: 4000,
              type: 'megapixel'
            })
            ){
              console.log("new data inserted")
            }else{
              console.error("failed insert")
            }
            
          }}>Add Data</button>
          

{/**3........delete  operation on firebase collection */}
          

           <button style={{marginLeft:'14px',backgroundColor:'lightgreen'}}onClick={()=>{
           try{ 
           deleteDoc(doc(db,coll,id))
          console.log("Deletion successfull")
        }
           catch(err){
            console.log("error occured ::::: "+err)
           }
           }}>Delete Data</button>
          
 {/**4........update  operation on firebase collection */}
           <button style={{marginLeft:'14px',backgroundColor:'lightgreen'}} onClick={()=>{
            const g=doc(db,coll,id)
           try{ updateDoc(g,{
              name:'xxxxxx',
              gender:'yyyyyy'
            })
          console.log("Updated")
        }catch(e){
              console.error("error occure:::::d"+e)
            }
           }}>Update Data</button>

        </div>
        
    );
}

export default App


 
 

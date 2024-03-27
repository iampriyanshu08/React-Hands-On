import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { IoMdTrash } from 'react-icons/io'
import { RiEditCircleLine } from 'react-icons/ri'
import { db } from '../Config/Firebase'
import AddandUpdate from './AddandUpdate'
import UseDisclose from '../Hooks/UseDisclose'
import { toast } from 'react-toastify'

const ContactCard = ({contact}) => {

    const {OnOpen , OnClose, isopen}= UseDisclose()



    const deleteCard = async(id)=>{
try {
    await deleteDoc(doc(db,"contacts",id))
    toast.success("contact deleted successfully")
} catch (error) {
    console.log(error)
}
    }
  return (
    <div>
        <div key={contact.id} className="bg-yellow flex justify-between items-center p-2  rounded-xl">
           <div className="flex gap-2">
           <HiOutlineUserCircle className="text-orange text-4xl"/>
            <div className="">
              <h2 className="text-medium">{contact.name}</h2>
              <p className="text-sm">{contact.email}</p>
            </div>
           </div>
            <div className="flex text-3xl">
              <RiEditCircleLine onClick={OnOpen} className='cursor-pointer'/>
              <IoMdTrash onClick={()=>deleteCard(contact.id)} className="text-red-700 cursor-pointer"/>
            </div>
          </div>
          <AddandUpdate contact={contact} isupdate isopen={isopen}  OnClose={OnClose}/>
    </div>
  )
}

export default ContactCard

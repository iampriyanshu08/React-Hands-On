import React, { useEffect, useState } from "react";
import NavBar from "./Components/NavBar";
import { FiSearch } from "react-icons/fi";
import { FaPlusCircle } from "react-icons/fa";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./Config/Firebase";
import ContactCard from "./Components/ContactCard";
import AddandUpdate from "./Components/AddandUpdate";
import UseDisclose from "./Hooks/UseDisclose";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./Components/NotFound";


const App = () => {
  const [contacts, setcontacts] = useState([]);
  const { OnOpen, OnClose, isopen } = UseDisclose();
  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactRef = collection(db, "contacts");

        onSnapshot(contactRef, (snapshot) => {
          const contactList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setcontacts(contactList);
          return contactList;
        });
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;

    const contactRef = collection(db, "contacts");

    onSnapshot(contactRef, (snapshot) => {
      const contactList = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactList.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );
      setcontacts(filteredContacts);
      return filteredContacts;
    });
  };

  return (
    <>
      <div className="max-w-[370px] mx-auto px-4">
        <NavBar />

        <div className="flex gap-2">
          <div className="flex relative items-center flex-grow">
            <FiSearch className="ml-1 absolute text-white text-3xl" />
            <input
              onChange={filterContacts}
              type="text"
              className=" flex-grow h-10 bg-transparent border border-white rounded-md text-white pl-10"
            />
          </div>

          <FaPlusCircle
            className="text-4xl text-white cursor-pointer "
            onClick={OnOpen}
          />
        </div>
        <div className="mt-4 flex gap-4 flex-col">
          {contacts.length<=0 ? <NotFound/> : contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
      <AddandUpdate OnClose={OnClose} isopen={isopen} />
      <ToastContainer position="bottom-center" />
    </>
  );
};

export default App;

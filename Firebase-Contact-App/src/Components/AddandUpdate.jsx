import React from "react";
import Modal from "./Modal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../Config/Firebase";
import { toast } from "react-toastify";
import * as Yup from 'yup'

const contactSchemaValidation = Yup.object().shape({
  name : Yup.string().required("name is required"),
  email :Yup.string().email('invalid email').required("email is required"),
})

const AddandUpdate = ({ isopen, OnClose, isupdate, contact }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      OnClose()
      toast.success("contact added successfully")
    } catch (error) {
      console.log(error);
    }
  };
  const updateContact = async (contact,id) => {
    try {
      const contactRef = doc(db, "contacts",id);
      await updateDoc(contactRef, contact);
      OnClose()
      toast.success("contact updated successfully")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Modal isopen={isopen} OnClose={OnClose}>
        <Formik
        validationSchema={contactSchemaValidation}
          initialValues={
            isupdate
              ? {
                  name: contact.name,
                  email: contact.email,
                }
              : {
                  name: "",
                  email: "",
                }
          }
          onSubmit={(values) => {
            console.log(values);
            
            isupdate? 
            updateContact(values,contact.id):addContact(values);
          }}
        >
          <Form className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <Field className="border h-10" name="name" />
              <div className="text-red-600 text-sm">
                <ErrorMessage  name="name"/>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <Field className="border h-10" name="email" type="email" />
              <div className="text-red-600 text-sm">
                <ErrorMessage  name="email"/>
              </div>
            </div>
            <button type="submit" className="bg-yellow px-2 py-1 self-end">
              {isupdate ? "update" : "add"} Contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddandUpdate;

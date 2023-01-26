import React from 'react'
import { Field, Form, Formik} from 'formik';

function Index() {
  return (
    <Formik
       initialValues={{ email: '', firstName: '', lastName: '' }}
       onSubmit={(values) => {
           console.log(values)
       }}
     >
         <Form>
           <Field type="email" name="email" placeholder="Email" />
           <Field name="lastName" placeholder="Doe" />
           <button type="submit">Submit</button>
         </Form>
     </Formik>
  )
}

export default Index
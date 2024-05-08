'use client';

import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

export default function SubscribeForm({ t }: any) {
  const [thanks, setThanks] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email(t.invalidEmail).required(t.required),
  });

  async function subscribe(email: string) {
    // await response from api and thanks!
    setThanks(true);
  }

  return (
    <>
      <div className={`flex ${thanks ? 'hidden' : ''}`}>
        <Formik
          initialValues={{
            email: '',
          }}
          validationSchema={validationSchema}
          onSubmit={({ email }) => {
            subscribe(email);
          }}
        >
          {({ errors, touched }) => (
            <Form
              className={`flex flex-col w-full my-8 md:mt-14 md:mb-0 md:w-96`}
            >
              <fieldset className={`flex flex-col mb-2`}>
                <Field
                  name='email'
                  type='email'
                  placeholder={t.enterYourEmail}
                  className={`flex w-full bg-vokal-black border-b-2 outline-none `}
                />
                {errors.email && touched.email ? (
                  <div className={`flex text-red text-xs`}>{errors.email}</div>
                ) : null}
              </fieldset>

              <button type='submit' className={`flex w-full`}>
                {t.signUp}
              </button>
            </Form>
          )}
        </Formik>
      </div>

      <div
        className={`${!thanks ? 'hidden' : 'my-12 md:my-10 font-bold text-lg'}`}
      >
        {t.thanks}!
      </div>
    </>
  );
}

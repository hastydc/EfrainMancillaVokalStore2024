'use client';

import Logo from '@/ui/design-system/logo/Logo';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import Style from './signIn.module.scss';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MenuRoute } from '@/core/menuRoute.enum';
import Loader from '@/ui/design-system/loader/Loader';

export default function SignIn({ t }: any) {
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const [loading, setLoading] = useState(false);
  const delay = parseInt(process.env.API_DELAY ?? '1', 10);
  const router = useRouter();

  const validationSchema = Yup.object().shape({
    nick: Yup.string().required(t.required),
    password: Yup.string().required(t.required),
  });

  async function signIn(nick: string, password: string) {
    setInvalidCredentials(false);
    setLoading(true);
    const response = await fetch(`/api/sign?nick=${nick}&password=${password}`);
    await new Promise((r) => setTimeout(r, delay));
    const result = await response.json();

    if (result.data) {
      return router.push(MenuRoute.HOME);
    }

    setLoading(false);
    setInvalidCredentials(true);
  }

  return (
    <>
      <div
        className={`flex flex-col md:flex-row w-full p-16 md:px-16 md:py-44 items-center justify-center gap-4 md:gap-10`}
      >
        <div>
          <Logo />
        </div>
        {loading ? (
          <div className={`flex items-center justify-center ${Style.loader}`}>
            <Loader />
          </div>
        ) : (
          <div className={`flex ${Style.box} items-center`}>
            <Formik
              initialValues={{
                nick: '',
                password: '',
              }}
              validationSchema={validationSchema}
              onSubmit={({ nick, password }) => {
                signIn(nick, password);
              }}
            >
              {({ errors, touched }) => (
                <Form className={`flex flex-col w-full mt-8 md:mt-0 md:w-96`}>
                  <fieldset className={`flex flex-col mb-2`}>
                    <Field
                      name='nick'
                      type='nick'
                      placeholder={t.enterYourNick}
                      className={`flex w-full bg-vokal-white border-b-2 outline-none `}
                    />
                    {errors.nick && touched.nick ? (
                      <div className={`flex text-red text-xs ${Style.error}`}>
                        {errors.nick}
                      </div>
                    ) : null}
                  </fieldset>

                  <fieldset className={`flex flex-col mb-2`}>
                    <Field
                      name='password'
                      type='password'
                      placeholder={t.enterYourPassword}
                      className={`flex w-full bg-vokal-white border-b-2 outline-none `}
                    />
                    {errors.password && touched.password ? (
                      <div className={`flex text-red text-xs ${Style.error}`}>
                        {errors.password}
                      </div>
                    ) : null}
                    {invalidCredentials ? (
                      <div className={`flex text-red text-xs ${Style.error}`}>
                        {t.invalidCredentials}
                      </div>
                    ) : null}
                  </fieldset>

                  <button type='submit' className={`flex w-full`}>
                    {t.signIn}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        )}
      </div>
    </>
  );
}

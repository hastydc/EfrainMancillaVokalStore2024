This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Custom Instructions

This project was development with Node v20.12.2 and Npm 10.5.0 on windows 10 OS, so just install with npm i

## Run Project

npm run dev on console to run project and access to http://localhost:3000

## Sign in

Click on account in menu to redirect to sign in page

## Query param

Navigate sending color = 1 or 2 as query param in home like this http://localhost:3000/en/home?color=2

## Save changes

To save changes run | npm run prettier (to format code) | npm run lint | and git commands

## Knowing issues & missing reqs (i really so sorry for this missing request)

- I really hate how next intl manage translations
- I just stole a bit of piece code to make middlewares chained cuz next only wants 1 middleware but i will need more than 1, also i stole code from loader.io to shape one beautiful.
- There is a few of any typed vars mostly on params of components, i will do it better next time.
- I don't have a good arch for my folders and context providers declarations to share states between modules.
- I failed to put my suspense with my loader.
- I didn't integrate a newsletter tool cuz i didn't never done that in the past, just with wordpress and a plugin but not in next / angular yet
- I just put black and white filter data cuz figma doesn't provide more assets
- I don't understand what happens if i select room or style filter
- Yes, i changed the gallery style cuz swiper has a lot of cool styles for this
- This readme was write in english by me
- Sorry i didn't deployed a next app yet!.

## Libs

I used for this | nextjs | react | formik + yup | next-intl | swiper (for 3d slider/gallery) | sass | tailwind | prettier

## Env

In root folder create a file named .en.local and put this

- API_DELAY = 2000 (to make a little delay on request justo to see the loader)
- NICK = vokal (credentials for simpli api route service to simulate a success sign in and redirect)
- PASSWORD = vokal2024

## Repo

Branch main https://github.com/hastydc/EfrainMancillaVokalStore2024

## A little Doc

I'm not the best writing docs.

Setup project was indicated on custom instructions + run project previously

This project just have 2 pages

- Sign in: page to sign in user, there is a little request in src/pages/api/sign.tsx to validate burned credentials
- Home: page to get images and data from project selected in select color, there is a request to get full data with url images in src/pages/api/iamges.tsx

## Folder Structure

- app: pages and components
- core: just an enum to better route paths track
- i18n: i18n json files
- middlewares: files to handle some middlewares |
  - chain: function to concat middlewares
  - auth: check if user is authenticated
  - i18n: setup i18n
  - paths: prevent to add /[locale] to certain paths that does'nt need like api requests or assets
- models: files for interfaces
- pages: api files
- styles: sass files
- ui: ui components like buttons or loader

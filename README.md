# Ecultify Advertising Web-App Developer Assignment

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Project Overview
Here it's my assiagnment which I completed Successfully. Here the poject was develop on ReactJS using a framework [NextJS](https://nextjs.org/) and styling with [Tailwind CSS](https://tailwindcss.com/) and using Shadcn which is a collection of open-source, customizable, and reusable React components for modern web development.From [Shadcn](https://ui.shadcn.com/) , I use [`<Button>`](https://ui.shadcn.com/docs/components/button) and [`<Sheet>`](https://ui.shadcn.com/docs/components/sheet) (i.e I use for Mobile version Navbar) Components. And I Also Use NextJS inbuilt component i.e. [`<Image>`](https://nextjs.org/docs/app/api-reference/components/image) for Icons i use [React-Icons](https://react-icons.github.io/react-icons/). <br/>

Here I made this website very clean and maintains its responsiveness and for understanding the size of the images here I use image size placeholder where we can see the size of the image (eg. 600X400) for ease of understanding how much size of the image should be uploaded and also some of the custom components are there in the components folder namely Card.jsx, QuotesCard.jsx, Navbar.jsx Footer.jsx.

## Table of Contents
- [Technologies](#technologies)
- [Installation Process](#installation)
- [Getting Started](#getting)
- [License](#license)

 ## Technologies 
 [NextJS](https://nextjs.org/) : React framework for server-side rendering and static site generation.

 [Tailwind CSS](https://tailwindcss.com/) : For Styling the website very easy and efficient manner.
 
 [React Icons](https://react-icons.github.io/react-icons/) : For using icons in the project.
 
 [Shadcn](https://ui.shadcn.com/) : For UI components like Button and 
 
 [NextImage](https://nextjs.org/docs/app/api-reference/components/image) : For image optimization.
 

With the help of this all Technologies, i successfully completed my assignment.

## Installation
1. Clone the repository:
```bash
 git clone https://github.com/JaswantSoni41/ecultify-advertising-web-app-assignment.git
```

2. Install dependencies:
```bash
 npm install
 ```


This step is additional for a ShadCN components are install properly or not successfully run the website <br><br>
3. Install ShadCn:
```bash
 npx shadcn@latest init

 Which style would you like to use? › New York

 Which color would you like to use as base color? › Neutral

 Do you want to use CSS variables for colors? › no / yes ("Here select Yes")
 ```

 Now add components 
 ```
 npx shadcn@latest add button sheet
 ```

## Getting Started

** IMPORTANT! : Before Started just Comment the output: "export" like this which was given in the code below, after doning that then you can proceed to next step

```bash
 /** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};
```

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!



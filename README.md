# Blogging Platform

A fully-featured blogging platform built with **Next.js**, **OAuth**, **MongoDB**, and **Prisma**. This project allows users to create accounts, write, edit, and publish blog posts, and engage with the content through comments and likes.

## Workflow

1. **Open the Site**: Access the platform to start exploring blogs.
2. **Login Using Google**: Securely log in using your Google account.
3. **Browse the Site**: Explore various blogs across different categories.
4. **Read Blogs**: Dive into posts shared by other users.
5. **Write Your Own Blog**: Use the "Create Blog" button in the navbar to share your thoughts.
6. **Comment on Blogs**: Engage with the community by commenting on others' posts.

## Features

- **User Authentication**: OAuth-based login via Google and GitHub.
- **Rich Text Editor**: Create and format blog posts using a simple, intuitive editor.
- **SEO-Friendly**: Optimize your blog posts with meta tags, slugs, and more.
- **Dynamic Routing**: Individual pages for each blog post with Next.js dynamic routes.
- **Responsive Design**: Mobile-first design for seamless access across devices.
- **User Profiles**: View and manage user profiles with published articles.
- **CRUD Operations**: Full control over blog content—create, read, update, and delete posts.
- **Commenting System**: Engage with readers through comments on posts.
- **Like System**: Users can like posts, providing quick feedback.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [MongoDB](https://www.mongodb.com/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/) with OAuth (Google, GitHub)
- **Styling**: Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (>= 16.x)
- MongoDB (local or cloud instance)
- Google and GitHub OAuth credentials

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/rishita1304/WriteWise.git
   cd WriteWise

2. Install dependencies:
   ```bash
   npm install

3. Set up Prisma:
    ```bash
    npx prisma generate
    npx prisma db push

3. Run the development server::
    ```bash
    npm run dev

4. Open your browser and navigate to http://localhost:3000.


    

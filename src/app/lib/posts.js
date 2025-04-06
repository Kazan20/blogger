// lib/posts.js
// In a real app, this would connect to a database
const posts = [
    {
      id: '1',
      title: 'Getting Started with Next.js',
      slug: 'getting-started-with-nextjs',
      date: '2025-04-01',
      excerpt: 'Learn the basics of Next.js and how to create your first application.',
      content: '<p>Next.js is a React framework that gives you building blocks to create web applications. By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application.</p><p>You can use React to build your UI, then incrementally adopt Next.js features to solve common application requirements such as routing, data fetching, integrations - all while improving the developer and end-user experience.</p>',
      coverImage: '/images/nextjs.png',
    },
    {
      id: '2',
      title: 'Working with React Hooks',
      slug: 'working-with-react-hooks',
      date: '2025-04-03',
      excerpt: 'Understand how React Hooks work and how to use them effectively.',
      content: '<p>Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. Hooks are backwards-compatible.</p><p>React provides a few built-in Hooks like useState, useEffect, useContext, useReducer, useCallback, useMemo, useRef, useImperativeHandle, useLayoutEffect, and useDebugValue.</p>',
      coverImage: '/images/react-hooks.png',
    },
    {
      id: '3',
      title: 'Building a REST API with Node.js',
      slug: 'building-rest-api-nodejs',
      date: '2025-04-05',
      excerpt: 'Learn how to create a RESTful API using Node.js and Express.',
      content: '<p>RESTful APIs are a way to build web services that allow different systems to communicate with each other over HTTP. Node.js and Express provide a great platform for building these APIs.</p><p>In this tutorial, we will create a simple RESTful API that manages a collection of items. We will implement the basic CRUD operations (Create, Read, Update, Delete).</p>',
      coverImage: '/images/nodejs-api.png',
    },
  ];
  
  export async function getPosts(limit) {
    // Sort posts by date (newest first)
    const sortedPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Return all posts or limited number if specified
    return limit ? sortedPosts.slice(0, limit) : sortedPosts;
  }
  
  export async function getPostBySlug(slug) {
    return posts.find(post => post.slug === slug);
  }
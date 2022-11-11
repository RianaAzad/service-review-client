import React from 'react';
import JWT from '../../Assets/JWT.png'

const Blog = () => {
    return (
<div className='container text-justify mx-auto'>
<div className='m-3'>
<p className='border border-cyan-400 text-left p-3 bg-slate-900 font-bold text-xl'>Difference between SQL and NoSQL</p>
<p className='border border-purple-500 p-4 bg-cyan-900 text-white'>
SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL. Few other differences are described below: 
1. Language
SQL has been around for over 40 years, so it is recognizable, documented, and widely-used. Safe and versatile, it’s particularly well suited for complex queries. However, SQL restricts the user to working within a predefined tabular schema, and more care must be taken to organize and understand the data before it is used.
2. Scalability
SQL databases can be scaled horizontally as well, though sharding or partitioning logic is often the user’s onus and not well supported.
NoSQL technologies are diverse and while many rely on the master-slave architecture, options for scaling vertically also exist.
Savings made using more efficient data structures can overwhelm differences in scalability; most important is to understand the use case and plan accordingly.
3. Properties 
SQL complies with 'ACID' properties where NoSQL adheres to 'CAP' theorem.
</p>
</div>
<div className='m-3'>
    <p className='border border-cyan-400 text-left p-3 bg-slate-900 font-bold text-xl'>What is JWT, and how does it work?</p>
    <div className='md:flex lg:flex'>
    <p className='border border-purple-500 p-4 bg-cyan-900 text-white'>
    JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.

It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.

The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. 

JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information. 
    </p>
    <img src={JWT} className='md:w-5/12 lg:w-4/12 rounded-lg border border-black' alt="" />
    </div>
</div>
<div className='m-3'>
    <p className='border border-cyan-400 text-left p-3 bg-slate-900 font-bold text-xl'>What is the difference between javascript and NodeJS?</p>
    <p className='border border-purple-500 p-4 bg-cyan-900 text-white'>
JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.

As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option.

JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.

Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported. 
    </p>
</div>
<div className='m-3'>
    <p className='border border-cyan-400 text-left p-3 bg-slate-900 font-bold text-xl'>How does NodeJS handle multiple requests at the same time?</p>
    <p className='border border-purple-500 p-4 bg-cyan-900 text-white'>
    NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
    If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
    </p>
</div>
</div>
);
};

export default Blog;
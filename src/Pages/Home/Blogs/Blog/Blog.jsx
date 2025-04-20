import React from 'react';

const Blog = ({blog}) => {
    const { question, answer } = blog;
    return (
        <div className="w-11/12 mx-auto my-6 p-4 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
             <div className="border-b-2 border-dotted pb-2 border-[#0F0F0F60] font-semibold"><span className='text-blue-600'>Question</span> : {question} ?</div>
             <div className="p-4 text-sm"> <span className='text-blue-600'>Answer</span> : {answer}</div>
</div>
    );
};

export default Blog;
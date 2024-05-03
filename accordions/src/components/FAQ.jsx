import React from 'react'
import Accordion from './Accordion';

const FAQ = () => {
  return (
    <div className='p-4 bg-gray-200 rounded-lg'>
        < Accordion title="what is react hooks" answer="React hooks are a set of functions that allow you to use state and other React features without writing a class." />
        < Accordion title="what is tailwindcss" answer="Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces." />
        < Accordion title="what is react router" answer="React Router is a JavaScript library for handling client-side routing in React applications." />
        < Accordion title="what is react testing library" answer="React Testing Library is a library for testing React components without using DOM." />
    </div>
  )
}

export default FAQ
import React from 'react'

/* The `function Card(props)` is a functional component in React. It takes in a `props` parameter,
which is an object containing any properties passed to the component. Inside the component, it
renders a card with an image, a title, a description, and a button. The values for these elements
can be passed through the `props` object when using the `Card` component. */
function Card(props) {
    /* The `console.log(props)` statement is used to log the value of the `props` object to the
    console. This can be helpful for debugging purposes, as it allows you to see the properties that
    are being passed to the `Card` component and their values. */
    console.log(props);
  return (
    <div className="relative h-[400px] w-[300px] rounded-md">
    <img
      src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
      alt="AirMax Pro"
      className="z-0 h-full w-full rounded-md object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
    <div className="absolute bottom-4 left-4 text-left">
      <h1 className="text-lg font-semibold text-white">Delba</h1>
      <p className="mt-2 text-sm text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
      </p>
      <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
        View Profile &rarr;
      </button>
    </div>
  </div>
  )
}

export default Card
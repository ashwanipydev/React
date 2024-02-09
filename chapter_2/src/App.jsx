/**
 * The App function renders a Card component with two props, userNmae and myObj, and displays a heading
 * and a div.
 * @returns The App component is returning a JSX fragment containing a heading element with the text
 * "Chapter 2" and a div element with the class names "flex w-full h-[80vh] justify-center
 * items-center". Inside the div, there is a Card component being rendered with two props: userNmae set
 * to "ankit" and myObj set to the details object.
 */

import  Card  from './components/Card'

function App() {
  const details= {
    age: 32,
    name: 'Delba',
    gender: 'female'
  }

  return (
    <>
      <h1 className='text-center font-serif bg-gray-700 text-white p-8 text-6xl'>Chapter 2</h1>
      <div className='flex w-full h-[80vh] justify-center items-center'>
        /* The `<Card userNmae="ankit" myObj={details} />` component is rendering a `Card` component
        with two props: `userNmae` and `myObj`. The `userNmae` prop is set to the string "ankit" and
        the `myObj` prop is set to the `details` object. These props can be accessed within the
        `Card` component for further processing or rendering. */
        <Card userNmae="ankit" myObj={details} />
      </div>
      
    </>
  )
}

export default App

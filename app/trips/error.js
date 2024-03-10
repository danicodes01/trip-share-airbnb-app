'use client'
export default function GlobalError ({ reset }) {
  return (
    <div className='error'>
      <h2>oh no!</h2>
      <p>Failed to fetch data ...</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}

import ImageSelector from '@/components/trips/image-selector'
import classes from './page.module.css'
import {create} from '../../../lib/actions'
import TripSubmit from '@/components/trips/trip-submit'
export default function ShareTripPage () {
  return (
    <>
      <header className={classes.header}>
        <p><span>share</span> your favorite memories</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={create}>
          <div className={classes.rows}>
            <p>
              <label htmlFor='name'>your name</label>
              <input type='text' id='author' name='author' />
            </p>
            <p>
              <label htmlFor='name'>trip location</label>
              <input type='text' id='location' name='location' />
            </p>
          </div>
          <p>
            <label>title</label>
            <input type='text' id='title' name='title' />
          </p>
          <p>
            <label>description</label>
            <textarea id='description' name='description' rows={10} />
          </p>
          <ImageSelector label='image' name='image' />
          <p className={classes.submit}>
            <TripSubmit/>
          </p>
        </form>
      </main>
    </>
  )
}

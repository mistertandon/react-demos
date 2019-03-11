import React from 'react';

import MiniFormic from './MiniFormic';

class Reservation extends React.Component {

  render() {

    return (

      <MiniFormic initialValues={
        {
          isGoing: true,
          numberOfGuests: 2
        }
      }>
        {
          (props) => {

            const { values, handleChange, handleBlur } = props;

            return (

              <form>

                <label>
                  Is going:
                <input
                    name="isGoing"
                    type="checkbox"
                    checked={values.isGoing}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </label>

                <br />

                <label>
                  Number of guests:
                <input
                    name="numberOfGuests"
                    type="number"
                    value={values.numberOfGuests}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </label>

              </form>
            )
          }



        }
      </MiniFormic>
    );
  }
}

export default Reservation;
import React from 'react';

import MiniFormic from './MiniFormic';

class Reservation extends React.Component {

  render() {

    return (

      <MiniFormic
        initialValues={
          {
            isGoing: true,
            numberOfGuests: 2
          }
        }
        onSubmit={

          (values) => {
            alert(JSON.stringify(values, null, 2));
          }
        }
      >
        {
          (props) => {

            const { values, touched, errors, handleChange, handleBlur, handleSubmit } = props;

            return (

              <form onSubmit={handleSubmit}>

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
                <pre>
                  {
                    JSON.stringify(props, null, 2)
                  }
                </pre>
              </form>
            )
          }



        }
      </MiniFormic>
    );
  }
}

export default Reservation;
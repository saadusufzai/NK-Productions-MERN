import React from 'react'
import styles from './Booking.module.css'
import Navbar from '../Navbar/Navbar'
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';
const Booking = () => {
    return (
        <div className={styles.booking}>
            <Navbar/>
        
            <div className={styles.box}>

                <div className={styles.left}>
                    <h2>Book Your Event Now</h2>
                    <form >
                       
                        <TextField id="standard-basic" label="Event Type" />
                        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
                    </form>
                </div>
                <div className={styles.right}></div>

            </div>

          
        </div>
    )
}

export default Booking

import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';
import React from 'react'

const Fields = ({name, email, index}) => {
  return (
    <div className="data_val">
          <h4>{name}</h4>
          <h4>{email}</h4>
          <h4 className='remove'>
            <Button oncvariant="contained" color="error">
              <ClearIcon />
            </Button></h4>
        </div>
  )
}

export default Fields
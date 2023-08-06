import React from 'react'

export default function alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.type} role="alert`}>
  <strong><h3>{props.alert.msg}</h3></strong>
  
</div>
   
  )
}

import React from 'react'

function Header( props ) {
const logo = < img src= " data:image/png;base64,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" className="logoo" alt="logo_keep" />
    return (
        <div className="header">
        {logo}
            <h3>  keeper  </h3>
         </div>
    )
}

export default Header
    
import React from 'react'

function Logout() {
    if(localStorage.getItem('User')) {
        localStorage.removeItem('User')
        alert('Logged Out')
        window.location.reload()
    }
    return (
        <div>
            Logging Out...
        </div>
    )
}

export default Logout

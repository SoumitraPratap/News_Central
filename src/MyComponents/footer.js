import React from 'react'

export default function footer() {
    let footerStyle={
    top: "90vh",
    width: "100%",
    border:"2px solid green"
    }
  return (
    <footer className="bg-dark text-light py-3" style={footerStyle}>
        <p className="text-center">
            Copyright newcentral.com
        </p>

    </footer>
  )
}


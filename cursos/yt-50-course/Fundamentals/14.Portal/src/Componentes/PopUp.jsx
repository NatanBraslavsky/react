import React from 'react'

const PopUp = ({copied}) => {
  return (
    <section>
        {copied && (
            <div style={{ position: "absolute", bottom: "3" }}>
                Copied to cliboard
            </div>
        )}
    </section>
  )
}

export default PopUp
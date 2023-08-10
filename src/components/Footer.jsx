/* eslint-disable react/prop-types */
const Footer = ({length}) => {
  return (
    <footer>
        <p>You have {length} pending task{length ===0 || length > 1 ?"s" : ""}.</p>
    </footer>
  )
}

export default Footer
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import MickSchroederIcon from "../images/assets/mickschroeder.svg"

const Header = ({ siteTitle }) => (
  <header className="flex-none bg-black p-6 text-center py-6">
    <div className="navigation mx-auto">
      <a href="https://mickschroeder.com" rel="external">
        <MickSchroederIcon className="fill-current" height="30px" />
      </a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

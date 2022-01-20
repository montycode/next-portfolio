const NavLink = ({ onClick, href, children, className }) => {
    return (
      <a href={href} onClick={onClick} className={className}>
        {children}
      </a>
    )
}

export default NavLink;
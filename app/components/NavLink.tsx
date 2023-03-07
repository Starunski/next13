import Link from "next/link";
// import styled from 'styled-components'

// This creates a custom component that wraps an <a> tag
// const RedLink = styled.a`
//   color: red;
// `;

function NavLink({ href, name }) {
  return (
    <Link href={href} passHref legacyBehavior>
      {/* <RedLink>{name}</RedLink> */}
    </Link>
  );
}

export default NavLink;

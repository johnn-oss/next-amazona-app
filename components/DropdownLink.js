import Link from 'next/link';
import React from 'react'

export default function DropdownLink(props) {
    let {href, children, ...rest} = props;
  return (
    // eslint-disable-next-line react/no-unescaped-entities
    <Link href={href} >
        {{...rest}>{children}}
    </Link>
  )
}

import React from "react";
import Link from 'next/link'


function Navbar(){
    return <div className="text-sm my-4">
        <Link href="/">
        <a className="nav-link hover:text-blue-400" >Home</a>        
        </Link>
        <Link href="/about">
            <a className="nav-link hover:text-blue-400">About</a>
        </Link>
        <Link href="/jobs/list">
            <a className="nav-link hover:text-blue-400">Jobs</a>
        </Link>        
    </div>
}

function Layout(props) {
  const { children } = props;
  return (
    <div className="layout max-w-2xl mx-auto">
      <div className="text-2xl px-8"> <Navbar/> </div>
      <div className="p-8 my-4">{children}</div>
    </div>
  );
}

export default Layout;

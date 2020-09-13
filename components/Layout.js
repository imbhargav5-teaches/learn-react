import React from "react";
import Link from 'next/link'


function Navbar(){
    return <div>
        <Link href="/">
        <a className="text-blue-600 mr-4" >Home</a>        
        </Link>
        <Link href="/about">
            <a className="text-blue-600 mr-4">About</a>
        </Link>
        <Link href="/jobs/list">
            <a className="text-blue-600 mr-4">Jobs</a>
        </Link>        
    </div>
}

function Layout(props) {
  const { children } = props;
  return (
    <div className="layout max-w-xl mx-auto">
      <div className="text-2xl"> <Navbar/> </div>
      <div className="p-8 border my-4">{children}</div>
    </div>
  );
}

export default Layout;

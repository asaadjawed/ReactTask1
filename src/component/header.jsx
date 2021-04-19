import React from 'react';


class Header extends React.Component{
    render(){
        return(

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    React Task 1
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Work</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Blog</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Our Items
                </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Categories</a></li>
                                <li><a className="dropdown-item" href="#">Product</a></li>
                                <li><a className="dropdown-item" href="#">Product Details</a></li>
                            </ul>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>


        )
    }
}


class List extends React.Component{
    render(){
        return(
            <div>
     
      </div>
        )
    }
}

export  {Header, List} 
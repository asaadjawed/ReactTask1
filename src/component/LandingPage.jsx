import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


export default class FetchData extends Component{

    state ={
        posts : []
    }

    componentDidMount(){
        axios.get('https://api.publicapis.org/categories')

        .then(res=>{

            

            this.setState({
                posts : res.data,
            })
            
        })
     }
    


    render(){

        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(posts =>{
                return(
                    <div>
                    <div className="row">
                    <div className="col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">{posts}</h5>
                          <Link to={`/category/${posts}`}> Post details</Link>
                        </div>
                      </div>
                    </div>
                  
                  </div>

                 </div>
                )
            })
        ):(
            <div className="center"> No Post </div>
        )


        return(
            <div>
              {postList};
            </div>
        )
    }
}
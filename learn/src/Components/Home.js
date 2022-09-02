import React from 'react'
import {Button,Table} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from './Employee';
import {Link, useNavigate} from 'react-router-dom'

function Home(){
    let history=useNavigate();
    const handleDelete=(id)=>{
        var index=Employees.map((e)=>{ 
            return e.id;
        }).indexOf(id)
        Employees.splice(index,1);
        history('/');
    }
    const handleEdit=(id,name,age)=>{
        
        localStorage.setItem('Name',name)
        localStorage.setItem('Age',age)
        localStorage.setItem('Id',id)


    }
    return(

            <>
       
 <div  style={{margin:"10rem"}}>
<Table  key={Employees.id} striped bordered hover size="sm">
  <thead key={Employees.id}>
        <tr key={Employees.id}>
       <th key={Employees.id}>Name</th>
        <th key={Employees.id}>Age</th>
    </tr>
</thead>

    <tbody>
        {  Employees && Employees.length > 0 
             ?
            Employees.map((item)=>{
                return( 

                    <tr key={item.id}>
                <td >
                {item.Name}
             </td>
            <td >
            {item.Age}
            </td>
         <td>
            <Link to={`/edit`}>

        <Button onClick={()=> handleEdit(item.id,item.Name,item.Age)}>Edit</Button>
            </Link>
        &nbsp;
        <Button onClick={()=>handleDelete(item.id)}>Delete</Button>
         </td>
        </tr>
                
         ) 
         })
         :
        "No data available"
}
    </tbody>
    </Table>
    <br>
    </br>
    <Link className='d-grid gap-2' to="/create">
        <Button size="lg">Create</Button>
    </Link>
    </div>

                    
     </>
    )
}

export default Home
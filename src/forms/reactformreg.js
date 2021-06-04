import React,{useState} from 'react'

const Reactformreg = () => {

    const [userReginfo, setuserReginfo] = useState({
        username: "",
        email: "",
        phone:"",
        password:""
    });
    
    const [record, setRecord] = useState([]);

    const infoInput =(a) => {
        const name = a.target.name;
        const value = a.target.value;
        console.log(name, value);

        setuserReginfo({...userReginfo, [name]: value });
    }
    const handelSubmit = (a) => {
        a.preventDefault();

        const subReg = {...userReginfo, id: new Date().getTime().toString() }

        setRecord([...record, subReg ]);

        setuserReginfo({username: "", email:"", phone:"", password:"" })
    }

    return (
        <div className="bc_code">
         <form action="" onSubmit={handelSubmit}>
             <div>
                 <label htmlFor="username">Fullname</label> 
                 <input type="text" autoComplete="off" 
                 value={userReginfo.username} onChange={infoInput} name="username" id="username" />
             </div>

             <div>
                 <label htmlFor="email">email</label>
                 <input type="text" autoComplete="off" value={userReginfo.email}
                  onChange={infoInput} name="email" id="email" />
             </div>

             <div>
                 <label htmlFor="phone">phone</label>
                 <input type="text" autoComplete="off" value={userReginfo.phone} 
                 onChange={infoInput} name="phone" id="phone" />
             </div>

             <div>
                 <label htmlFor="password">password</label>
                 <input type="password" autoComplete="off" value={userReginfo.password} 
                 onChange={infoInput} name="password" id="password" />
             </div>

             <button type="submit">Registration</button>
         </form>  

        <div>
            {
                record.map((curElem) => {
                    const {id, username, email, phone, password} = curElem;
                    return(
                        <div className="showData" key={id}>
                            <p>{username}</p>
                            <p>{email}</p>
                            <p>{phone}</p>
                            <p>{email}</p> 
                        </div>
                    )
                })
            }
        </div>

        </div>
    )
}

export default Reactformreg


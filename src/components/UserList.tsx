import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import User from "./User";

interface Props{
    
}

const UserList: React.FC<Props> = ({children}) => { 
    let [userInfo, setUserInfo] = useState<any[]>([])
    let [pageNoIs, setPageNoIs] = useState(1)
    useEffect(() =>{
        axios.get("https://randomuser.me/api/?inc=id,name,gender,email&page="+ pageNoIs +"&results=20").
        then((UserData) =>{
            setUserInfo(UserData.data.results);
        })
    }, [pageNoIs])   
    
    return(
        <>
            <button className="fixed top-0 hover:bg-primary-dark w-full py-4 text-center bg-primary-darkest text-white" onClick={()=>{setPageNoIs(pageNoIs => (pageNoIs + 1))}}>Change Page</button>
            <div className="max-w-8xl mx-auto px-4 flex flex-wrap justify-center mt-14">
                {userInfo.map(user => {return(
                    <User 
                        name={(user.name.first + " " + user.name.last)}
                        eMail={user.email}
                    />
                )})}
            </div>
            <>{children}</>
        </>
    )
};

export default React.memo(UserList);
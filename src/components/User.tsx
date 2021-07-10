import React from "react";

interface Props{
    name: string;
    eMail: string;
}

const User: React.FC<Props> = ({name, eMail}) => {
    return(
        <div className="w-72 bg-white m-4 p-4 text-center rounded-md">
            <h1 className="text-xl mb-6 font-sans border-b-2">{name}</h1>
            <h2 className="text-gray-600">E-mail:</h2>
            <h3 className="text-gray-600">{eMail}</h3>
        </div>
    )
};

export default React.memo(User);
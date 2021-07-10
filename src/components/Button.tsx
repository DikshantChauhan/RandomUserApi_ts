import { AnchorHTMLAttributes } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement>{
    theme: "white" | "black" | "transparent" | "green";
    className?: string;
}

const Button: React.FC<Props> = ({children, theme, className, ...rest}) => {
    let themeClass: string;
    if(theme === "white"){
        themeClass = "bg-white text-black border hover:bg-gray-200 border-black"
    }else if(theme === "black"){
        themeClass = "bg-black text-white hover:bg-gray-700"
    }else if(theme === "green"){
        themeClass = "bg-primary-dark text-white"
    }else{
        themeClass = "text-white border border-white"
    }
    
    return(
        <a {...rest} className={`min-w-max rounded-3xl px-4 py-2 cursor-pointer ${themeClass!} ${className}`}>
            {children}       
        </a>
    )
};

export default Button;
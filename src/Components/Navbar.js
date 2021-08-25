import { useState } from "react";

const Navbar = () => {
    const [navTitle, setTitle] = useState('Dojo Blog');
    const handleChangesTitle = () => {
        setTitle('Alpha');
    }

    return (
        <div className="flex flex-row w-full shadow justify-between p-5">
            <div>
                <button onClick={handleChangesTitle}>{navTitle}</button>
            </div>
            <div>
                <button className="ml-5">New Blog</button>
                <button className="ml-5">Github</button>
            </div>
        </div>
    );
}

export default Navbar;
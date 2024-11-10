import React, { useState } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

function Collapse({ title, children, headerClassName, contentClassName }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse">
            <div className={`collapse-header ${headerClassName}`} onClick={toggleCollapse}>
                <h3>{title}</h3>
                {isOpen ? <FaChevronDown /> : <FaChevronUp />}
            </div>
            {isOpen && <div className={`collapse-content ${contentClassName}`}>{children}</div>}
        </div>
    );
}

export default Collapse;
"use client";

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import React, { useState } from "react";

export default function Check() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="space-y-4">
          
        </div>
    );
}

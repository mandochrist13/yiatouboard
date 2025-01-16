"use client";

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import React, { useState } from "react";
import Check from "./Check";
import Descrition from "./Descrition";

export default function Buttonderoulant() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="space-y-4 p-6">
           
        </div>
    );
}

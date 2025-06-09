"use client"; // Ensure this runs only on the client side

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import React from "react";

interface BadgeProps {
    text: string;
    subText?: string;
    position: string;
    bgColor?: string;
    textColor?: string;
    width?: string;
}

const Badge: React.FC<BadgeProps> = ({
    text,
    subText,
    position,
    bgColor = "bg-white",
    textColor = "text-black",
    width = "w-auto",
}) => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);
    return (
        <div
            className={`absolute ${position} ${bgColor} ${textColor} p-2 rounded-xl text-center shadow-md ${width}`}
            data-aos="zoom-in"
        >
            <p className='text-center'>
                {text && <span className="font-semibold text-lg md:text-2xl">{text}</span>}
                {subText && <span className="text-xs md:text-base">{subText}</span>}
            </p>
        </div>
    );
};

export default Badge;



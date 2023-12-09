"use client";
import React, {useState, useEffect} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

interface TemplateProps {
  children: React.ReactNode;
}

export default function Template({ children }: TemplateProps) {
  const [open, setOpen ] = useState(true)


  const path = usePathname()
  return (
    <div>
        {children}        
    </div>
  );
}

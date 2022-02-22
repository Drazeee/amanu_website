import React from "react";
import Header from "../components/Header/Header";
import { motion } from "framer-motion";

export default function Contact() {
    const transition = {duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96]};
    return (
        <motion.div exit={{ opacity: 0 }} transition={transition}>
            <Header />
        </motion.div>
    );
}

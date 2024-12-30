import { motion, useScroll } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { cascadia } from "@/lib/fonts";
import Typewriter from "./typewriter";

export const Certification = ({
    name = "Certification Name",
    description = [
        "Description of the certification. For example, 'This certification validates skills in cloud technologies, AI development, and implementation.'",
    ],
    issuedBy = "Provider Name",
    date = "June 2024",
    credentialLink = "", // Keep this prop for the actual credential link
    gallery = [],
}: {
    name: string;
    description: string[];
    issuedBy: string;
    date: string;
    credentialLink: string;
    gallery?: string[]; // Optional array of strings for gallery images
}) => {
    const [elementInView, setElementInView] = useState(false);
    const scrollRef = useRef(null);

    const { scrollY } = useScroll({
        target: scrollRef,
    });

    useEffect(() => {
        if (elementInView) {
            scrollY.onChange(() => {});
        }
    }, [elementInView, scrollY]);

    return (
        <div
            ref={scrollRef}
            className="relative z-0 max-sm:h-[100vh] bg-[--background] pt-5 max-sm:pt-10"
        >
            <div className="flex flex-col h-[80%] max-sm:h-[95%]">
                <motion.div
                    layout
                    className="flex max-sm:flex-col max-sm:h-full justify-evenly"
                    onViewportEnter={() => setElementInView(true)}
                    transition={{ duration: 0 }}
                >
                    {/* Name and Typewriter Animation */}
                    <div className="w-1/4 max-sm:w-full max-sm:mb-5">
                        <div className="w-[60%] h-full max-sm:w-full text-right max-sm:text-center">
                            <span className={cn("text-[--text-primary] text-xl", cascadia.className)}>
                                /
                                <Typewriter trigger={elementInView}>
                                    {name.toLowerCase().replace(' ', '_')}
                                </Typewriter>
                            </span>
                            <div className="text-[--text-primary] text-2xl mr-4 italic font-light">
                                {date}
                            </div>
                        </div>
                    </div>

                    {/* Description and Tech Stack */}
                    <div className="text-[--text-secondary] text-md w-1/2 max-sm:w-full max-sm:px-10">
                        <div className={cn("bg-[--foreground] text-[--text-inverse] mb-2 pl-2", cascadia.className)}>
                            <span>&gt;_ </span>
                            <Typewriter trigger={elementInView}>
                                cat info.txt
                            </Typewriter>
                        </div>

                        <div>
                            {
                                description.map((desc, index) => (
                                    <motion.p
                                        key={index}
                                        className="mb-2 max-sm:w-full"
                                        style={{
                                            display: "block", // Ensure consistent spacing
                                        }}
                                        initial={{ opacity: 0 }}
                                        animate={elementInView ? { opacity: 1 } : { opacity: 0 }}
                                        transition={{ duration: 0.3, delay: 0.6 + index * 0.3 }}
                                    >
                                        {desc}
                                    </motion.p>
                                ))
                            }

                            <motion.div
                                className="text-[--text-primary] items-center italic my-2"
                                initial={{ opacity: 0 }}
                                animate={elementInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ duration: 0.3, delay: 0.6 + description.length * 0.3 }}
                            >
                                <span className="font-bold">Issued By: </span>
                                {issuedBy}
                            </motion.div>
                        </div>
                    </div>

                    {/* Gallery and Visit Links */}
                    <div className="w-1/4 max-sm:w-full text-[--text-primary]">
                        <div className="w-full h-full flex flex-col max-sm:flex-row">
                            {/* Gallery Link */}
                            <div className="h-1/2 grid place-items-center max-sm:w-1/2">
                                <span
                                    className={cn("hover:text-[--text-inverse] hover:bg-white", gallery.length === 0 ? 'cursor-not-allowed' : 'cursor-pointer')}
                                    onClick={() => {} /* Implement gallery expand logic */}
                                    title={gallery.length === 0 ? 'Coming soon!' : 'Expand gallery'}
                                >
                                    gallery &lt;-
                                </span>
                            </div>

                            {/* Credential Link */}
                            <motion.div
                                className="h-1/2 grid place-items-center max-sm:w-1/2"
                            >
                                <span
                                    className="hover:text-[--text-inverse] hover:bg-white hover:cursor-pointer"
                                    onClick={() => {
                                        window.open(credentialLink, '_blank');
                                    }}
                                >
                                    visit -&gt;
                                </span>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Certification;

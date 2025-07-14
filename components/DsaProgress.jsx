import React, { useState, useEffect } from 'react';
import SpotlightCard from './animations/SpotlightCard';
import CircularProgressCard from './animations/CircularProgressCard';
import fetchLeetcodeStats from '@/lib/fetchLeetcodeStats';
import fetchGfgStats from '@/lib/fetchGfgStats';
import { FaSpinner } from 'react-icons/fa';
import leetcodeLogo from '@/public/DsaLogos/leetcode.svg';
import gfgLogo from '@/public/DsaLogos/geeksforgeeks.svg';
import Image from 'next/image';
import { motion } from 'framer-motion';
import BlurText from '@/components/animations/BlurText'

const DsaProgress = () => {
    const [leetcode, setLeetcode] = useState(null);
    const [gfg, setGfg] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchDSAData() {
            const [lc, gf] = await Promise.all([
                fetchLeetcodeStats(),
                fetchGfgStats()
            ]);
            setLeetcode(lc);
            setGfg(gf);
            setLoading(false);
        }
        fetchDSAData();
    }, []);

    const renderBar = (label, value, total, colorFrom, colorTo) => {
        const percent = (value / total) * 100;
        const gradient = `linear-gradient(to right, ${colorFrom}, ${colorTo})`;

        return (
            <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                    <span>{label}</span>
                    <span>{value}</span>
                </div>
                <div className="w-full h-2 bg-transparent rounded-md overflow-hidden">
                    <div
                        className="h-full rounded-md"
                        style={{
                            width: `${percent}%`,
                            background: gradient
                        }}
                    />
                </div>
            </div>
        );
    };

    return (
        <div className='pb-3 pt-3 px-4 md:px-10 text-center mb-30'>
            <BlurText
                text="📊 DSA Progress"
                delay={10}
                animateBy="words"
                direction="top"
                className="text-3xl font-bold m-auto w-fit mb-8"
            />

            <div className='flex flex-col gap-y-3'>
                <SpotlightCard className=" custom-spotlight-card transition transform-3d hover:scale-104 duration-300  m-auto  w-full md:w-7/10" spotlightColor="rgba(150, 29, 255, 0.6)">
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -100
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.8,
                            ease: 'easeOut'
                        }}
                    >
                        <h2 className="text-xl font-semibold mb-2">🚀 Problem Solving Journey</h2>
                        <p className="text-md text-balance text-gray-600 dark:text-gray-300">
                            I've solved over 800+ problems on platforms like LeetCode and GFG. This consistent practice has enhanced my problem-solving
                            skills and analytical thinking required to approach real-world software engineering challenges.
                        </p>
                    </motion.div>
                </SpotlightCard>
                <div className='flex flex-col md:flex-row mx-4 md:mx-36 gap-y-6 md:gap-y-0 md:gap-x-5'>
                    {/* LeetCode Card */}

                    <SpotlightCard className="px-6 md:px-15 custom-spotlight-card w-full transition transform-3d hover:scale-104 duration-300" spotlightColor="rgba(230, 209, 25, 0.8)">
                        <motion.div
                            initial={{
                                opacity: 0,
                                x: -100
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{
                                duration: 0.8,
                                ease: 'easeOut'
                            }}
                            viewport={{ once: true, amount: 0.6}}
                        >
                            <div className='flex justify-between items-center cursor-pointer' onClick={() => window.open("https://leetcode.com/u/naivedyab198/", "_blank")}>
                                <h2 className="text-lg font-semibold flex items-center mb-10px  gap-2">
                                    <Image src={leetcodeLogo} alt="LeetCode" className="w-6 h-6" />
                                    LeetCode
                                </h2>
                            </div>

                            {loading ? (
                                <div className="flex justify-center items-center h-32">
                                    <FaSpinner className="animate-spin text-2xl" />
                                </div>
                            ) : leetcode && (
                                <>
                                    <div className="flex flex-col md:flex-row justify-between mb-6">
                                        <div className='flex flex-col justify-center items-center md:items-start mb-4 md:mb-0'>
                                            <div>Global Rank : {leetcode.ranking}</div>
                                            <div>Total Solved : {leetcode.totalSolved}</div>
                                        </div>

                                        <CircularProgressCard
                                            solved={leetcode.totalSolved}
                                            easySolved={leetcode.easySolved}
                                            mediumSolved={leetcode.mediumSolved}
                                            hardSolved={leetcode.hardSolved}
                                            total={leetcode.totalQuestions}
                                        />
                                    </div>
                                    <div>
                                        {renderBar("Easy", leetcode.easySolved, leetcode.totalSolved, "#4ade80", "#22c55e")}
                                        {renderBar("Medium", leetcode.mediumSolved, leetcode.totalSolved, "#fb923c", "#facc15")}
                                        {renderBar("Hard", leetcode.hardSolved, leetcode.totalSolved, "#ef4444", "#dc2626")}
                                    </div>
                                </>
                            )}
                        </motion.div>
                    </SpotlightCard>

                    {/* GFG Card */}
                    <SpotlightCard className=" px-6 md:px-15 custom-spotlight-card w-full transition transform-3d hover:scale-104 duration-300" spotlightColor="rgba(100, 255, 150, 0.8)">
                        <motion.div
                            initial={{
                                opacity: 0,
                                x: 100
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{
                                duration: 0.4,
                                ease: 'easeOut'
                            }}
                            viewport={{ once: true, amount: 0.6}}
                        >
                            <div className='flex justify-between items-center cursor-pointer' onClick={() => window.open("https://www.geeksforgeeks.org/user/naivedya/", "_blank")}>
                                <h2 className="text-lg font-semibold mb-10px  flex items-center gap-2">
                                    <Image src={gfgLogo} alt="GFG" className="w-6 h-6" />
                                    GFG
                                </h2>
                            </div>

                            {loading ? (
                                <div className="flex justify-center items-center h-32">
                                    <FaSpinner className="animate-spin text-2xl" />
                                </div>
                            ) : gfg && (
                                <>
                                    <div className="flex flex-col md:flex-row justify-between mb-6">
                                        <div className='flex flex-col justify-center items-center md:items-start mb-4 md:mb-0'>
                                            <div>Institute Rank : 10</div>
                                            <div>Total Solved : {gfg.totalProblemsSolved}</div>
                                        </div>

                                        <CircularProgressCard
                                            solved={gfg.totalProblemsSolved}
                                            easySolved={gfg.Easy + gfg.Basic}
                                            mediumSolved={gfg.Medium}
                                            hardSolved={gfg.Hard}
                                            total={3554}
                                        />
                                    </div>
                                    <div>
                                        {renderBar("Easy", gfg.Easy + gfg.Basic, gfg.totalProblemsSolved, "#4ade80", "#22c55e")}
                                        {renderBar("Medium", gfg.Medium, gfg.totalProblemsSolved, "#fb923c", "#facc15")}
                                        {renderBar("Hard", gfg.Hard, gfg.totalProblemsSolved, "#ef4444", "#dc2626")}
                                    </div>
                                </>
                            )}
                        </motion.div>
                    </SpotlightCard>
                </div>
            </div>
        </div>
    );
};

export default DsaProgress;

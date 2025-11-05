import React from 'react'
import { motion } from 'framer-motion'

function Features() {
  return (
    <div className='pt-20'>
    <motion.div className='w-full flex flex-col gap-5 justify-center items-center'>
        <p className='border border-purple-400 rounded-full px-5 py-1 text-purple-500 font-semibold bg-purple-100 flex items-center gap-1'><p className='w-2 h-2 rounded-full bg-purple-500 animate-pulse'></p>Integrated Solution for College Students</p>
        <h1 className='text-6xl font-bold'><span className='text-purple-500'>Work Lazy Smart.</span><br />Not Stupid Hard.</h1>
        <p className='text-gray-600 text-xl text-center'>The age of stupid hard work is over - let AI do the heavy lifting instead. Enter slothUI: A lazy <br /> Figma design system & UI Kit for the betterment of humanity 4.0.</p>
    </motion.div>

    <motion.div initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8, ease: "easeOut"}} viewport={{ once: true, amount: 0.3 }} className='grid grid-cols-1 md:grid-cols-2 px-15 gap-20 mt-20 justify-between items-center'>
        <div>
            <img src="https://cdn.prod.website-files.com/662c8f5868c6566dc279808a/662e26ec3480e9da2b5621c8_features-1.webp" alt="" className='object-contain rounded-3xl' />
        </div>
        <div className='flex flex-col gap-5'>
            <img src="https://cdn.prod.website-files.com/662c8f5868c6566dc279808a/662e21777ae5350e2fa844f6_features-icon-1.svg" alt="" className='w-15' />
            <h1 className='text-3xl font-bold'>Design your next product with the absolute least amount of effort.</h1>
            <p className='text-xl text-gray-700'>SlothUI is the one and only Figma design system tailored for special people who prefer taking it easy while maximizing result. Say goodbye to long, useless design processes! 👋</p>
            <div className='flex flex-col gap-5'>
                <p className='text-xl font-medium text-gray-600 flex gap-2'><img src="https://cdn.prod.website-files.com/662c8f5868c6566dc279808a/662cbcbe8a72a974e54ad8bb_features-checklist.svg" alt="" /> Design Integration</p>
                <p className='text-xl font-medium text-gray-600 flex gap-2'><img src="https://cdn.prod.website-files.com/662c8f5868c6566dc279808a/662cbcbe8a72a974e54ad8bb_features-checklist.svg" alt="" /> Design Integration</p>
                <p className='text-xl font-medium text-gray-600 flex gap-2'><img src="https://cdn.prod.website-files.com/662c8f5868c6566dc279808a/662cbcbe8a72a974e54ad8bb_features-checklist.svg" alt="" /> Design Integration</p>
            </div>
        </div>
    </motion.div>

    <motion.div initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8, ease: "easeOut"}} viewport={{ once: true, amount: 0.3 }} className='grid grid-cols-1 md:grid-cols-2 px-15 gap-20 mt-20 justify-between items-center'>
        <div className='flex flex-col gap-5'>
            <img src="https://cdn.prod.website-files.com/662c8f5868c6566dc279808a/662e21777ae5350e2fa844f6_features-icon-1.svg" alt="" className='w-15' />
            <h1 className='text-3xl font-bold'>Design your next product with the absolute least amount of effort.</h1>
            <p className='text-xl text-gray-700'>SlothUI is the one and only Figma design system tailored for special people who prefer taking it easy while maximizing result. Say goodbye to long, useless design processes! 👋</p>
            <div className='flex flex-col gap-5'>
                <p className='text-xl font-medium text-gray-600 flex gap-2'><img src="https://cdn.prod.website-files.com/662c8f5868c6566dc279808a/662cbcbe8a72a974e54ad8bb_features-checklist.svg" alt="" /> Design Integration</p>
                <p className='text-xl font-medium text-gray-600 flex gap-2'><img src="https://cdn.prod.website-files.com/662c8f5868c6566dc279808a/662cbcbe8a72a974e54ad8bb_features-checklist.svg" alt="" /> Design Integration</p>
                <p className='text-xl font-medium text-gray-600 flex gap-2'><img src="https://cdn.prod.website-files.com/662c8f5868c6566dc279808a/662cbcbe8a72a974e54ad8bb_features-checklist.svg" alt="" /> Design Integration</p>
            </div>
        </div>
        <div>
            <img src="https://cdn.prod.website-files.com/662c8f5868c6566dc279808a/662e26ec3480e9da2b5621c8_features-1.webp" alt="" className='object-contain rounded-3xl' />
        </div>
    </motion.div>

    <motion.div initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8, ease: "easeOut"}} viewport={{ once: true, amount: 0.3 }} className='grid grid-cols-1 md:grid-cols-2 px-15 gap-20 mt-20 justify-between items-center'>
        <div>
            <img src="https://cdn.prod.website-files.com/662c8f5868c6566dc279808a/662e26ec3480e9da2b5621c8_features-1.webp" alt="" className='object-contain rounded-3xl' />
        </div>
        <div className='flex flex-col gap-5'>
            <img src="https://cdn.prod.website-files.com/662c8f5868c6566dc279808a/662e21777ae5350e2fa844f6_features-icon-1.svg" alt="" className='w-15' />
            <h1 className='text-3xl font-bold'>Design your next product with the absolute least amount of effort.</h1>
            <p className='text-xl text-gray-700'>SlothUI is the one and only Figma design system tailored for special people who prefer taking it easy while maximizing result. Say goodbye to long, useless design processes! 👋</p>
            <div className='flex flex-col gap-5'>
                <p className='text-xl font-medium text-gray-600 flex gap-2'><img src="https://cdn.prod.website-files.com/662c8f5868c6566dc279808a/662cbcbe8a72a974e54ad8bb_features-checklist.svg" alt="" /> Design Integration</p>
                <p className='text-xl font-medium text-gray-600 flex gap-2'><img src="https://cdn.prod.website-files.com/662c8f5868c6566dc279808a/662cbcbe8a72a974e54ad8bb_features-checklist.svg" alt="" /> Design Integration</p>
                <p className='text-xl font-medium text-gray-600 flex gap-2'><img src="https://cdn.prod.website-files.com/662c8f5868c6566dc279808a/662cbcbe8a72a974e54ad8bb_features-checklist.svg" alt="" /> Design Integration</p>
            </div>
        </div>
    </motion.div>

    <motion.div initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8, ease: "easeOut"}} viewport={{ once: true, amount: 0.3 }} className='grid grid-cols-1 md:grid-cols-2 px-15 gap-20 mt-20 justify-between items-center'>
        <div className='flex flex-col gap-5'>
            <img src="https://cdn.prod.website-files.com/662c8f5868c6566dc279808a/662e21777ae5350e2fa844f6_features-icon-1.svg" alt="" className='w-15' />
            <h1 className='text-3xl font-bold'>Design your next product with the absolute least amount of effort.</h1>
            <p className='text-xl text-gray-700'>SlothUI is the one and only Figma design system tailored for special people who prefer taking it easy while maximizing result. Say goodbye to long, useless design processes! 👋</p>
            <div className='flex flex-col gap-5'>
                <p className='text-xl font-medium text-gray-600 flex gap-2'><img src="https://cdn.prod.website-files.com/662c8f5868c6566dc279808a/662cbcbe8a72a974e54ad8bb_features-checklist.svg" alt="" /> Design Integration</p>
                <p className='text-xl font-medium text-gray-600 flex gap-2'><img src="https://cdn.prod.website-files.com/662c8f5868c6566dc279808a/662cbcbe8a72a974e54ad8bb_features-checklist.svg" alt="" /> Design Integration</p>
                <p className='text-xl font-medium text-gray-600 flex gap-2'><img src="https://cdn.prod.website-files.com/662c8f5868c6566dc279808a/662cbcbe8a72a974e54ad8bb_features-checklist.svg" alt="" /> Design Integration</p>
            </div>
        </div>
        <div>
            <img src="https://cdn.prod.website-files.com/662c8f5868c6566dc279808a/662e26ec3480e9da2b5621c8_features-1.webp" alt="" className='object-contain rounded-3xl' />
        </div>
    </motion.div>

    <div className='w-full flex flex-col justify-center items-center bg-purple-100 py-10 my-10 gap-5'>
        <h1 className='text-4xl font-bold'>Design, Build, Zzz, Repeat.</h1>
        <p className='text-xl text-center'>Design lazy smart, not stupid hard. Design, code, and ship your next product in the <br /> least amount of effort with slothUI. 🦥</p>
        <button className='px-20 py-2 rounded-full bg-purple-500 text-white text-xl font-semibold cursor-pointer hover:bg-purple-600 transition-all duration-300 ease-in-out'>Explore Now</button>
    </div>
    </div>
  )
}

export default Features
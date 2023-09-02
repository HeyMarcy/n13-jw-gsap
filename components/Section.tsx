import React from 'react'
import JobListing from './JobListing'
import jobs from '../data/jobs.json'

const Section = () => {
    return (
        <section
            id="experience"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Work experience">
            <div
                className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
            >
                <h2
                    className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only"
                >
                    Experience
                </h2>
            </div>
            <ol className="group/list">
                {jobs.map(({ dateFrom, dateTo, url1, title1, employer, achievements, index }) => (
                    <li className="mb-12" key={index}>
                        <JobListing dateFrom={dateFrom} dateTo={dateTo} url1={url1} title1={title1} employer={employer} achievements={achievements} />
                    </li>
                ))}
            </ol>
        </section>
    )
}

export default Section
import React from "react";

const jobOpenings = [
    {
        id: 1,
        title: "Full Stack Software Developer",
        tag: "SaaS / CRM",
        location: "Remote",
        description:
            "We are looking for an experienced developer to build, deploy, and maintain custom SaaS applications and CRM systems for our clients. Strong knowledge of modern web frameworks and database management is required.",
    },
    {
        id: 2,
        title: "Linux Server & System Administrator",
        tag: "Infrastructure",
        location: "Remote",
        description:
            "Seeking a technical expert to manage, optimize, and secure Linux based IT infrastructure. Experience with cloud platforms such as AWS, Azure, or Google Cloud and server troubleshooting is a must.",
    },
    {
        id: 3,
        title: "Government Procurement & Bidding Specialist",
        tag: "Procurement",
        location: "Remote / Hybrid",
        description:
            "Looking for a detail oriented professional to manage state and federal bidding processes, navigate portals like SAM.gov, BidNet, Unison, and State Portals, and prepare compelling technical proposals.",
    },
    {
        id: 4,
        title: "IT Hardware Sales Executive",
        tag: "Sales",
        location: "Remote",
        description:
            "We need a driven sales professional to handle the wholesale and retail distribution of IT hardware and electrical equipment to B2B clients and public sector departments.",
    },
];

const benefits = [
    {
        title: "Innovative Projects",
        description:
            "Work on challenging projects ranging from SaaS and CRM development to enterprise level Linux server management and federal bidding.",
    },
    {
        title: "Career Growth",
        description:
            "We encourage continuous learning and provide opportunities for professional advancement.",
    },
    {
        title: "Flexible Environment",
        description:
            "We value work life balance and offer remote or hybrid working opportunities based on the role.",
    },
    {
        title: "Collaborative Culture",
        description:
            "Join a team of experts who value teamwork, transparency, and creative problem solving.",
    },
];

const Career = () => {
    return (
        <main className="w-full bg-[#F4F7FB]">
            {/* Hero Section */}
            <section className="w-full bg-[#031126] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
                <div className="max-w-7xl mx-auto text-center mt-16">
                    <span className="inline-block bg-[#0D7FFB]/15 text-[#60A5FA] border border-[#1D4ED8]/40 rounded-full px-5 py-2 text-[13px] sm:text-[14px] font-medium mb-5">
                        Careers at Vaxterm LLC
                    </span>

                    <h1 className="text-white text-[32px] sm:text-[42px] md:text-[52px] lg:text-[64px] font-bold leading-tight">
                        Join Our Team of Innovators
                    </h1>

                    <p className="max-w-3xl mx-auto mt-5 text-[#CBD5E1] text-[14px] sm:text-[16px] md:text-[18px] leading-[26px] sm:leading-[30px]">
                        At Vaxterm LLC, we are always looking for passionate, driven,
                        and talented individuals to join our growing team.
                    </p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-white rounded-[20px] sm:rounded-[28px] shadow-sm px-5 sm:px-8 md:px-12 py-8 sm:py-10 md:py-14">
                        <h2 className="text-[#0B1422] text-[26px] sm:text-[34px] md:text-[42px] font-bold leading-tight mb-5">
                            Build the Future With Us
                        </h2>

                        <div className="space-y-5 text-[#475569] text-[14px] sm:text-[16px] leading-[26px] sm:leading-[30px]">
                            <p>
                                Whether you are an expert in IT infrastructure, software
                                development, or public sector procurement, we offer a dynamic
                                environment where your skills can make a real impact.
                            </p>

                            <p>
                                We bridge the gap between cutting edge technology and government
                                needs, and we need forward thinking professionals to help us build
                                the future.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Work With Us */}
            <section className="w-full px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14 lg:pb-20">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-8 sm:mb-12">
                        <h2 className="text-[#0B1422] text-[28px] sm:text-[36px] md:text-[44px] font-bold leading-tight">
                            Why Work With Us?
                        </h2>

                        <p className="max-w-2xl mx-auto mt-4 text-[#475569] text-[14px] sm:text-[16px] leading-[26px] sm:leading-[30px]">
                            We believe that our team is our greatest asset. When you join
                            Vaxterm LLC, you can expect growth, support, and meaningful work.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                        {benefits.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-[18px] sm:rounded-[24px] p-5 sm:p-7 shadow-sm border border-[#E5EAF1]"
                            >
                                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0D7FFB] text-white flex items-center justify-center text-[16px] sm:text-[18px] font-bold mb-5">
                                    {index + 1}
                                </div>

                                <h3 className="text-[#0B1422] text-[19px] sm:text-[22px] font-bold mb-3">
                                    {item.title}
                                </h3>

                                <p className="text-[#475569] text-[14px] sm:text-[16px] leading-[26px] sm:leading-[30px]">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Current Openings */}
            <section className="w-full px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14 lg:pb-20">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 sm:mb-10">
                        <div>
                            <span className="text-[#0D7FFB] text-[14px] sm:text-[16px] font-semibold">
                                Open Positions
                            </span>

                            <h2 className="text-[#0B1422] text-[28px] sm:text-[36px] md:text-[44px] font-bold leading-tight mt-2">
                                Current Openings
                            </h2>
                        </div>

                        <p className="max-w-xl text-[#475569] text-[14px] sm:text-[16px] leading-[26px]">
                            Explore our current remote and hybrid career opportunities.
                        </p>
                    </div>

                    <div className="space-y-5">
                        {jobOpenings.map((job) => (
                            <div
                                key={job.id}
                                className="bg-white rounded-[18px] sm:rounded-[24px] p-5 sm:p-7 md:p-8 shadow-sm border border-[#E5EAF1]"
                            >
                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-3 mb-4">
                                            <span className="bg-[#0D7FFB] text-white rounded-full px-4 py-1.5 text-[12px] sm:text-[13px] font-semibold">
                                                {job.tag}
                                            </span>

                                            <span className="bg-[#F4F7FB] text-[#475569] rounded-full px-4 py-1.5 text-[12px] sm:text-[13px] font-semibold">
                                                {job.location}
                                            </span>
                                        </div>

                                        <h3 className="text-[#0B1422] text-[21px] sm:text-[26px] font-bold leading-tight mb-3">
                                            {job.id}. {job.title}
                                        </h3>

                                        <p className="text-[#475569] text-[14px] sm:text-[16px] leading-[26px] sm:leading-[30px]">
                                            {job.description}
                                        </p>
                                    </div>

                                    <a
                                        href={`mailto:hr@vaxterm.com?subject=Application for ${job.title}`}
                                        className="w-full lg:w-auto text-center bg-[#0D7FFB] hover:bg-blue-600 transition text-white rounded-[12px] px-6 py-3 text-[14px] sm:text-[15px] font-semibold"
                                    >
                                        Apply Now
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How to Apply */}
            <section className="w-full px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14 lg:pb-20">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-[#031126] rounded-[22px] sm:rounded-[30px] px-5 sm:px-8 md:px-12 py-8 sm:py-12 md:py-14">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                            <div>
                                <span className="text-[#60A5FA] text-[14px] sm:text-[16px] font-semibold">
                                    Application Process
                                </span>

                                <h2 className="text-white text-[28px] sm:text-[36px] md:text-[44px] font-bold leading-tight mt-3 mb-5">
                                    How to Apply
                                </h2>

                                <p className="text-[#CBD5E1] text-[14px] sm:text-[16px] leading-[26px] sm:leading-[30px]">
                                    Don&apos;t see a role that fits your exact profile, but still
                                    want to be part of Vaxterm LLC? We are always open to meeting
                                    great talent.
                                </p>
                            </div>

                            <div className="bg-white rounded-[18px] sm:rounded-[24px] p-5 sm:p-7">
                                <p className="text-[#475569] text-[14px] sm:text-[16px] leading-[26px] sm:leading-[30px] mb-5">
                                    To apply for an open position or to submit your resume for
                                    future opportunities, please send your updated CV/Resume and a
                                    Cover Letter to:
                                </p>

                                <div className="space-y-3 mb-5">
                                    <a
                                        href="mailto:hr@vaxterm.com"
                                        className="block text-[#0D7FFB] text-[15px] sm:text-[17px] font-semibold hover:underline break-all"
                                    >
                                        hr@vaxterm.com
                                    </a>

                                    <a
                                        href="mailto:careers@vaxterm.com"
                                        className="block text-[#0D7FFB] text-[15px] sm:text-[17px] font-semibold hover:underline break-all"
                                    >
                                        careers@vaxterm.com
                                    </a>
                                </div>

                                <p className="text-[#64748B] text-[13px] sm:text-[14px] leading-[24px] bg-[#F4F7FB] rounded-[14px] p-4">
                                    Please mention the job title you are applying for in the
                                    subject line of your email.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Equal Opportunity */}
            <section className="w-full px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-24">
                <div className="max-w-6xl mx-auto bg-white rounded-[20px] sm:rounded-[28px] shadow-sm px-5 sm:px-8 md:px-12 py-8 sm:py-10">
                    <h2 className="text-[#0B1422] text-[24px] sm:text-[32px] font-bold leading-tight mb-4">
                        Equal Opportunity Employer
                    </h2>

                    <p className="text-[#475569] text-[14px] sm:text-[16px] leading-[26px] sm:leading-[30px]">
                        Vaxterm LLC is proud to be an equal opportunity employer. We
                        celebrate diversity and are committed to creating an inclusive
                        environment for all employees, free from discrimination or harassment.
                    </p>
                </div>
            </section>
        </main>
    );
};

export default Career;
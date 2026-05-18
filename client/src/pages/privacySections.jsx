import React from "react";

const privacySections = [
    {
        id: 1,
        title: "Information We Collect",
        description:
            "We may collect personal and business information that you voluntarily provide to us when you express an interest in obtaining information about us or our services.",
        points: [
            {
                label: "Personal Information",
                text: "Name, email address, phone number, and physical address provided via contact forms or direct communications.",
            },
            {
                label: "Business & Technical Information",
                text: "Company details, EIN, technical specifications, and other sensitive data required to assist you with government bidding, SaaS development, or Linux server setups.",
            },
            {
                label: "Automatically Collected Information",
                text: "When you visit our website, we may automatically collect standard log data, such as your IP address, browser type, operating system, and website usage details via cookies.",
            },
        ],
    },
    {
        id: 2,
        title: "How We Use Your Information",
        description:
            "We use the information we collect for the following business purposes:",
        points: [
            {
                label: null,
                text: "To deliver and facilitate the delivery of our consulting, software, and hardware services.",
            },
            {
                label: null,
                text: "To assist with state and federal government registrations and bidding processes on your behalf.",
            },
            {
                label: null,
                text: "To respond to your inquiries and offer customer support.",
            },
            {
                label: null,
                text: "To send you administrative information, such as updates to our terms or project milestones.",
            },
            {
                label: null,
                text: "To improve our website functionality and user experience.",
            },
        ],
    },
    {
        id: 3,
        title: "Data Sharing and Disclosure",
        description:
            "We do not sell, trade, or rent your personal or business information to third parties. We may share your information only in the following situations:",
        points: [
            {
                label: "Service Providers",
                text: "We may share data with trusted third party vendors who assist us in operating our website, conducting our business, or providing cloud and server infrastructure.",
            },
            {
                label: "Government Portals",
                text: "With your explicit consent, we may submit your information to government portals such as SAM.gov and BidBuy as part of our procurement consulting services.",
            },
            {
                label: "Legal Requirements",
                text: "We may disclose your information if required to do so by law or in response to valid requests by public authorities, such as a court or government agency in the State of Illinois.",
            },
        ],
    },
    {
        id: 4,
        title: "Data Security",
        description:
            "We implement industry standard security measures to maintain the safety of your personal information. However, please be aware that no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure. While we strive to protect your data, we cannot guarantee its absolute security.",
        points: [],
    },
    {
        id: 5,
        title: "Use of Cookies",
        description:
            "Our website may use cookies to enhance the user experience. You can choose to set your web browser to refuse cookies or to alert you when cookies are being sent. If you do so, note that some parts of the site may not function properly.",
        points: [],
    },
    {
        id: 6,
        title: "Your Data Rights",
        description:
            "Depending on your location, you may have the right to request access to the personal data we hold about you, to request that your data be corrected or updated, or to request the deletion of your data. To exercise these rights, please contact us using the information provided below.",
        points: [],
    },
    {
        id: 7,
        title: "Changes to This Privacy Policy",
        description:
            "We reserve the right to make changes to this Privacy Policy at any time. We will notify you of any changes by updating the Effective Date at the top of this policy. We encourage you to periodically review this Privacy Policy to stay informed about how we are protecting your information.",
        points: [],
    },
];

const PrivacyPolicy = () => {
    return (
        <main className="w-full bg-[#F4F7FB]">
            {/* Hero Section */}
            <section className="w-full bg-[#031126] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 ">
                <div className="max-w-7xl mx-auto text-center mt-16">
                    <span className="inline-block bg-[#0D7FFB]/15 text-[#60A5FA] border border-[#1D4ED8]/40 rounded-full px-5 py-2 text-[13px] sm:text-[14px] font-medium mb-5">
                        Vaxterm LLC
                    </span>

                    <h1 className="text-white text-[32px] sm:text-[42px] md:text-[52px] lg:text-[64px] font-bold leading-tight">
                        Privacy Policy
                    </h1>

                    <p className="mt-4 text-[#CBD5E1] text-[14px] sm:text-[16px] md:text-[18px]">
                        Effective Date: January 01, 2026
                    </p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
                <div className="max-w-5xl mx-auto bg-white rounded-[20px] sm:rounded-[28px] shadow-sm px-5 sm:px-8 md:px-12 py-8 sm:py-10 md:py-14">
                    <h2 className="text-[#0B1422] text-[26px] sm:text-[34px] md:text-[42px] font-bold leading-tight mb-5">
                        Protecting Your Privacy
                    </h2>

                    <div className="space-y-5 text-[#475569] text-[14px] sm:text-[16px] leading-[26px] sm:leading-[30px]">
                        <p>
                            <span className="font-semibold text-[#0B1422]">
                                Vaxterm LLC
                            </span>{" "}
                            (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed
                            to protecting your privacy. This Privacy Policy explains how we
                            collect, use, disclose, and safeguard your information when you visit
                            our website{" "}
                            <a
                                href="https://vaxterm.com"
                                target="_blank"
                                rel="noreferrer"
                                className="text-[#0D7FFB] font-medium hover:underline"
                            >
                                https://vaxterm.com
                            </a>{" "}
                            and use our professional services, including IT infrastructure
                            management, software development, hardware sales, and government
                            procurement consulting.
                        </p>

                        <p>
                            Please read this Privacy Policy carefully. By accessing our website or
                            using our services, you consent to the data practices described in this
                            policy.
                        </p>
                    </div>
                </div>
            </section>

            {/* Privacy Sections */}
            <section className="w-full px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14 lg:pb-20">
                <div className="max-w-5xl mx-auto space-y-6">
                    {privacySections.map((section) => (
                        <div
                            key={section.id}
                            className="bg-white rounded-[18px] sm:rounded-[24px] shadow-sm border border-[#E5EAF1] px-5 sm:px-8 md:px-10 py-7 sm:py-8"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-5">
                                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0D7FFB] text-white flex items-center justify-center text-[16px] sm:text-[18px] font-bold shrink-0">
                                    {section.id}
                                </div>

                                <div className="flex-1">
                                    <h2 className="text-[#0B1422] text-[21px] sm:text-[26px] font-bold leading-tight mb-3">
                                        {section.title}
                                    </h2>

                                    <p className="text-[#475569] text-[14px] sm:text-[16px] leading-[26px] sm:leading-[30px]">
                                        {section.description}
                                    </p>

                                    {section.points.length > 0 && (
                                        <ul className="mt-5 space-y-3 pl-5 list-disc text-[#475569] text-[14px] sm:text-[16px] leading-[26px] sm:leading-[30px]">
                                            {section.points.map((point, index) => (
                                                <li key={index}>
                                                    {point.label && (
                                                        <span className="font-semibold text-[#0B1422]">
                                                            {point.label}:{" "}
                                                        </span>
                                                    )}
                                                    {point.text}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section className="w-full px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-24">
                <div className="max-w-5xl mx-auto bg-[#031126] rounded-[22px] sm:rounded-[30px] px-5 sm:px-8 md:px-12 py-8 sm:py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        <div>
                            <span className="text-[#60A5FA] text-[14px] sm:text-[16px] font-semibold">
                                Contact Us
                            </span>

                            <h2 className="text-white text-[28px] sm:text-[36px] md:text-[44px] font-bold leading-tight mt-3 mb-5">
                                Questions About This Policy?
                            </h2>

                            <p className="text-[#CBD5E1] text-[14px] sm:text-[16px] leading-[26px] sm:leading-[30px]">
                                If you have any questions or comments about this Privacy Policy or
                                our data practices, please contact us using the information
                                provided here.
                            </p>
                        </div>

                        <div className="bg-white rounded-[18px] sm:rounded-[24px] p-5 sm:p-7">
                            <ul className="space-y-4 text-[#475569] text-[14px] sm:text-[16px] leading-[26px]">
                                <li>
                                    <span className="font-semibold text-[#0B1422]">
                                        Company Name:
                                    </span>{" "}
                                    Vaxterm LLC
                                </li>

                                <li>
                                    <span className="font-semibold text-[#0B1422]">
                                        Email Address:
                                    </span>{" "}
                                    <a
                                        href="mailto:privacy@vaxterm.com"
                                        className="text-[#0D7FFB] font-medium hover:underline break-all"
                                    >
                                        privacy@vaxterm.com
                                    </a>
                                </li>

                                <li>
                                    <span className="font-semibold text-[#0B1422]">
                                        Website:
                                    </span>{" "}
                                    <a
                                        href="https://vaxterm.com"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-[#0D7FFB] font-medium hover:underline break-all"
                                    >
                                        https://vaxterm.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default PrivacyPolicy;
import React from "react";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
const GetFreeQuote = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_zbtjin1', 'template_2zryaj7', form.current, {
                publicKey: 'MyFThZeZPjFOM7HDA',
            })
            .then(
                () => {
                    console.log("SUCCESS!");
                    alert("Your quote request has been sent successfully!");
                    form.current.reset();
                },
                (error) => {
                    console.log("FAILED...", error.text);
                    alert("Something went wrong. Please try again.");
                }
            );
    };

    return (
        <main className="w-full bg-[#F4F7FB]">
            {/* Hero Section */}
            <section className="relative w-full min-h-[420px] md:min-h-[520px] flex items-center justify-center overflow-hidden">
                <img
                    src="/images/Contact/contactHero.png"
                    alt="Get Free Quote"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 text-center px-4 max-w-[900px] mx-auto">
                    <h1 className="text-white text-[38px] sm:text-[48px] md:text-[60px] font-bold leading-tight">
                        Get Free Quote
                    </h1>

                    <p className="text-white/90 text-[16px] sm:text-[18px] md:text-[20px] leading-[30px] mt-5 max-w-[700px] mx-auto">
                        Tell us about your technology, procurement, or enterprise
                        infrastructure requirements and our team will contact you shortly.
                    </p>
                </div>
            </section>

            {/* Quote Form Section */}
            <section className="px-4 py-16 md:py-24">
                <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-12 items-start">
                    {/* Left Info Box */}
                    <div className="bg-[#031126] rounded-[24px] p-6 sm:p-8 lg:p-10 text-white">
                        <p className="text-[#388EF6] text-[16px] font-semibold mb-3">
                            REQUEST A QUOTE
                        </p>

                        <h2 className="text-[30px] sm:text-[38px] lg:text-[44px] font-bold leading-tight mb-5">
                            Need a reliable technology partner?
                        </h2>

                        <p className="text-gray-300 text-[15px] sm:text-[17px] leading-[30px] mb-8">
                            Vaxterm helps organizations source enterprise hardware, implement
                            software solutions, and manage compliant technology procurement.
                        </p>

                        <div className="space-y-5">
                            {[
                                "Government and enterprise procurement",
                                "Hardware sourcing and deployment",
                                "Cloud-based software implementation",
                                "Reliable support and consultation",
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <span className="w-6 h-6 rounded-full bg-[#388EF6] flex items-center justify-center text-white text-sm mt-1">
                                        ✓
                                    </span>
                                    <p className="text-[15px] sm:text-[17px] text-gray-200">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white rounded-[24px] p-5 sm:p-8 lg:p-10 shadow-lg">
                        <h3 className="text-[#191D28] text-[28px] sm:text-[36px] font-bold mb-3">
                            Get Your Free Quote
                        </h3>

                        <p className="text-gray-500 text-[15px] sm:text-[17px] leading-[28px] mb-8">
                            Fill out the form below and we will get back to you with the best
                            solution for your business needs.
                        </p>

                        <form ref={form} onSubmit={sendEmail} className="space-y-5">
                            <div className="grid md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-[#191D28] text-[15px] font-medium mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="full_name"
                                        placeholder="Enter your name"
                                        required
                                        className="w-full h-[55px] px-4 rounded-xl border border-gray-300 outline-none focus:border-[#388EF6]"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[#191D28] text-[15px] font-medium mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        placeholder="Enter your email"
                                        required
                                        className="w-full h-[55px] px-4 rounded-xl border border-gray-300 outline-none focus:border-[#388EF6]"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-[#191D28] text-[15px] font-medium mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="text"
                                        name="phone_number"
                                        placeholder="Enter phone number"
                                        required
                                        className="w-full h-[55px] px-4 rounded-xl border border-gray-300 outline-none focus:border-[#388EF6]"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[#191D28] text-[15px] font-medium mb-2">
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        name="company_name"
                                        placeholder="Enter company name"
                                        className="w-full h-[55px] px-4 rounded-xl border border-gray-300 outline-none focus:border-[#388EF6]"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[#191D28] text-[15px] font-medium mb-2">
                                    Service Type
                                </label>
                                <select
                                    name="service_type"
                                    required
                                    className="w-full h-[55px] px-4 rounded-xl border border-gray-300 outline-none focus:border-[#388EF6] bg-white"
                                >
                                    <option value="">Select a service</option>
                                    <option value="Enterprise Hardware">Enterprise Hardware</option>
                                    <option value="Procurement">Procurement</option>
                                    <option value="Cloud Software">Cloud Software</option>
                                    <option value="IT Consultation">IT Consultation</option>
                                    <option value="Government Solutions">Government Solutions</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-[#191D28] text-[15px] font-medium mb-2">
                                    Project Details
                                </label>
                                <textarea
                                    name="project_details"
                                    placeholder="Tell us about your requirements..."
                                    rows="6"
                                    required
                                    className="w-full px-4 py-4 rounded-xl border border-gray-300 outline-none focus:border-[#388EF6] resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full sm:w-[190px] h-[56px] bg-[#388EF6] hover:bg-blue-600 text-white rounded-xl font-medium shadow-lg shadow-gray-300 transition-all"
                            >
                                Submit Quote
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default GetFreeQuote;
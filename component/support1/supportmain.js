"use client";

import "./support.css"
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

import { CiSearch } from "react-icons/ci";
function Supportmain() {
    const FQA =[{
        question:"How can I track my order?",
        answer: `You can track your order by logging into your account and visiting the "My Orders" section. You'll also receive a tracking number via email once your order ships.`,
    },
    {
        question:"What is your return policy?",
        answer: "We offer a 30-day return policy for all unused items in their original packaging. Simply contact our support team to initiate a return.",
    },
    {
        question:"How long does shipping take?",
        answer: "Standard shipping takes 3-7 business days, while express shipping takes 1-3 business days. Shipping times may vary during peak seasons.",
    },
    {
        question:"Do you offer international shipping?",
        answer: "Yes, we ship to most countries worldwide. International shipping costs and delivery times vary by destination.",
    },
    {
        question:"How do I cancel my order?",
        answer: "You can cancel your order within 2 hours of placing it by contacting our support team. After this window, orders may have already been processed.",
    }
]
  const supportCard = [
    {
      platform: "Whatsapp",
      icon: <FaWhatsapp />,
      desc: "Get instant support through WhatsApp. We're available 24/7 to help you with your orders and questions.",
      link: { label: "Send Message", url: "https://wa.me/2348131933895" },
    },
    {
      platform: "Email Support",
      icon: <MdEmail />,
      desc: "Send us a detailed message and we'll get back to you within 24 hours with a comprehensive solution.",
      link: { label: "Send Email", url: "mailto:salvationazuh@gmail.com" },
    },
    {
      platform: "Phone Support",
      icon: <IoCallOutline />,
      desc: "Speak directly with our support team. Available on Monday to Friday, 9 AM to 6 PM WST each day.",
      link: { label: "Call us", url: "tel:+2348131933895" },
    },
  ];

  const [search, setSearch] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
  };

  return (
    
      <div className="support-content">
        
        <div className="support-header">
          <h2>Support Center</h2>
          <p>
            We're here to help you with any questions or issues you might have.
            Search our knowledge base or get in touch with us directly.
          </p>
        </div>

        <div className="support-search">
          <div className="support-search-header">
            <h4>Search for Help</h4>
          </div>
          <div className="support-search-form">
            <input
              type="text"
              value={search}
              placeholder="What can we help you with today?"
              onChange={(e) => setSearch(e.target.value)}
            />
            <p><CiSearch /></p>
          </div>
        </div>

        <div className="support-media">
          {supportCard.map((newCard, index) => (
            <div className="supportCard" key={index}>
              <h3 id={`icon-${index}`}>{newCard.icon}</h3>
              <h5>{newCard.platform}</h5>
              <p>{newCard.desc}</p>
              <Link href={newCard.link.url}>
                <button className="link2" type="button">{newCard.link.label}</button>
              </Link>
            </div>
          ))}
        </div>

        <div className="support-faq">
          <h2>Frequently Asked Questions</h2>
          <ul>
            {FQA.map((asked, index) => (
                <li key={index} onClick={() => toggleFAQ(index)} >
                    <div className={`question ${activeIndex === index ? "active" : ""}`}>
                        <span>{asked.question}</span> {activeIndex === index ? <FaMinus/>: <FaPlus/>}
                    </div>
                    {activeIndex === index && <p className="answer">{asked.answer}</p>}
                </li>
            ))}
          </ul>
        </div>
      </div>
    
  );
}

export default Supportmain;

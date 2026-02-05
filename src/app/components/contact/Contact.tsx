
import Image from "next/image"
import { I18nDictionary } from "../../shared/type/Types"
import "./contact.scss"
import Link from "next/link"

interface ContactProps {
    dict: I18nDictionary
}

function Contact({dict}: ContactProps) {
    return (
        <div className="contact-container">
            <div className="contact-content">
                <p>{dict.contactParagraph1}</p>
                <p>{dict.contactParagraph2}</p>
                <p>{dict.contactParagraph3}</p>
                <p>{dict.contactParagraph4}</p>
            </div>
            <div className="contact-action">
                <p className="hand-emoji">👇</p>
                <p><Link href="mailto:marcoantunesdev@gmail.com">
                    <Image src={"/assets/icons/mail.svg"} alt="" className="mail-icon" /></Link></p>
            </div>
        </div>
    )
}

export default Contact
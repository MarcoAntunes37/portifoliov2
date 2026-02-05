import Image from "next/image"
import "./about.scss"
import interpolate from "../../i18n/interpolator/interpolate";
import { I18nDictionary } from "../../shared/type/Types";
import Link from "next/link";

function About({ dict }: { dict: I18nDictionary }) {
    return (
        <div className="about-container">
            <div className="about-header">
                <div className="header-avatar">
                    <picture >
                        <Image src={"/assets/image/profile.webp"}
                            alt="profile picture"
                            className="avatar"
                            width={100}
                            height={100}
                            loading="lazy"
                        />
                    </picture>
                </div>
                <div className="header-info">
                    <h1>{dict.aboutHeaderTitle}</h1>
                    <h3>{dict.aboutHeaderSubtitle}</h3>
                </div>
            </div>
            <div className="about-content">
                <div className="who-i-am">
                    <p>{dict.aboutWhoIAmParagraph1}</p>
                    <p>{dict.aboutWhoIAmParagraph2}</p>
                    <ul>
                        <li>{dict.aboutWhoIAmList1}</li>
                        <li>{dict.aboutWhoIAmList2}</li>
                        <li>{dict.aboutWhoIAmList3}</li>
                        <li>{dict.aboutWhoIAmList4}</li>
                        <li>{dict.aboutWhoIAmList5}</li>
                        <li>{dict.aboutWhoIAmList6}</li>
                    </ul>
                </div>
                <div className="contact">
                    <p>{interpolate(dict.aboutContactParagraph1, { emoji: "👇" })}</p>
                    <div className="actions-container">
                        <Link href="mailto:marcoantunesdev@gmail.com" className="secondary-button">
                            <picture>
                                <Image
                                    src={"/assets/icons/mail.svg"}
                                    alt="mail me icon"
                                    width={56}
                                    height={56}
                                    className="avatar"
                                    loading="lazy"
                                />
                            </picture>
                            <span className="btn-text">{dict.aboutContactAction1}</span>
                        </Link>
                    </div>
                </div>
                <div className="education">
                    <h3>{dict.aboutEducationTitle}</h3>
                    <p>{dict.aboutEducationParagraph1}</p>
                    <p>{dict.aboutEducationParagraph2}</p>
                </div>
                <div className="language">
                    <h3>{dict.aboutLanguagesTitle}</h3>
                    <p>{interpolate(dict.aboutLanguagesParagraph1,
                        { parentesis: dict.aboutLanguagesParagraph1Parentesis, emoji: "😊" })}
                    </p>
                </div>
                <div className="hobbies">
                    <h3>{dict.aboutHobbiesTitle}</h3>
                    <ul>
                        <li>{interpolate(dict.aboutHobbiesList1, { emoji: "📖" })}</li>
                        <li>{interpolate(dict.aboutHobbiesList2, { emoji: "🎵" })}</li>
                        <li>{interpolate(dict.aboutHobbiesList3, { emoji: "🎮" })}</li>
                        <li>{interpolate(dict.aboutHobbiesList4, { emoji: "👨‍💻" })}</li>
                        <li>{interpolate(dict.aboutHobbiesList5, { emoji: "🧠" })}</li>
                        <li>{interpolate(dict.aboutHobbiesList6, { emoji: "📚" })}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About
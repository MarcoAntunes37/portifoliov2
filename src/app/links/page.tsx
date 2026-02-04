import interpolate from '../i18n/interpolator/interpolate'
import { I18nDictionary } from '../shared/type/Types';
import './links.scss'
import Image from 'next/image'

interface LinksProps {
    params: Readonly<{ locale: string }>,
    dict: I18nDictionary
}

function Links({ dict, params }: LinksProps) {
    const handleRedirect = (url: string) => {
        window.open(url, '_blank')
    }

    const linkedinUrl = 'https://www.linkedin.com/in/marco-aurelio-antunes-0b11526a/'
    const githubUrl = 'https://github.com/MarcoAntunes37'
    const notionResumeUrl = {
        en_US: "https://kindhearted-chickadee-324.notion.site/Marco-Aur-lio-Antunes-2e66d369d60d800f8e1aee9c22f7f3b7",
        pt_BR: "https://kindhearted-chickadee-324.notion.site/Marco-Aur-lio-Antunes-2e66d369d60d80439c65d7ae9808b44d"
    }

    return (
        <div className="links-container">
            <div className="links-content">
                <div className="link-content-row">
                    <button type="button" onClick={() => handleRedirect(linkedinUrl)}>
                        <div className="box-shadow">
                            <picture className="btn-icon">
                                <Image
                                    src={"/assets/icons/linkedin.svg"}
                                    width={100}
                                    height={100}
                                    alt={dict.linksLinkedinIconAlt} />
                            </picture>
                        </div>
                        <span className="btn-text">{dict.linksLinkedin}</span>
                    </button>
                    <button type="button" onClick={() => handleRedirect(githubUrl)}>
                        <div className="box-shadow">
                            <picture className="btn-icon">
                                <Image
                                    src={"/assets/icons/github.svg"}
                                    width={100}
                                    height={100}
                                    alt={dict.linksGithubIconAlt} />
                            </picture>
                        </div>
                        <span className="btn-text">{dict.linksGithub}</span>
                    </button>
                </div>
                <div className="link-content-row f-width">
                    <button
                        type="button"
                        onClick={() => handleRedirect(notionResumeUrl[params.locale.replace('-', '_') as keyof typeof notionResumeUrl])}
                        className="btn-resume"
                        title={interpolate(dict.linksResume, { locale: params.locale })}>
                        <div className="box-shadow">
                            <picture className="btn-icon">
                                <Image src={"/assets/icons/notion.svg"}
                                    width={100}
                                    height={100}
                                    alt={interpolate(dict.linksNotionIconAlt, { locale: params.locale })} />
                            </picture>
                        </div>
                        <span className="btn-text">{interpolate(dict.linksResume, { locale: params.locale })}</span>
                    </button>
                </div>
            </div>
        </div >
    )
}

export default Links
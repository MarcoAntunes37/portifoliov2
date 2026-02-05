"use client"

import { useState } from 'react';
import './app.scss';
import Image from 'next/image';
import { I18nDictionary, type WindowType, type WindowVisualState } from '../shared/type/Types';
import { useMediaQuery } from '../hooks/viewport/useMediaQuery';
import AdaptiveWindow from '../components/adaptive-window/AdaptiveWindow';
import { OpenWindow } from '../shared/interface/Interfaces';

interface AppProps {
  dict: I18nDictionary;
  params: Readonly<{ locale: string }>
}

function App({ dict, params }: AppProps) {
  const [openWindows, setOpenWindows] = useState<OpenWindow[]>([]);
  const isMobile = useMediaQuery("(max-width: 769px)");

  const handleClick = (type: WindowType, title: string) => {
    setOpenWindows(prev => {
      const existing = prev.find(w => w.type === type);

      if (existing) {
        return prev.map(w =>
          w.type === type
            ? { ...w, windowState: "closing" }
            : w
        );
      }

      const id = crypto.randomUUID();

      return [
        ...prev,
        {
          id,
          type,
          title,
          position: { x: 0, y: 0 },
          zAxis: Math.max(0, ...prev.map(w => w.zAxis)) + 1,
          windowState: "opening",
          setWindowState: (state: WindowVisualState) =>
            setOpenWindows(prev =>
              prev.map(w =>
                w.id === id
                  ? { ...w, windowState: state }
                  : w
              )
            ),
        }
      ];
    });
  };

  return (
    <div className='main'>
      <div className="app-container">
        <div className="app-content">
          <div className="app-header">
            <h1 className="app-title">{dict.mainTitle}</h1>
            <h2 className="app-subtitle">
              {dict.mainSubtitle}&nbsp;
              <span>{dict.mainSubtitle2}</span>
            </h2>
          </div>
          <div className="app-actions">
            <div className="app-actions-container">
              <button
                type="button"
                className='primary-button'
                onClick={() => handleClick('about', dict.aboutTitle)}>
                <div className="box-shadow">
                  <picture className="btn-icon">
                    <Image
                      src={"/assets/icons/chat_info.svg"}
                      width={100}
                      height={100}
                      alt="about icon"
                      loading='lazy'
                    />
                  </picture>
                </div>
                <span className="btn-text">{dict.aboutTitle}</span>
              </button>

              <button
                type="button"
                className='primary-button'
                onClick={() => handleClick('links', dict.linksTitle)}>
                <div className="box-shadow">
                  <picture className="btn-icon">
                    <Image
                      src={"/assets/icons/link.svg"}
                      width={100}
                      height={100}
                      alt="links icon"
                      loading='lazy'
                    />
                  </picture>
                </div>
                <span className="btn-text">{dict.linksTitle}</span>
              </button>

              <button
                type="button"
                className='primary-button'
                onClick={() => handleClick('projects', dict.projectsTitle)}>
                <div className="box-shadow">
                  <picture className="btn-icon">
                    <Image
                      src={"/assets/icons/folder_info.svg"}
                      width={100}
                      height={100}
                      alt="projects icon"
                      loading='lazy'
                    />
                  </picture>
                </div>
                <span className="btn-text">{dict.projectsTitle}</span>
              </button>
              <button
                type="button"
                className='primary-button'
                onClick={() => handleClick('contact', dict.contactTitle)}>
                <div className="box-shadow">
                  <picture className="btn-icon">
                    <Image
                      src={"/assets/icons/mail.svg"}
                      width={100}
                      height={100}
                      alt="mail icon"
                      loading='lazy'
                    />
                  </picture>
                </div>
                <span className="btn-text">{dict.contactTitle}</span>
              </button>
            </div>
          </div>
        </div>
        <AdaptiveWindow
          isMobile={isMobile}
          openWindows={openWindows}
          setOpenWindows={setOpenWindows}
          i18nDictionary={dict}
          params={params}
        />
      </div>
    </div>
  )
}

export default App;

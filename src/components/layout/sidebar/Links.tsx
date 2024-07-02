import { motion } from "framer-motion";
import Link from "next/link";
import { linksList } from "@/data";
import { getJsonValue } from "../../../data/translationService";
import { useEffect, useState } from "react";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const linkVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

export const Links = () => {
  const handleDownloadfr = () => {
    const link = document.createElement('a');
    link.href = '/assets/cv de Mohamed Mouheb Ben Othman.pdf';
    link.download = 'cv de Mohamed Mouheb Ben Othman.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleDownloadar = () => {
    const link = document.createElement('a');
    link.href = '/assets/السيرة الذاتية لمحمد محب بن عثمان.pdf';
    link.download = 'السيرة الذاتية لمحمد محب بن عثمان.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleDownloaden = () => {
    const link = document.createElement('a');
    link.href = '/assets/mohamed mouheb ben othman Resume.pdf';
    link.download = 'mohamed mouheb ben othman Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  useEffect(() => {
    const getlanguage = async () => {
      try {
        if (localStorage.getItem('lang')) {
          setlang(localStorage.getItem('lang') || "");
        } else {
          setlang("fr")
        }
      } catch (error) {
        setlang("fr")
      }
    }
    getlanguage();
  }, [])
  const changeCurrentLanguage = (lg: string) => {
    localStorage.setItem('lang', lg)
    window.location.reload()
  }
  const [lang, setlang] = useState("")

  return (
    <motion.div
      variants={variants}
      className={
        "absolute w-full h-full flex flex-col items-center justify-center gap-5"
      }
    >
      {linksList.map(item => (
        <Link
          key={item.value}
          href={`#${item.value}`}
          className="text-xl md:text-4xl hover:scale-110 hover:transition-transform"
        >
          <motion.span
            variants={linkVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{
              scale: 0.95,
            }}
          >
            {getJsonValue(item.label) || ""}
          </motion.span>
        </Link>
      ))}

      <motion.div style={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
        <img onClick={() => { changeCurrentLanguage("ar") }} src="assets/323301.png" style={{ cursor: "pointer", width: 50, height: 50, opacity: lang == "ar" ? 1 : 0.5 }} />
        <img onClick={() => { changeCurrentLanguage("en") }} src="assets/4628635.png" style={{ cursor: "pointer", width: 50, height: 50, opacity: lang == "en" ? 1 : 0.5 }} />
        <img onClick={() => { changeCurrentLanguage("fr") }} src="assets/197560.png" style={{ cursor: "pointer", width: 50, height: 50, opacity: lang == "fr" ? 1 : 0.5 }} />
      </motion.div>
      <motion.div style={{ display: "flex", justifyContent: "space-around", width: "100%" ,color:"white" }}>
        <button onClick={()=>{handleDownloadar()}} style={{ borderRadius: 25, backgroundColor: "#429945", width: 70, height: 40, display: "flex", flexDirection: "column", alignItems: "center" }} >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-cloud-arrow-down-fill" viewBox="0 0 16 16">
            <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708" />
          </svg>  السيرة
        </button>
        <button onClick={()=>{handleDownloaden()}} style={{borderRadius: 25, backgroundColor: "#e73b36", width: 70, height: 40, display: "flex", flexDirection: "column", alignItems: "center" }} >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-cloud-arrow-down-fill" viewBox="0 0 16 16">
            <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708" />
          </svg>  Resume
        </button>
        <button onClick={()=>{handleDownloadfr()}} style={{ borderRadius: 25,backgroundColor: "#0052b4", width: 70, height: 40, display: "flex", flexDirection: "column", alignItems: "center" }} >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-cloud-arrow-down-fill" viewBox="0 0 16 16">
            <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708" />
          </svg>  cv
        </button>
      </motion.div>

    </motion.div>
  );
};

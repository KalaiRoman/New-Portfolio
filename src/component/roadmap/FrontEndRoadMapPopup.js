import { useEffect, useRef, useState } from "react";
import Roadmap from "./RoadMap";
import image from '../../assests/images/kalai_image_new.jpeg'
export default function FrontEndRoadMapPopup() {
    const [open, setOpen] = useState(false);
    const [closing, setClosing] = useState(false);
    const closeBtn = useRef(null);

    const close = () => {
        setClosing(true);
        setTimeout(() => { setOpen(false); setClosing(false); }, 220); // match CSS
    };

    useEffect(() => {
        if (!open) return;
        closeBtn.current?.focus();
        document.body.style.overflow = "hidden"; // lock page scroll
        const onKey = (e) => e.key === "Escape" && close();
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKey);
        };
    }, [open]);

    return (
        <>
            <style>{css}</style>

            <button className="um-trigger" onClick={() => setOpen(true)} aria-label="Open front-end roadmap">
                <img src={image} alt="no image"
                className="um-trigger"
                style={{objectFit:"cover"}}
                />
            </button>

            {open && (
                <div className={`um-backdrop ${closing ? "out" : ""}`} onClick={close}>
                    <div
                        className={`um-card ${closing ? "out" : ""}`}
                        role="dialog"
                        aria-modal="true"
                        aria-label="Life of a Front-End Developer roadmap"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button ref={closeBtn} className="um-close" onClick={close} aria-label="Close">
                            ✕
                        </button>

                        <Roadmap />
                    </div>
                </div>
            )}
        </>
    );
}

const css = `
.um-trigger{width:48px;height:48px;border-radius:50%;border:0;font-size:22px;cursor:pointer;
  background:radial-gradient(circle at 30% 25%,#a5b4fc,#4f46e5 70%);
  box-shadow:inset -3px -5px 8px rgba(0,0,0,.25),inset 3px 3px 6px rgba(255,255,255,.5),0 6px 12px rgba(79,70,229,.35);
  transition:transform .2s}
.um-trigger:hover{transform:translateY(-3px) scale(1.07)}
.um-trigger:active{transform:scale(.95)}
.um-trigger:focus-visible,.um-close:focus-visible{outline:3px solid #f5b301;outline-offset:2px}

.um-backdrop{position:fixed;inset:0;display:grid;place-items:center;z-index:1000;
  background:rgba(15,23,42,.55);backdrop-filter:blur(4px);animation:um-fade .22s ease forwards}
.um-backdrop.out{animation:um-fade-out .22s ease forwards}

/* 80% width x 80% height */
.um-card{position:relative;width:85vw;height:95vh;max-width:none;background:#fffdf8;border-radius:20px;
  padding:20px 24px;overflow:auto;box-shadow:0 24px 60px rgba(0,0,0,.3);
  animation:um-pop .35s cubic-bezier(.34,1.56,.64,1) forwards}
.um-card.out{animation:um-pop-out .22s ease forwards}

.um-close{position:absolute;top:12px;right:12px;width:34px;height:34px;border:0;border-radius:50%;z-index:2;
  background:#f0ece1;cursor:pointer;transition:transform .2s,background .2s}
.um-close:hover{background:#e5dfcf;transform:rotate(90deg)}

@keyframes um-fade{from{opacity:0}to{opacity:1}}
@keyframes um-fade-out{from{opacity:1}to{opacity:0}}
@keyframes um-pop{from{opacity:0;transform:translateY(30px) scale(.85)}to{opacity:1;transform:none}}
@keyframes um-pop-out{from{opacity:1;transform:none}to{opacity:0;transform:translateY(20px) scale(.92)}}

@media (max-width:600px){
  .um-card{width:94vw;height:88vh;padding:16px 10px}
}
@media (prefers-reduced-motion:reduce){
  .um-backdrop,.um-card,.um-card.out,.um-backdrop.out{animation-duration:.01s}
  .um-trigger,.um-close{transition:none}
}
`;
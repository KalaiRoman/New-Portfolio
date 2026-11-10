import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Roadmap from "./RoadMap";
import image from "../../assests/images/kalai_image_new.jpeg";

export default function FrontEndRoadMapPopup() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const closeBtn = useRef(null);
  const triggerRef = useRef(null);
  const [hideDuplicate, setHideDuplicate] = useState(false);

  /* If this component is placed on the page more than once (e.g. a desktop
     copy and a mobile copy), only the FIRST visible trigger is shown. */
  useLayoutEffect(() => {
    const check = () => {
      const visible = [...document.querySelectorAll("[data-roadmap-trigger]")]
        .filter((el) => el.getClientRects().length > 0);
      setHideDuplicate(visible.length > 0 && visible[0] !== triggerRef.current);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

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

      {/* ONE button, ONE image. The ring/glow is on the button only,
          the image just fills it (different class names!) */}
      <button
        ref={triggerRef}
        data-roadmap-trigger
        type="button"
        className="um-trigger"
        style={hideDuplicate ? { display: "none" } : undefined}
        onClick={() => setOpen(true)}
        aria-label="Open front-end roadmap"
      >
        <img src={image} alt="" className="um-trigger-img" />
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
/* ---------- trigger: ring + glow live on the BUTTON only ---------- */
.um-trigger{
  flex:none;
  width:clamp(40px,11vw,52px);
  height:clamp(40px,11vw,52px);
  padding:3px;
  border:0;
  border-radius:50%;
  cursor:pointer;
  background:linear-gradient(145deg,#fff,#a5b4fc 50%,#6366f1);
  box-shadow:inset -2px -3px 5px rgba(0,0,0,.25),inset 2px 2px 4px rgba(255,255,255,.7),0 6px 12px rgba(79,70,229,.35);
  transition:transform .2s;
  -webkit-tap-highlight-color:transparent;
  position:fixed;
  right:3%;
  bottom:10%;
}
/* the photo just fills the button: no ring, no shadow, no size of its own */
.um-trigger-img{
  display:block;
  width:100%;
  height:100%;
  border-radius:50%;
  object-fit:cover;
  object-position:center 25%;
  background:#fff;
}
.um-trigger:hover{transform:translateY(-3px) scale(1.07)}
.um-trigger:active{transform:scale(.95)}
.um-trigger:focus-visible,.um-close:focus-visible{outline:3px solid #f5b301;outline-offset:2px}

/* ---------- popup ---------- */
.um-backdrop{position:fixed;inset:0;display:grid;place-items:center;z-index:1000;
  background:rgba(15,23,42,.55);backdrop-filter:blur(4px);animation:um-fade .22s ease forwards}
.um-backdrop.out{animation:um-fade-out .22s ease forwards}

.um-card{position:relative;width:85vw;height:95vh;height:95dvh;max-width:none;background:#fffdf8;border-radius:20px;
  padding:20px 24px;overflow:hidden;box-shadow:0 24px 60px rgba(0,0,0,.3);
  animation:um-pop .35s cubic-bezier(.34,1.56,.64,1) forwards}
.um-card.out{animation:um-pop-out .22s ease forwards}

.um-close{position:absolute;top:12px;right:12px;width:36px;height:36px;border:0;border-radius:50%;z-index:2;
  background:#f0ece1;cursor:pointer;transition:transform .2s,background .2s}
.um-close:hover{background:#e5dfcf;transform:rotate(90deg)}

@keyframes um-fade{from{opacity:0}to{opacity:1}}
@keyframes um-fade-out{from{opacity:1}to{opacity:0}}
@keyframes um-pop{from{opacity:0;transform:translateY(30px) scale(.85)}to{opacity:1;transform:none}}
@keyframes um-pop-out{from{opacity:1;transform:none}to{opacity:0;transform:translateY(20px) scale(.92)}}

/* phones: almost full screen */
@media (max-width:600px){
  .um-card{width:100vw;height:100vh;height:100dvh;border-radius:0;padding:10px 4px}
  .um-close{top:8px;right:8px}
}
@media (prefers-reduced-motion:reduce){
  .um-backdrop,.um-card,.um-card.out,.um-backdrop.out{animation-duration:.01s}
  .um-trigger,.um-close{transition:none}
}
`;
import { useState } from "react";
import "./socials.css";
import { AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineEnvironment, AiOutlinePhone, AiOutlineStar, AiOutlineClockCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import SchedulePanel from "./schedule-panel.jsx";

const LINK_ITEMS = [
    { href: "https://www.instagram.com/dragonp/", label: "Instagram", Icon: AiOutlineInstagram, external: true },
    { href: "https://wa.me/5491155899110", label: "WhatsApp", Icon: AiOutlineWhatsApp, external: true },
    { href: "tel:+5491160430888", label: "Llamanos", Icon: AiOutlinePhone, external: false },
    { href: "https://www.google.com/maps/place/dragon+porte%C3%B1o/data=!4m2!3m1!1s0x95bcb5cd49818d83:0xe8ac130ef74cfb7?sa=X&ved=1t:242&ictx=111", label: "Ubicación", Icon: AiOutlineEnvironment, external: true },
    { href: "https://search.google.com/local/writereview?placeid=ChIJg42BSc21vJURt8907zDBig4", label: "Tu reseña", Icon: AiOutlineStar, external: true },
];

const Socials = () => {
    const [scheduleOpen, setScheduleOpen] = useState(false);
    const totalItems = LINK_ITEMS.length + 1;
    const isOdd = totalItems % 2 !== 0;

    return(
        <>
            <div className="socials">
                <IconContext.Provider value={{ className: "iconos", size: 30}}>
                    {LINK_ITEMS.map(({ href, label, Icon, external }, index) => {
                        const wide = isOdd && index === totalItems - 1;
                        return (
                            <a
                                key={label}
                                href={href}
                                className={wide ? "social-item wide" : "social-item"}
                                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                            >
                                <Icon/>
                                <span>{label}</span>
                            </a>
                        );
                    })}
                    <button
                        type="button"
                        className={isOdd ? "social-item wide" : "social-item"}
                        onClick={() => setScheduleOpen(true)}
                    >
                        <AiOutlineClockCircle/>
                        <span>Horario</span>
                    </button>
                </IconContext.Provider>
            </div>
            <SchedulePanel open={scheduleOpen} onClose={() => setScheduleOpen(false)}/>
        </>
    );
};

export default Socials;

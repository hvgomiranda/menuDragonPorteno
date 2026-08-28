import { useEffect } from "react";
import "./schedule-panel.css";
import { AiOutlineArrowLeft } from "react-icons/ai";

const HORARIOS = [
    { dia: "Lunes", horario: "19:00 a 23:00" },
    { dia: "Martes", horario: "Cerrado" },
    { dia: "Miércoles", horario: "12:00 a 16:00 y 19:00 a 23:00" },
    { dia: "Jueves", horario: "12:00 a 16:00 y 19:00 a 23:00" },
    { dia: "Viernes", horario: "12:00 a 16:00 y 19:30 a 23:30" },
    { dia: "Sábado", horario: "12:00 a 16:00 y 19:30 a 23:30" },
    { dia: "Domingo", horario: "12:00 a 16:00 y 19:00 a 23:00" },
];

const DIAS_SEMANA = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const getDiaDeHoy = () => DIAS_SEMANA[new Date().getDay()];

const SchedulePanel = ({ open, onClose }) => {
    useEffect(() => {
        if (!open) return;

        document.body.style.overflow = "hidden";
        const handleKeyDown = (event) => {
            if (event.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [open, onClose]);

    return (
        <div className={open ? "schedule-overlay open" : "schedule-overlay"} aria-hidden={!open}>
            <button className="schedule-close" onClick={onClose} aria-label="Volver">
                <AiOutlineArrowLeft size={30}/>
            </button>
            <h2 className="schedule-title">Horarios de atención</h2>
            <div className="schedule-list">
                {HORARIOS.map(({ dia, horario }) => (
                    <div
                        className={dia === getDiaDeHoy() ? "schedule-row today" : "schedule-row"}
                        key={dia}
                    >
                        <span className="schedule-dia">{dia}</span>
                        <span className="schedule-horario">{horario}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SchedulePanel;

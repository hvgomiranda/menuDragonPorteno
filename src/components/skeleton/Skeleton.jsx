import "./skeleton.css";

const SECTIONS = 4;
const CARDS_PER_SECTION = 3;

const Skeleton = () => {
    return (
        <>
            {Array.from({ length: SECTIONS }).map((_, sectionIndex) => (
                <div className="skeleton-section" key={sectionIndex}>
                    <div className="skeleton-title"/>
                    {Array.from({ length: CARDS_PER_SECTION }).map((_, cardIndex) => (
                        <div className="skeleton-card" key={cardIndex}/>
                    ))}
                </div>
            ))}
        </>
    );
};

export default Skeleton;

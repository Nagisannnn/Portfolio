import '../styles/Icone.css';

export default function Icone({id , src, alt, desc}) {
    const handleSelect = () => {
        const icone = document.getElementById(id);
        icone.classList.toggle('selected');
    }

    const handleDeSelect = () => {
        const icone = document.getElementById(id);
        icone.classList.remove('selected');
    }

    return (
        <div id={id} className="icone" onMouseEnter={handleSelect} onMouseLeave={handleDeSelect}>
            <img src={src} alt={alt} />
            <p>{desc}</p>
        </div>
    );
}
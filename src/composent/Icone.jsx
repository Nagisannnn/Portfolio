import '../styles/Icone.css';

export default function Icone({id , src, alt, desc}) {
    return (
        <div id={id} className="icone">
            <img src={src} alt={alt} />
            <p>{desc}</p>
        </div>
    );
}
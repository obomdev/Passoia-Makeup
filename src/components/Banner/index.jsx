import "./banner.scss";

function Banner({imagem, alt, children}){
    return (
        <section className="banner">
            <h2>{children}</h2>
            <img src={imagem} alt={alt} />
        </section>
    )
}
export default Banner
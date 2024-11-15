import background from "../assets/Background.png";
import Collapse from "../components/Collapse.jsx";
import Banner from "../components/Banner.jsx";

function About() {
  return (
    <div className="About-Page">
      <Banner img = { background } bannerClassName="aboutBanner"/>
      <Collapse headerClassName="collapseAbout" contentClassName="collapseAboutContent" title="Fiabilité">
        <p >Les annonces postées sur Kasa garantissent une fiabilité totale.
          Les photos sont conformes aux logements et toutes les informations sont
          régulièrement vérifiées par nos équipes.</p>
      </Collapse>
      <Collapse headerClassName="collapseAbout" contentClassName="collapseAboutContent" title="Respect">
        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement
          discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre
          plateforme.</p>
      </Collapse>
      <Collapse headerClassName="collapseAbout" contentClassName="collapseAboutContent" title="Service">
        <p>La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que
          chaque intéraction que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect
          et de bienveillance.
        </p>
      </Collapse>
      <Collapse headerClassName="collapseAbout" contentClassName="collapseAboutContent" title="Sécurité">
        <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour
          les voyageurs, chaque logement correspond aux critères de sécurité établies par
          nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet
          à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également
          des ateliers sur la sécurité domestique pour nos hôtes.
        </p>
      </Collapse>

    </div>
  );
}

export default About;

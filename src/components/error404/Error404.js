
import { Link } from "react-router-dom";
import './Error404.css';

/**
 * Auteur : JULME Marie Wilnie
 * Date : 02/06/2022
 * But : Ce coomposant permet d'afficher la page "404" de l'application
 */
export default function Error404() {

    return (
        <div id="page-wrapper">
            <div className="text-404">404</div>
            <div className="description-404">Oups! La page que vous demandez n'existe pas.</div>
            <div className="link-404"> <Link to="/" >Retourner sur la page d’accueil</Link></div>
        </div>
    );
}
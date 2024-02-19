import { useLocaleContext } from "../../services/LocaleContext";
import { useState } from "react";


const LanguageSwitcher = () => {
    const { locale, setLocale } = useLocaleContext();

    const getLanguageName = (lng: string) => {
        switch (lng) {
            case 'en':
                return "English";
            case 'no':
                return "Norsk";
            case 'et':
                return "Eesti";
            case 'de':
                return "Deutsch";
        }
    };

    const changeLanguage = (e: any, locale: string) => {
        e.preventDefault();
        setLocale(locale);
    };

    const [isActive, setIsActive] = useState(false);

    const toogleNav = () => {
        setIsActive(!isActive);
    };

    return (
        <li className="dropdown_menu"><a role="button">{ getLanguageName(locale) }</a>
            <ul className={isActive ? "d-block" : "d-none"}>
                <li><a role="button" onClick={ (e) => changeLanguage(e, 'en') }>{ getLanguageName('en') }</a></li>
                <li><a role="button" onClick={ (e) => changeLanguage(e, 'no') }>{ getLanguageName('no') }</a></li>
                <li><a role="button" onClick={ (e) => changeLanguage(e, 'et') }>{ getLanguageName('et') }</a></li>
                <li><a role="button" onClick={ (e) => changeLanguage(e, 'de') }>{ getLanguageName('de') }</a></li>
            </ul>
            <span
                className={ isActive ? "dropdown-plus dropdown-open" : "dropdown-plus" }
                onClick={ toogleNav }></span>
        </li>
    );
};

export default LanguageSwitcher;

// LocaleContext.tsx
import React, { createContext, useContext, useEffect, useState, Dispatch, SetStateAction } from 'react';

interface LocaleContextProps {
    locale: string;
    setLocale: Dispatch<SetStateAction<string>>;
}

const LocaleContext = createContext<LocaleContextProps>({
    locale: 'en',
    setLocale: () => {}, // This empty function is just a placeholder for initialization
});

export const useLocaleContext = () => useContext(LocaleContext);

interface LocaleProviderProps {
    children: React.ReactNode;
}

export const LocaleProvider: React.FC<LocaleProviderProps> = ({ children }) => {
    const [locale, setLocaleState] = useState<string>('en');

    useEffect(() => {
        const storedLocale = localStorage.getItem('locale');
        if (storedLocale) {
            setLocaleState(storedLocale);
        }
    }, []);

    const setLocale: Dispatch<SetStateAction<string>> = (newLocale: SetStateAction<string>) => {
        if (typeof newLocale === 'function') {
            setLocaleState((prevLocale: string) => {
                const updatedLocale = (newLocale as (prevState: string) => string)(prevLocale);
                localStorage.setItem('locale', updatedLocale);
                return updatedLocale;
            });
        } else {
            setLocaleState(newLocale);
            localStorage.setItem('locale', newLocale);
        }
    };

    return (
        <LocaleContext.Provider value={{ locale, setLocale }}>
            {children}
        </LocaleContext.Provider>
    );
};

const nastaveni = {
    skrytNovinky: false, // true = schová novinky na obou webech, false = budou videt

    // ČESKÁ VERZE
    cs: {
        nadpisSekce: "Aktuality",
        tlacitkoHistorie: "Zobrazit historii",
        tlacitkoZavrit: "Skrýt historii",
        aktualni: {
            nadpis: "PŘIHLÁŠKY SPUŠTĚNY!",
            text: "Registrace v systému ORIS je nyní otevřena. Těšíme se na vás ve Vizovicích!",
            odkaz: "https://oris.ceskyorientak.cz/", // nech prázdný "", pokud nechceš odkaz
            textOdkazu: "Odkaz na přihlášky",
            obrazek: "ZÁHLAVÍ.png" // nech prázdný "", pokud nechceš obrázek
        },
        historie: [
            { datum: "4. 3. 2026", zprava: "Dal jsem si k snídani dort. Byl moc dobrej." },
            { datum: "1. 3. 2026", zprava: "Spuštěn web závodu Vizovice 2026." }
        ],
        rozpisLink = 'rozpis.pdf',
        pokynyLink = ''
    },

    // ANGLICKÁ VERZE
    en: {
        nadpisSekce: "Latest News",
        tlacitkoHistorie: "Show History",
        tlacitkoZavrit: "Hide History",
        aktualni: {
            nadpis: "REGISTRATION OPEN!",
            text: "Registration via the ORIS system is now open. We look forward to seeing you in Vizovice!",
            odkaz: "https://oris.ceskyorientak.cz/",
            textOdkazu: "Registration link",
            obrazek: ""
        },
        historie: [
            { datum: "1. 3. 2026", zprava: "Vizovice 2026 website launched." }
        ]
    }
};

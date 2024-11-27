const data = {
    "Maatschappelijk thema": [
        "Achterblijvende productiviteit",
        "Vergrijzing",
        "Klimaatverandering",
        "Veiligheid"
    ],
    "Jaar 1": [
        [
            "Hoe kunnen bedrijven de productiviteit verhogen door het implementeren van standaardsoftwaretools?",
            "Wat zijn de beste methoden om eenvoudige inefficiënties in werkprocessen te identificeren en op te lossen?",
            "Hoe kunnen managers bewezen technieken toepassen om kleine teams efficiënter te laten samenwerken?"
        ],
        [
            "Wat zijn de meest effectieve methoden om kennisoverdracht van oudere naar jongere werknemers te faciliteren?",
            "Hoe kunnen bedrijven eenvoudige aanpassingen doen om oudere werknemers te ondersteunen op de werkvloer?",
            "Welke trainingsprogramma's kunnen bedrijven implementeren om oudere werknemers up-to-date te houden met technologie?"
        ],
        [
            "Hoe kunnen kleine bedrijven hun CO2-uitstoot meten en verminderen met bestaande tools?",
            "Welke eenvoudige stappen kunnen bedrijven nemen om hun logistiek te verduurzamen?",
            "Hoe kunnen bedrijven starten met duurzaam afvalbeheer op operationeel niveau?"
        ],
        [
            "Hoe kunnen bedrijven werknemers bewust maken van basisprincipes van cyberveiligheid?",
            "Welke maatregelen kunnen bedrijven nemen om de fysieke veiligheid op kantoor te verbeteren?",
            "Hoe kunnen bedrijven phishing-aanvallen voorkomen door middel van training?"
        ]
    ],
    "Jaar 2": [
        [
            "Hoe kunnen bedrijven geavanceerde digitale tools inzetten om inefficiënties in complexe processen te verminderen?",
            "Welke managementstrategieën zijn effectief voor het verhogen van productiviteit in multidisciplinaire teams?",
            "Hoe kan het gebruik van data-analyse bijdragen aan betere prestaties en resultaten?"
        ],
        [
            "Welke strategieën kunnen bedrijven gebruiken om de impact van vergrijzing op teamdynamiek te minimaliseren?",
            "Hoe kunnen HR-beleidsmaatregelen bijdragen aan het behoud en de motivatie van senior medewerkers?",
            "Hoe kunnen bedrijven effectieve mentorprogramma's opzetten tussen generaties?"
        ],
        [
            "Hoe kunnen bedrijven anticiperen op veranderingen in milieuwetgeving en zich hierop voorbereiden?",
            "Welke kosten-batenanalyses kunnen bedrijven gebruiken voor investeringen in hernieuwbare energie?",
            "Hoe kunnen bedrijven samenwerken met ketenpartners om gezamenlijke klimaatdoelen te bereiken?"
        ],
        [
            "Hoe kunnen bedrijven een effectief crisisplan ontwikkelen en implementeren voor cyberdreigingen?",
            "Welke impact hebben datalekken op klantenvertrouwen en hoe kunnen bedrijven hier adequaat op reageren?",
            "Hoe kunnen bedrijven technologie gebruiken om fysieke en digitale veiligheid te integreren?"
        ]
    ],
    "Jaar 3": [
        [
            "Hoe kunnen bedrijven kunstmatige intelligentie integreren om de productiviteit te verhogen, rekening houdend met organisatorische veranderingen?",
            "Welke uitdagingen ontstaan bij het grootschalig automatiseren van werkprocessen en hoe kunnen deze worden aangepakt?",
            "Hoe kunnen bedrijven een balans vinden tussen werknemerswelzijn en prestatie-eisen bij het meten van productiviteit?"
        ],
        [
            "Hoe kan samenwerking tussen generaties innovatie stimuleren binnen organisaties met een verouderende beroepsbevolking?",
            "Welke technologische oplossingen kunnen bedrijven implementeren om de uitdagingen van vergrijzing aan te pakken?",
            "Hoe kunnen bedrijven omgaan met de sociale en economische gevolgen van een vergrijzende samenleving?"
        ],
        [
            "Hoe kunnen bedrijven bijdragen aan internationale klimaatdoelen binnen hun bedrijfsstrategie?",
            "Welke innovatieve technologieën kunnen bedrijven inzetten om hun ecologische voetafdruk te verkleinen?",
            "Hoe kunnen bedrijven de balans vinden tussen winstgevendheid en duurzaamheid in een competitieve markt?"
        ],
        [
            "Welke strategieën zijn effectief bij het beheersen van grootschalige cyberaanvallen?",
            "Hoe kunnen bedrijven een cultuur van veiligheid creëren binnen een diverse werkomgeving?",
            "Hoe beïnvloeden opkomende cyberdreigingen de bedrijfscontinuïteit en welke oplossingen zijn nodig?"
        ]
    ],
    "Jaar 4": [
        [
            "Hoe kunnen bedrijven ethische dilemma's navigeren bij het optimaliseren van productiviteit in een diverse en mondiale context?",
            "Wat zijn de langetermijnrisico's van afhankelijkheid van AI voor productiviteitsverhoging en hoe kunnen bedrijven zich hierop voorbereiden?",
            "Hoe kunnen bedrijven adaptieve strategieën ontwikkelen om te reageren op veranderende mondiale economische omstandigheden die de productiviteit beïnvloeden?"
        ],
        [
            "Hoe kunnen bedrijven duurzaam beleid ontwikkelen dat de behoeften van zowel oudere als jongere werknemers verenigt in een veranderende samenleving?",
            "Welke langetermijnstrategieën zijn effectief om de effecten van vergrijzing op economische groei en sociale cohesie te beperken?",
            "Hoe kunnen bedrijven bijdragen aan maatschappelijke oplossingen voor de uitdagingen van een vergrijzende bevolking?"
        ],
        [
            "Hoe kunnen bedrijven omgaan met tegenstrijdige belangen en complexe stakeholders in wereldwijde duurzaamheidsnetwerken?",
            "Wat zijn de langetermijngevolgen van klimaatverandering voor bedrijfsstrategieën en hoe kunnen bedrijven hierop anticiperen?",
            "Hoe kunnen bedrijven adaptieve strategieën ontwikkelen om te reageren op onvoorspelbare klimaatrampen die hun operaties beïnvloeden?"
        ],
        [
            "Hoe kunnen bedrijven voldoen aan snel veranderende wereldwijde cyberregelgeving en de complexiteit ervan beheersen?",
            "Welke rol spelen publieke en private samenwerkingen in het verhogen van veiligheidsstandaarden wereldwijd?",
            "Hoe kunnen bedrijven omgaan met georganiseerde criminaliteit in cybersecurity binnen een internationale context?"
        ]
    ]
};



// Populate the table body
const tbody = document.getElementById("data-table-body");

data["Maatschappelijk thema"].forEach((theme, index) => {
    const row = document.createElement("tr");
    row.classList.add("bg-white", "hover:bg-gray-100");

    // Add the theme cell
    const themeCell = document.createElement("td");
    themeCell.classList.add("border", "border-gray-300", "px-4", "py-2", "font-semibold");
    themeCell.textContent = theme;
    row.appendChild(themeCell);

    // Add data for each year
    ["Jaar 1", "Jaar 2", "Jaar 3", "Jaar 4"].forEach(year => {
        const cell = document.createElement("td");
        cell.classList.add("border", "border-gray-300", "px-4", "py-2");

        // Convert array of questions into a list
        const questions = data[year][index];
        const list = document.createElement("ul");
        questions.forEach(question => {
            const listItem = document.createElement("li");
            listItem.classList.add("flex", "items-center", "space-x-2", "my-1.5");

            // Add magnifying glass icon
            const icon = document.createElement("i");
            icon.classList.add("fas", "fa-search", "text-gray-500");

            // Add question text
            const text = document.createElement("span");
            text.textContent = question;

            listItem.appendChild(icon);
            listItem.appendChild(text);
            list.appendChild(listItem);
        });

        cell.appendChild(list);
        row.appendChild(cell);
    });

    tbody.appendChild(row);
});


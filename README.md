# 🚀 Lexicon grupp projekt - Glennhallen
Ett fyra veckors slutprojekt som del i intensiv utbildningen [Lexicon Frontend development](https://github.com/Lexicon-Utbildning-Front-end-2025-2026).   
Uppgiften att fortsätta med en tidigare övning och nu skapa en kundvänlig webbshop. Uppdrag, krav och det agila arbetssättet finns beskrivet i [instruktionsdokumentet](https://github.com/Lexicon-Utbildning-Front-end-2025-2026/projekt-grupparbete)    
Uppgiften ska redovisas enligt följande instruktioner [redovisning](https://github.com/Lexicon-Utbildning-Front-end-2025-2026/redovisning-grupparbete/blob/main/README.md)

## 🌱 Uppstart
Gruppen valde ut lämpligt projekt att forka för att snabbt komma igång och leverera grundförutsättningarna.   
All utveckling sker i feature-branches och pushas tillsammans in i dev för gemensam hantering av eventuella konflikter och kod-återkoppling.   
Userstories och tasks skrivs in och följs upp i [GitHub Projects](https://github.com/users/pontusOlssonGit/projects/5)  
Fokus på leveransen med återkommande möten 2-3ggr i veckan.   

## 🛣️ Tänkt väg framåt
- [x] 🤝 Projektkickoff: Bestämma arbetssätt, scope och gemensam målbild
- [x] 👥 Roadmap: Prioriteringar, ambitionsnivå
- [x] ⚙️ Initiering: Skapa projekt, repo och kanban. Userstories och tasks förbereds
- [x] 🏃 Sprint 1: Uppfylla grundkraven för projektet såsom beskrivts ovan.
- [x] 🔁 Backlog refinements: Genomgång av backlog och justering av uppgifter
- [x] ⏫ Levelup: Välja ut passande delar för vidare utveckling av applikationen
  - Flytta över data till en databas istället för att arbeta med JSON filerna.
  - Fungerande kontaktformulär
  - Förberedelser för betalnings-, användare- och varukorgsfunktionalitet
- [x] 🏃 Sprint 2
- [x] 🔁 Backlog refinements 2: Genomgång av backlog och justering av uppgifter
  - Flytt av data ifrån JSON till Supabase
  - Koppla sök till produktgrid
  - Logga in / Skapa konto
  - Koppling till Vercel för automatisk publicering efter merge
- [x] 🏃 Sprint 3
  - Enklare paginering
  - Fungerande varukorg
  - Sektion för Hero/Banner 
- [x] 🏃 Sprint 4
  - Feature complete
  - Polering och optimering av levererade delar.
- [x] 📂 Presentationsplanering  
- [ ] 🏁 Retrospective & utvärdering
- [ ] 📊 Stakeholders: Demo och presentation

# 🛠️ Projektarbete
## 📋 Förutsättningar
Följande krävs för att köra projektet:

- Node.js (>=18)
- npm, pnpm eller yarn
- Git

Se till att rätt version av Node.js är installerad innan du fortsätter.

## 🚀 Installation
Installera projektets beroenden med valfri pakethanterare:

```bash
npm install
```
### Beroenden
Följande beroenden till externa komponenter installeras:
#### Runtime
- @stripe/react-stripe-js ver. ^6.2.0
- @stripe/stripe-js ver. ^9.2.0
- @supabase/ssr ver. ^0.9.0
- @supabase/supabase-js ver. ^2.99.0
- @vercel/analytics ver. ^2.0.1
- @vercel/speed-insights ver. ^2.0.0
- cookie ver. ^1.1.1
- dotenv ver. ^17.4.0
- lucide-react ver. ^0.575.0
- next ver. ^16.2.4
- nodemailer ver. ^8.0.4
- react ver. 19.2.3
- react-dom ver. 19.2.3
- stripe ver. ^22.0.1
- zustand ver. ^5.0.12
#### Development
- @biomejs/biome ver. 2.2.0
- @tailwindcss/postcss ver. ^4
- @types/node ver. ^20
- @types/nodemailer ver. ^7.0.11
- @types/react ver. ^19
- @types/react-dom ver. ^19
- babel-plugin-react-compiler ver. 1.0.0
- concurrently ver. ^9.2.1
- json-server ver. ^0.17.4
- tailwindcss ver. ^4
- typescript ver. ^5

## 🌱 Miljövariabler
Kopiera till en `.env.local`-fil och fyll i dina egna värden:   
```
SMTP_HOST=SMTP SERVER   
SMTP_PORT=SMT PORT   
SMTP_USER=USER_SMTP   
SMTP_PASS=PWD_SMTP   
   
NEXT_PUBLIC_SUPABASE_URL=SUPABASE_URL   
NEXT_PUBLIC_SUPABASE_KEY=SUPABASE_KEY   
   
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = STRIP_PUBLIC_KEY   
STRIPE_SECRET_KEY = STRIPE_SECRET_KEY`
```
## 💻 Köra lokalt
Använd kommandot `npm run dev` för att starta servern.
Peka sedan din webbläsare av val mot adressen http://localhost:3000 eller om du konfigurerat egen port.
## 📦 Bygga
Skapa en produktionsbuild:

```bash
npm run build
```


# 👥 Gruppmedlemmar G5
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/IlluminatorWatch">
        <img src="https://github.com/IlluminatorWatch.png" width="60" style="border-radius:50%;" /><br/>
        Adam
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/md1frejo">
        <img src="https://github.com/md1frejo.png" width="60" style="border-radius:50%;" /><br/>
        Jonas
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/pontusOlssonGit">
        <img src="https://github.com/pontusOlssonGit.png" width="60" style="border-radius:50%;" /><br/>
        Pontus
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Wali0023">
        <img src="https://github.com/Wali0023.png" width="60" style="border-radius:50%;" /><br/>
        Syed
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/fnelin">
        <img src="https://github.com/fnelin.png" width="60" style="border-radius:50%;" /><br/>
        Fredrik
      </a>
    </td>
  </tr>
</table>

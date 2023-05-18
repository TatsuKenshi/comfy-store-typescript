import i18next from "i18next";

const Disclaimer = () => {
  const language = i18next.language;

  if (language === "sr") {
    return (
      <section className="mt-8 mb-16">
        <div className="flex max-w-[1200px] mx-auto flex-wrap mt-4 px-8 pt-4">
          <p className="mb-4 w-full">
            U skladu sa Zakonom o zaštiti podataka o ličnosti („Sl. glasnik RS,
            br. 87/2018“ – u daljem tekstu: „Zakon“) advokatska kancelarija
            Akerman (u daljem tekstu: „Advokatska kancelarija“) vodi računa o
            zaštiti podataka o ličnosti i privatnosti posetilaca ove internet
            stranice.
          </p>
          <p className="mb-4 w-full">
            U cilju razumevanja svrhe i pravnog osnova obrade podataka o
            ličnosti, u narednom delu ćemo razvrstati lica na koje se podaci
            odnose po sledećim kategorijama:
          </p>
          <h4 className="text-xl text-sky-900 font-bold">
            1. Posetioci internet stranice
          </h4>
          <p className="mb-4 w-full">
            Podaci o ličnosti se ne otkrivaju prilikom korišćenja naše internet
            stranice. Podaci koje evidentiramo odnose se na podatke koje
            dostavlja snabdevač uslugom interneta korisnika internet stranice.
          </p>
          <h4 className="text-xl text-sky-900 font-bold">
            2. Klijenti, poslovni partneri i slične kategorije lica
          </h4>
          <p className="mb-4 w-full">
            Podaci o ličnosti nabrojanih i sličnih kategorija lica prikupljaju
            se uz izričito odobrenje lica koje se daje u vezi sa uslugama
            Advokatske kancelarije. Ovi podaci se koriste u tačno određene svrhe
            (poput obezbeđivanja tražene usluge klijentima; u cilju održavanja
            saradnje sa poslovnim partnerima ), a sve u skladu sa važećim
            propisima.
          </p>
          <p className="mb-4 w-full">
            Prikupljeni podaci o ličnosti se ne otkrivaju trećim neovlašćenim
            licima.
          </p>
          <p className="mb-4 w-full">
            U pogledu obrade podataka o ličnosti, naši klijenti, poslovni
            partneri i slične kategorije lica imaju prava zagatantovana Zakonom,
            a posebno:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              pravo na pristup podacima o ličnosti (traženje informacija o
              podacima o ličnosti koje su zabeležene i sačuvane u našim
              evidencijama, pravo na kopiju podataka o ličnosti);
            </li>
            <li>
              pravo na ispravku podataka o ličnosti (ispravljanje netačnih
              podataka o ličnosti bez odlaganja, dopuna nepotpunih podataka o
              ličnosti);
            </li>
            <li>
              pravo na ograničenje obrade (kada se osporava tačnost obrade
              podataka o ličnosti; ako lice zahteva ograničenje umesto brisanja;
              ako je obrada nezakonita);
            </li>
            <li>pravo na prenosivost podataka;</li>
            <li>pravo na prigovor;</li>
            <li>pravo na povlačenje pristanka;</li>
            <li>
              pravo na brisanje podataka o ličnosti (u slučaju da su podaci
              postali nepotrebni za ostvarivanje svrhe za koju su prikupljeni,
              usled povlačenja pristanka za obradu podataka, kao i u slučaju
              protivljenja obradi podataka u skladu sa Zakonom);
            </li>
            <li>
              pravo na podnošenje žalbe nadležnom organu – Povereniku za
              informacije od javnog značaja i zaštitu podataka o ličnosti
            </li>
          </ul>
          <p className="mb-4 w-full">
            U slučaju korišćenja svojih prava u vezi sa obradom podataka o
            ličnosti, molimo da nam se obratite putem imejl
            adrese office@akerman.rs. Molimo da nas putem navedene adrese
            kontaktirate i ukoliko imate bilo kakva pitanja/primedbe u vezi
            obrade podataka o Vašoj ličnosti.
          </p>
          <p className="mb-4 w-full">
            Sve buduće izmene ove politike privatnosti će biti objavljene na
            našoj internet stranici.
          </p>
          <h4 className="text-xl text-sky-900 font-bold">
            Odricanje od odgovornosti
          </h4>
          <p className="mb-4 w-full">
            Podaci koji se nalaze na ovoj Internet stranici su opšteg
            informativnog karaktera i ne mogu se koristiti kao izvor pravnih
            saveta ili bilo koje druge vrste saveta u bilo koju svrhu.
          </p>
        </div>
      </section>
    );
  } else {
    return (
      <section className="mt-8 mb-16">
        <div className="flex max-w-[1200px] mx-auto flex-wrap mt-4 px-8 pt-4">
          <p className="mb-4 w-full">
            According to the Law on Personal Data Protection (“Official Gazette
            of the RS, No. 87/2018” – hereinafter: “the Law”), Akerman Law
            Office (hereinafter: “Law office”) takes care to protect the
            personal and private information of this website visitors.
          </p>
          <p className="mb-4 w-full">
            To understand the purpose and legal basis of the processing of
            personal data, in the next part, we will classify the data subjects
            by the following categories:
          </p>
          <h4 className="text-xl text-sky-900 font-bold">
            1. Website visitors
          </h4>
          <p className="mb-4 w-full">
            Personal information is not disclosed when using our website. The
            information we record refers to information provided by the internet
            service provider of the website user.
          </p>
          <h4 className="text-xl text-sky-900 font-bold">
            2. Clients, business partners and similar categories of persons
          </h4>
          <p className="mb-4 w-full">
            The personal data of the listed and similar categories of persons
            are collected with the express consent of the person given in
            connection with the services of our Law Office. This information is
            used for specific purposes (such as providing the requested client
            service; to maintain cooperation with business partners), all per
            applicable regulations.
          </p>
          <p className="mb-4 w-full">
            The personally identifiable information collected is not disclosed
            to any third party.
          </p>
          <p className="mb-4 w-full">
            Concerning the processing of personal data, our clients, business
            partners and similar categories of persons have the rights
            guaranteed by the Law, in particular:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              the right of access to personal data (requesting information on
              personal data recorded and stored in our records, right to copy
              personal data);
            </li>
            <li>
              the right to correction of personal data (correcting incorrect
              personal data without delay, supplementing incomplete personal
              data);
            </li>
            <li>
              the right to restriction of processing (when the accuracy of the
              processing of personal data is challenged; if the person requests
              a restriction instead of deletion; if the processing is illegal);
            </li>
            <li>the right to data portability;</li>
            <li>the right to object;</li>
            <li>the right to withdraw consent;</li>
            <li>
              the right to delete personal data (in case the data became
              unnecessary for the purpose for which they were collected due to
              the withdrawal of consent for the processing of data, as well as
              in the case of opposition to the processing of data under the
              Law);
            </li>
            <li>
              the right to file a complaint with the competent authority – the
              Commissioner for Information of Public Importance and Personal
              Data Protection.
            </li>
          </ul>
          <p className="mb-4 w-full">
            If you exercise your rights regarding the processing of personal
            data, please contact us by e-mail at office@akerman.rs. Please also
            contact us through this e-mail address if you have any
            questions/concerns regarding the processing of your personal
            information.
          </p>
          <p className="mb-4 w-full">
            Any future changes to this privacy policy will be posted on our
            website.
          </p>
          <h4 className="text-xl text-sky-900 font-bold">Disclaimer</h4>
          <p className="mb-4 w-full">
            The information contained on this website is provided for general
            information purpose only and cannot be used as a source for legal
            advice or any other type of advice for any purpose.
          </p>
        </div>
      </section>
    );
  }
};

export default Disclaimer;

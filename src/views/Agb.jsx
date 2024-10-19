import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "../helpers";

export const Agb = () => {
    return (
        <section
            className="container mx-auto overflow-hidden px-2 py-36 sm:px-4"
            id="imprint"
        >
            <div className="grid grid-cols-2 gap-20">
                <motion.div
                    className="col-span-2 text-center lg:col-span-1 lg:text-start"
                    initial="initial"
                    whileInView="animate"
                    variants={fadeRight}
                    viewport={{
                        once: true,
                    }}
                >
                    <h1 className="mb-5 text-2xl font-bold uppercase">Allgemeine Geschäftsbedingungen</h1>

                </motion.div>

                <motion.div
                    className="col-span-2 sm:justify-self-center lg:col-span-1"
                    initial="initial"
                    whileInView="animate"
                    variants={fadeLeft}
                    viewport={{
                        once: true,
                    }}
                >
                    <div className="flex flex-col gap-10 sm:flex-row sm:gap-32">
                        <p>
                            WaveWolf Webdesign - Johannes Wolf

                            Waldstraße 20a

                            79194 Gundelfingen

                            Deutschland

                            nachfolgend: Anbieter

                            Allgemeiner Teil
                            Geltungsbereich und Gegenstand

                            Die vorliegenden Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge, die zwischen dem Anbieter und dem Kunden geschlossen werden.

                            Von diesen AGB abweichende Geschäftsbedingungen des Kunden gelten nicht, es sei denn, dass der Anbieter und der Kunde dies ausdrücklich vereinbart haben.

                            Der Anbieter schließt keine Verträge mit Verbrauchern bzw. Privatpersonen. Sein Angebot richtet sich ausschließlich an Unternehmer.

                            Das Leistungsangebot des Anbieters umfasst unter anderem die Erstellung bzw. Entwicklung von Webseiten. Die im Einzelnen vereinbarten Leistungen ergeben sich aus dem zwischen dem Anbieter und dem Kunden individuell abgeschlossenen Vertrag.

                            Der Anbieter ist berechtigt, in eigenem Namen und auf eigene Rechnung die erforderlichen Leistungen an Subunternehmer zu vergeben, die ihrerseits ebenfalls Subunternehmer einsetzen dürfen. Der Anbieter bleibt hierbei alleiniger Vertragspartner des Kunden. Der Anbieter wird Subunternehmer nicht einsetzen, sofern für ihn ersichtlich ist, dass der Einsatz berechtigten Interessen des Kunden zuwiderläuft.
                            Vertragsschluss

                            Möchte der Kunde Leistungen des Anbieters in Anspruch nehmen, stellt er beim Anbieter zunächst eine Anfrage mit einer möglichst genauen Beschreibung der von ihm gewünschten Leistungen. Diese Anfrage stellt eine Aufforderung zur Abgabe eines Angebots durch den Anbieter dar. Der Anbieter wird nach bestem Wissen und Gewissen prüfen, ob die in der Anfrage beschriebenen Wünsche des Kunden vollständig, eindeutig, realisierbar, frei von Widersprüchen und für die gewünschte Umsetzungsform geeignet sind und auf dieser Basis ein Angebot erstellen. Der Anbieter wird jedoch keine rechtliche Überprüfung der Kundenwünsche vornehmen. Erst, wenn der Kunde das Angebot des Anbieters annimmt, kommt ein Vertrag zwischen dem Anbieter und dem Kunden zustande.

                            Sofern das Angebot des Anbieters Entwürfe, Muster oder gestalterische Vorschläge enthält, jedoch kein Vertrag zustande kommt, hat der Kunde keinen Anspruch auf Herausgabe der Entwürfe, Muster, gestalterischen Vorschläge oder ggf. der dazugehörigen Quellcodes, Kopien etc. Der Kunde hat in diesem Fall sämtliche Kopien zu löschen, zu vernichten und/oder oder an den Anbieter herauszugeben.
                            Mitwirkungspflichten des Kunden

                            Der Kunde ist verpflichtet, dem Anbieter einen Ansprechpartner zu benennen, der den Auftrag begleitet und zur Abgabe von rechtsverbindlichen Willenserklärungen bevollmächtigt ist. Der Anbieter wird dem Kunden ebenfalls einen solchen Ansprechpartner benennen.

                            Der Kunde ist verpflichtet, die von ihm zum Zwecke der Auftragserfüllung zur Verfügung zu stellenden Informationen, Daten (z.B. für das Impressum), Werke (Texte, Bilder, Layouts, Grafiken etc.) und Zugänge vollständig, rechtzeitig und korrekt mitzuteilen.

                            Für die Beschaffung des Materials zur Ausgestaltung der Webseiten und sonstigen Werke (z.B. Grafiken, Texte) ist der Kunde selbst verantwortlich, es sei denn, dass der Anbieter und der Kunde ausdrücklich etwas anderes vereinbart haben. Stellt der Kunde das Material nicht oder nicht rechtzeitig zur Verfügung und macht er auch keine weitergehenden Vorgaben, ist der Anbieter berechtigt, nach eigener Wahl unter Beachtung der urheberrechtlichen Kennzeichnungsvorgaben Bildmaterial gängiger Anbieter (z.B. Stockfoto-Anbieter) zu verwenden oder die entsprechenden Teile der Webseite mit einem Platzhalter zu versehen.

                            Leistet der Kunde (notwendige) Mit- bzw. Zuarbeit verspätet, haftet der Anbieter nicht für dadurch entstehende Verzögerungen und Verspätungen bei der Umsetzung von Projekten.

                            Stellt der Kunde dem Anbieter im Rahmen des Auftrags Texte, Bilder oder sonstige Inhalte zur Verfügung, ist der Kunde dafür verantwortlich, dass diese Inhalte nicht gegen die Rechte Dritter (z.B. Urheberrechte) verstoßen. Dem Anbieter ist es von Rechts wegen nicht erlaubt, Rechtsberatungsdienstleistungen gegenüber dem Kunden zu erbringen. Der Anbieter ist insbesondere nicht verpflichtet und nicht berechtigt, das Geschäftsmodell des Kunden und/oder die vom Kunden selbst erstellten oder erworbenen Werke (Texte, Bilder, Layouts, Grafiken etc.) auf ihre Vereinbarkeit mit dem geltenden Recht zu prüfen und wird insbesondere keine Markenrecherchen oder sonstigen Schutzrechtskollisionsprüfungen in Bezug auf die vom Kunden zur Verfügung gestellten Werke vornehmen. Erteilt der Kunde bestimme Weisungen bzgl. des herzustellenden Werks, haftet er hierfür selbst.

                            Kommt der Kunde seinen Verpflichtungen aus dieser Ziffer nicht nach, kann der Anbieter gegenüber dem Kunden den hierdurch entstehenden Zeitaufwand (z.B. Kosten für Stockfotos und Zeitaufwand für deren Suche) in Rechnung stellen.
                            Abnahme

                            Der Anbieter ist berechtigt, die Abnahme von Werkleistungen in Schriftform zu verlangen. Der Kunde schuldet die schriftliche Abnahme nur, wenn der Anbieter ihn hierzu auffordert. Die Abnahmebestimmungen des Bürgerlichen Gesetzbuches bleiben im Übrigen unberührt.

                            Der Anbieter und der Kunde legen die Abnahmefrist im Sinne des § 640 Abs. 2 S. 1 BGB auf 2 Wochen ab Mitteilung über die Fertigstellung des Werks fest, sofern nicht im Einzelfall aufgrund besonderer Umstände eine längere Abnahmefrist erforderlich ist, die der Anbieter dem Kunden in diesem Fall gesondert mitteilen wird. Sofern sich der Kunde innerhalb der Abnahmefrist nicht äußert oder die Abnahme nicht wegen eines Mangels verweigert, gilt das Werk als abgenommen.
                            Vergütung

                            Der Anbieter und der Kunde schließen eine individualvertragliche Vereinbarung über die Vergütung des Auftrages, die sich grundsätzlich nach dem Angebot richtet.

                            Der Anbieter ist berechtigt, seine Preise regelmäßig in dem Umfang anzupassen, in dem seine eigenen Kosten für die Erbringung der Dienstleistung steigen. Kunden mit bestehenden Verträgen werden über die Preisanpassung spätestens einen Monat vor Inkrafttreten der Änderung per E-Mail benachrichtigt. Sofern der Kunde nicht innerhalb der in der Änderungsmitteilung gesetzten Frist widerspricht, gilt dies als Zustimmung. Die Benachrichtigung über die beabsichtigte Preisanpassung wird auf die Frist und die Folgen des Widerspruchs oder seines Ausbleibens hinweisen. Sofern der Kunde der Preisanpassung widerspricht, wird sein Vertrag zum Zeitpunkt des Inkrafttretens der Preisanpassung außerordentlich gekündigt.
                            Vertragslaufzeit bei Dauerschuldverhältnissen

                            Vorbehaltlich abweichender Bestimmungen inner- und außerhalb dieser AGB haben Dauerschuldverhältnisse (z.B. Wartungsverträge) eine Mindestlaufzeit von 12 Monaten. Die Kündigungsfrist beträgt 3 Monate. Wird der Vertrag nicht fristgerecht zum Laufzeitende gekündigt, verlängert er sich automatisch um weitere 12 Monate.

                            Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.
                            Mängelgewährleistung, Haftung und Freistellung

                            Ein unwesentlicher Mangel begründet keine Mängelansprüche. Die Wahl der Art der Nacherfüllung liegt beim Anbieter. Die Verjährungsfrist für Mängel und sonstige Ansprüche beträgt ein (1) Jahr; diese Verjährungsverkürzung gilt nicht für Ansprüche, die aus Vorsatz, grober Fahrlässigkeit oder aus der Verletzung von Leib, Leben oder Gesundheit durch den Anbieter resultieren. Die Verjährung beginnt nicht erneut, sofern im Rahmen der Mängelhaftung eine Ersatzlieferung erfolgt. Im Übrigen bleibt die gesetzliche Mängelgewährleistung unberührt.

                            Die Haftung des Anbieters für sämtliche Schäden wird wie folgt beschränkt: Bei einer leicht fahrlässigen Verletzung einer wesentlichen Vertragspflicht („Kardinalpflicht“) haftet der Anbieter jeweils der Höhe nach begrenzt auf den bei Vertragsschluss vorhersehbaren, vertragstypischen Schaden. Kardinalpflichten sind solche Pflichten, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung eine Partei regelmäßig vertrauen darf. Diese Haftungsbeschränkung gilt nicht bei grober Fahrlässigkeit oder bei vorsätzlichem Handeln sowie im Falle zwingender gesetzlicher Haftung, insbesondere bei Übernahme einer Garantie oder bei schuldhafter Verletzung des Lebens, des Körpers oder der Gesundheit. Die vorstehende Haftungsregelung gilt auch im Hinblick auf die Haftung des Anbieters für seine Erfüllungsgehilfen und gesetzlichen Vertreter.

                            Der Kunde stellt den Anbieter von jeglichen Ansprüchen Dritter frei, die gegen den Anbieter aufgrund von Verstößen des Kunden gegen diese AGB oder gegen geltendes Recht geltend gemacht werden.
                            Leistungen für Webseiten
                            Erstellung des Impressums und der Datenschutzerklärung mit Generatoren

                            Sofern der Anbieter und der Kunde dies vereinbart haben, erstellt der Anbieter die Datenschutzerklärung und das Impressum für die Webseite des Kunden. Hierzu verwendet der Anbieter Generatoren. Der Anbieter schuldet hierbei lediglich die Erstellung der Texte mit den Generatoren; für die rechtliche und inhaltliche Überprüfung ist der Kunde selbst verantwortlich.

                            Der Kunde ist verpflichtet, dem Anbieter sämtliche notwendigen Informationen für die Erstellung rechtzeitig, korrekt und vollständig mitzuteilen. Über besondere Informationspflichten im Rahmen des Impressums (z.B. Berufshaftpflichtversicherung, zulassungspflichtige Berufe etc.) und der Datenschutzerklärung hat der Kunde sich und den Anbieter selbstständig zu unterrichten. Es wird in diesem Zusammenhang noch einmal darauf hingewiesen, dass es dem Anbieter von Rechts wegen nicht erlaubt ist, Rechtsberatungsleistungen ggü. dem Kunden zu erbringen.

                            Änderungen, welche die Angaben im Impressum oder in der Datenschutzerklärung betreffen, hat der Kunde dem Anbieter selbstständig und unverzüglich mitzuteilen.

                            Eine Aktualisierung des Impressums oder der Datenschutzerklärung nach Fertigstellung und Abnahme der Webseite hat der Kunde beim Anbieter gesondert zu beauftragen, sofern individualvertraglich nicht etwas anderes vereinbart wurde.
                            Webhosting (Resell)

                            Der Anbieter und der Kunde können, insbesondere als Zusatzoption im Rahmen der Webseitenerstellung, die Erbringung von Hostingleistungen vereinbaren. Der spezifische Leistungsumfang (Speicherplatz, Zertifikate etc.) ist Gegenstand individualvertraglicher Vereinbarungen zwischen den Parteien. Der Anbieter ist berechtigt, Leistungen Dritter in jeglicher Form im Zusammenhang mit der Ausführung von Hostingleistungen in Anspruch zu nehmen.

                            Sofern der Anbieter und der Kunde nichts anderes vereinbart haben, übernimmt der Anbieter im Falle einer Beauftragung als Hoster die Administration und Verwaltung der Daten. Der Kunde erhält grundsätzlich keinen Zugang zum Administrationsbackend des Hostingsystems.

                            Die Verfügbarkeit der vom Anbieter zum Zwecke des Hostings verwendeten Server liegt bei mindestens 99% im Jahresmittel. Hiervon ausgenommen sind diejenigen Zeiten, innerhalb derer die Server aufgrund durch vom Anbieter nicht beeinflussbarer Ereignisse nicht erreichbar sind (Höhere Gewalt, Handlungen Dritter, technische Probleme etc.).

                            Sofern der Anbieter und der Kunde nichts anderes vereinbart haben, besteht kein Anspruch des Kunden auf die Zuweisung einer festen IP-Adresse für seine Internetpräsenz. Technisch oder rechtlich bedingte Änderungen sind jederzeit möglich und bleiben vorbehalten.

                            Der Kunde ist verpflichtet, seine Passwörter und sonstigen Zugangsdaten – sofern ihm solche vom Anbieter zur Verfügung gestellt wurden – nicht an Dritte weiterzugeben und regelmäßig zu ändern. Für eventuellen Missbrauch durch Dritte ist der Kunde selbst verantwortlich, soweit er diesen zu vertreten hat.

                            Der Kunde ist verpflichtet, regelmäßige Sicherungskopien seiner gehosteten Daten zu erstellen. Ist der Kunde hierzu nicht in der Lage, hat er den Anbieter oder andere hierzu fachlich geeignete Dritte mit der Sicherung zu beauftragen. Für eventuelle Datenverluste, die aufgrund mangelnder Datensicherung entstehen, haftet der Kunde selbst.
                            Domainregistrierung

                            Der Anbieter und der Kunde können, insbesondere als Zusatzoption im Rahmen der Webseitenerstellung, die Erbringung von Domainregistrierungsleistungen vereinbaren. Der spezifische Leistungsumfang ist Gegenstand individualvertraglicher Vereinbarungen zwischen den Parteien.

                            Das zur Registrierung der jeweiligen Domain erforderliche Vertragsverhältnis kommt direkt zwischen dem Kunden und der jeweiligen Domainvergabestelle bzw. dem jeweiligen Registrar zustande. Der Anbieter wird im Verhältnis zwischen Kunde und Vergabestelle lediglich als Vermittler tätig, ohne eigenen Einfluss auf die Vergabe der Domain zu haben.

                            Der Kunde trägt die alleinige Verantwortung dafür, dass die von ihm gewünschte Domain keine Rechte Dritter verletzt. Eine Überprüfung der Domain durch den Anbieter ist nicht geschuldet.

                            Für die Registrierung von Domains gelten ergänzend die jeweiligen Bedingungen der einzelnen Vergabestellen. Der Anbieter wird den Kunden im Falle einer beabsichtigten Registrierung auf eventuelle Besonderheiten hinweisen.
                            Wartung und Pflege von Webseiten

                            Nach der Fertigstellung einer Webseite und / oder einzelner Teile hiervon kann der Anbieter dem Kunden Wartungs- und Pflegeleistungen in Bezug auf die Webseite anbieten. Der Anbieter kann auch die Wartung von Drittwebseiten anbieten. Jedoch ist weder der Anbieter zu einem solchen Angebot verpflichtet, noch muss der Kunde die weitergehenden Leistungsangebote des Anbieters in Anspruch nehmen. Entsprechende Vereinbarungen sind ausschließlich Gegenstand von Individualvereinbarungen.

                            Gegenstand der Wartungsverträge ist die Beseitigung von Funktionsstörungen sowie die anlassbezogene Aktualisierung der Webseite für gängige Webbrowser in ihrer jeweils aktuellen Version durch den Anbieter. Weitere Details, wie z.B. regelmäßige Wartungen, können ggf. individualvertraglich vereinbart werden.

                            Voraussetzung für die Wartung ist, dass die zu wartenden Inhalte mit den Systemen des Anbieters kompatibel sind. Die Kompatibilität kann insbesondere durch veraltete Komponenten der zu wartenden Inhalte oder durch eigenmächtige Änderungen von Seiten des Kunden beeinträchtigt werden. Sollte die Kompatibilität nicht gewährleistet sein, muss der Kunde diese selbstständig herstellen (z.B. durch entsprechende Updates) oder den Anbieter gesondert mit der Herstellung der Kompatibilität beauftragen.

                            Der Anbieter haftet nicht für Funktionsstörungen und Inkompatibilitäten, die durch eigenmächtige Änderungen des Kunden verursacht wurden oder auf sonstigen Fehlern beruhen, die nicht im Verantwortungsbereich des Anbieters liegen; die Vorschriften unter „Haftung und Freistellung“ bleiben hiervon unberührt.

                            Die Wartung umfasst nur die technische, nicht jedoch die inhaltliche Aktualisierung der Webseite, insbesondere nicht die Aktualisierung des Impressums oder der Datenschutzerklärung, es sei denn, dass der Anbieter und der Kunde dies ausdrücklich vereinbart haben.
                            Marketing und Content
                            SEO-Marketing

                            Vereinbaren der Anbieter und der Kunde Dienstleistungen im Bereich des SEO-Marketings, schuldet der Anbieter im Rahmen der Leistungserbringung ausschließlich die Durchführung von Maßnahmen, die nach eigener Erfahrung des Anbieters das Suchmaschinen-Ranking positiv beeinflussen können oder die vom Auftraggeber ausdrücklich verlangt werden. Hierbei handelt es sich um eine Dienstleistung im Sinne von §§ 611 ff. BGB. Ein bestimmtes Ergebnis (z.B. ein bestimmtes Ranking in der Google Trefferliste) wird im Rahmen der SEO-Dienstleistungen nicht geschuldet, es sei denn, dass der Anbieter und der Kunde dies ausdrücklich vereinbart haben.
                            Schlussbestimmungen
                            Rechteeinräumung/Eigenwerbung

                            Nach vollständiger Bezahlung des Auftrags durch den Kunden räumt der Anbieter dem Kunden den entsprechenden Arbeitsergebnissen im Zeitpunkt ihrer Entstehung grundsätzlich ein einfaches Nutzungsrecht ein. Weitergehende Rechte können individualvertraglich vereinbart werden.

                            Sofern nichts Abweichendes vereinbart wurde, erteilt der Kunde dem Anbieter ausdrücklich die Erlaubnis, das Projekt zum Zwecke der Eigenwerbung (Referenzen/Portfolio) in angemessener Weise öffentlich darzustellen. Insbesondere ist der Anbieter dazu berechtigt, mit der Geschäftsbeziehung zu dem Kunden zu werben und auf allen erstellten Werbemitteln und bei allen Werbemaßnahmen auf sich als Urheber hinzuweisen, ohne dass dem Kunden dafür ein Entgeltanspruch zusteht.

                            Ferner ist der Anbieter berechtigt, den eigenen Namen mit Verlinkung in angemessener Weise im Footer und im Impressum der vom Anbieter erstellten Webseite(n) zu platzieren, ohne dass dem Kunden hierfür ein Entgeltanspruch zusteht.
                            Vertraulichkeit

                            Der Anbieter wird alle ihm zur Kenntnis gelangenden Geschäftsvorgänge, insbesondere Druckunterlagen, Layouts, Storyboards, Zahlenmaterial, Zeichnungen, Tonbänder, Bilder, Videos, DVD, CD-ROMs, interaktive Produkte und solche anderen Unterlagen, welche Filme und/oder Hörspiele und/oder sonstige urheberrechtlich geschützte Materialien des Kunden oder mit ihm verbundenen Unternehmen enthalten, streng vertraulich behandeln.

                            Der Anbieter verpflichtet sich, die Geheimhaltungspflicht sämtlichen Angestellten und/oder Dritten (bspw. Lieferanten, Grafikern, Programmierern, Filmproduzenten, Tonstudios etc.), welche Zugang zu den vorbezeichneten Geschäftsvorgängen haben, aufzuerlegen.

                            Die Geheimhaltungspflicht gilt zeitlich unbegrenzt über die Dauer dieses Vertrages hinaus.
                            Sonstiges

                            Die zwischen dem Anbieter und den Kunden geschlossenen Verträge unterliegen dem materiellen Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.

                            Sofern der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist oder keinen allgemeinen Gerichtsstand in Deutschland hat, vereinbaren die Parteien den Sitz des Anbieters als Gerichtsstand für sämtliche Streitigkeiten aus diesem Vertragsverhältnis; ausschließliche Gerichtsstände bleiben hiervon unberührt.

                            Der Anbieter ist berechtigt, diese AGB aus sachlich gerechtfertigten Gründen (z.B. Änderungen in der Rechtsprechung, Gesetzeslage, Marktgegebenheiten oder der Geschäfts- oder Unternehmensstrategie) und unter Einhaltung einer angemessenen Frist zu ändern. Kunden mit bestehenden Verträgen werden hierüber spätestens zwei Wochen vor Inkrafttreten der Änderung per E-Mail benachrichtigt. Sofern der Kunde nicht innerhalb der in der Änderungsmitteilung gesetzten Frist widerspricht, gilt dies als Zustimmung. Die Benachrichtigung über die beabsichtigte Änderung dieser AGB wird auf die Frist und die Folgen des Widerspruchs oder seines Ausbleibens hinweisen. Sofern der Kunde der Änderung widerspricht, ist der Anbieter berechtigt, den Vertrag zum Zeitpunkt des Inkrafttretens der Änderung außerordentlich zu kündigen.

                            Stand: 

                            <strong>Haftungsausschluss:</strong>
                            <br />
                            <br />
                            <strong>Haftung für Inhalte</strong>
                            <br />
                            <br />
                            1. Inhalt <br />
                            Johannes Wolf übernimmt keine Haftung für die Aktualität, die inhaltliche Richtigkeit, Vollständigkeit oder Qualität der bereitgestellten Informationen und Materialien, es sei denn, die Fehler wurden vorsätzlich oder grob fahrlässig aufgenommen. Dies bezieht sich auf jegliche materielle und immaterielle Schäden, die durch die Nutzung der von Johannes Wolf auf seiner Webseite bereitgestellten Informationen und Materialien verursacht wurden. Alle Angebote sind freibleibend und unverbindlich.
                            <br></br>
                            <br />
                            2. Verweise und Links <br />
                            Johannes Wolf hat keinen Einfluss auf die Gestaltung und die Inhalte fremder Materialien, auf die von seiner Webseite aus direkt oder indirekt verwiesen wird. Daher distanziert sich Johannes Wolf ausdrücklich von solchen Webseiten und lehnt hierfür eine Haftung ab. Sofern Johannes Wolf Kenntnis von rechtswidrigen Inhalten fremder Webseiten hat und es ihm technisch möglich und zumutbar ist, werden diese Linkverweise entfernt.
                            <br></br>
                            <br />
                            3. Copyright <br />
                            Das Layout der Webseite, der benutzen Fotos, Bilder und Logos sowie Texte sind urheberrechtlich geschützt. Eine Vervielfältigung und / oder Nutzung ist ohne vorherige Zustimmung von Johannes Wolf nicht gestattet.
                            <br></br>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

import React from 'react';
import './Jornalist.css';
import Footer from '../../components/footer/footer';
import {
  Row,
  Col,
} from 'react-bootstrap';
import Animate from 'react-smooth';
import {Helmet} from 'react-helmet';
import JornalistItemList            from '../../components/Jornalist/JornalistItemList'

import article1 from "../../assets/img/article1.png"
import article2 from "../../assets/img/article2.jpeg"
import article3 from "../../assets/img/article3.jpeg"
import article4 from "../../assets/img/article4.jpeg"







const Articles = [
    {
        id: 'a1',
        title: 'Wie zehn Syrer das Kollektiv Schu Fi Ma Fi gründeten\n' +
            ':\n' +
            'Die Erinnerung an Syrien lebendig halten',
        date:'31. Dezember 2021',
        ort:'Düsseldorf',
        description: 'Düsseldorf 2018 gründeten Basel Al Ali und Wisam Hero das „Kollektiv Schu Fi Ma Fi“. Die Gruppe will das Kulturleben in Düsseldorf mitgestalten und dabei die Kultur ihres syrischen Herkunftslandes präsentieren.',
        imageUrl: article1 ,
        imageAlt: 'article1',
        articleUrl: 'https://rp-online.de/nrw/staedte/duesseldorf/duesseldorf-die-erinnerung-an-syrien-lebendig-halten_aid-64932579',
    },
    {
        id: 'a2',
        title: 'Welche Folgen die Corona-Pandemie für Geflüchtete und die Integration hat, wird in der Politik kaum thematisiert.',
        date:'25 Januar 2022',
        ort:'Düsseldorf',
        description: 'Welche Folgen die Corona-Pandemie für Geflüchtete und die Integration hat, wird in der Politik kaum thematisiert. Dabei lässt sich deutlich erkennen, dass die Coronakrise auch in dieser Hinsicht Spuren hinterlässt.',
        imageUrl: article2 ,
        imageAlt: 'article2',
        articleUrl: 'https://www.kohero-magazin.de/wie-die-pandemie-die-integration-droht/',
    },
    {
        id: 'a3',
        title: 'ANGEKOMMEN IN DÜSSELDORF: EIN BLICK AUF OBERBILK',
        date:'12 Dezember 2021',
        ort:'Düsseldorf',
        description: 'Sie kamen aus Syrien und sind mittlerweile seit mehr als fünf Jahren in Deutschland: Basel Al Ali, Samer Al Najjar, Rayan Alhamid und Merhi Alseirawan. Am Samstag (11.12.) zeigten sie einer Gruppe Interessierter, zu der auch Oberbürgermeister Dr. Stephan Keller gehörte, wie sie es geschafft haben, Fuß zu fassen und verrieten, was sie aus ihrem Blickwinkel in Düsseldorf mit Syrien verbindet.\n' +
            '\n',
        imageUrl: article3 ,
        imageAlt: 'article3',
        articleUrl: 'https://www.ddorf-aktuell.de/2021/12/12/angekommen-in-duesseldorf-ein-blick-auf-oberbilk/',
    },
    {
        id: 'a4',
        title: 'House Musik, Kulturfeste und politische Debatten – wie der Student und DJ Wisam Hero gegen Stereotype von Deutschen und Syrer*innen kämpft.',
        date:'30 November 2020',
        ort:'Düsseldorf',
        description: 'Wisam Hero hasst arabische Volksmusik. Er ist Syrer, Araber und DJ – aber als ein linkes Kulturzentrum in Düsseldorf ihn für eine Geflüchteten-Party engagieren will, kann er ihnen nicht helfen. „Der Organisator wollte traditionelle arabische Musik – Debke und so was – aber ich lege keine Volksmusik auf, sondern House und Techno“, erzählt der junge Mann mit dem sorgfältig frisierten Vollbart per Videoschalte.',
        imageUrl: article4 ,
        imageAlt: 'article4',
        articleUrl: 'https://www.aufruhr-magazin.de/teilhabe-und-zusammenhalt/mr-anti-klischee/',
    },
];


function Jornalist() {
    const loadedPlaces = Articles;
    return (
      <div>
         <Helmet>
           <meta charSet="utf-8" />
           <title>SCHU FI MA FI</title>
           <link rel="canonical" href="#" />
           <meta name="description" content="SCHU FI MA FI" />
         </Helmet>
          <Animate to="1" from="0" attributeName="opacity">
          <div className="jornalist-header">
            <Row className="jornalist-main">
              <Col  md={12}  className="jornalist-main-List">
                  <JornalistItemList items={loadedPlaces} />
              </Col>
            </Row>
            <Row className="jornalist-footer">
              <Footer />
            </Row>
        </div>
        </Animate>
      </div>
    );
}

export default Jornalist;

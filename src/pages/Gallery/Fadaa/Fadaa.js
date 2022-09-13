import WSPGallery from '../../../components/Gallery/WSPGallery';
import '../GalleryPage.css';

import fadaa1 from '../../../assets/gallery/Fadaa/Fadaa1.jpg'
import fadaa2 from '../../../assets/gallery/Fadaa/Fadaa2.jpg'







function FadaaPage() {

    const fadaaImages = [

        {
            img: fadaa2,
            title: 'Fadaa',
            description: "Fadaa' (Weltraum) ist ein Partykonzept, das die modernen & alternativen Nachwuchstalente beleuchtet. Die Party soll eine Alternative zur Clubszene in Düsseldorf anbieten, in der Menschen oft wegen deren Hautfarbe diskriminiert werden. Hier dürfen alle Menschen, die öfter in Clubs diskriminiert werden, reinkommen.\n" +
                "\n" +
                "Fadaa' bietet einen vertrauten Raum für alle zum Tanzen, Kennenlernen und Austauschen. Sie dient auch als Plattform für eine interessante Mischung aus orientalischen Sounds und elektronischen Beats. Das sehen wir als ein Symbol für die Verschmelzung der alten Identitäten mit den neuen."

        },{
            img: fadaa1,
            title: 'Fadaa',
            description: "Fadaa' (Weltraum) ist ein Partykonzept, das die modernen & alternativen Nachwuchstalente beleuchtet. Die Party soll eine Alternative zur Clubszene in Düsseldorf anbieten, in der Menschen oft wegen deren Hautfarbe diskriminiert werden. Hier dürfen alle Menschen, die öfter in Clubs diskriminiert werden, reinkommen.\n" +
                "\n" +
                "Fadaa' bietet einen vertrauten Raum für alle zum Tanzen, Kennenlernen und Austauschen. Sie dient auch als Plattform für eine interessante Mischung aus orientalischen Sounds und elektronischen Beats. Das sehen wir als ein Symbol für die Verschmelzung der alten Identitäten mit den neuen."

        },


    ]

    return (
        <div className="GalleryPage">
            <br /><br />

            <WSPGallery
                galleryImages={fadaaImages}
            />
        </div>
    );
}

export default FadaaPage;

import WSPGallery from '../../../components/Gallery/WSPGallery';
import '../GalleryPage.css';

import share3_1 from '../../../assets/gallery/share3-1.png'
import share3_2 from '../../../assets/gallery/share3-2.png'
import share3_3 from '../../../assets/gallery/share3-3.png'






function Share3Page() {

    const share3Images = [

        {
            img: share3_1,
            title: 'share3',
            description: "Share3 ‚Ar : Street‘ is a Hip-Hop festival dedicated for emerging talents from the Levant (Sham) area in the middle east.\n" +
                "\n" +
                "From the streets of Damascus, Beirut and other cities in the Levant, people raised their voices for freedom & human rights. In this respect, Rap & Hip-Hop artists got influenced by this movement and endeavored to put their craft together to initiate a cultural movement which resonates with the folks' experiences and their demands in the street.\n" +
                "\n" +
                "Share3 will give these artists a platform to present their talents, share their stories and to push this cultural movement in the Levant as well in Europe where many people (including artists) from the Levant found a new place where they could express themselves freely."
        },
        {
            img: share3_2,
            title: 'share3',
            description: "Share3 ‚Ar : Street‘ ist ein Hip-Hop-Festival für aufstrebende Talente aus der Region Levant (Sham) im Nahen Osten.\n" +
                "\n" +
                "Auf den Straßen von Damaskus, Beirut und anderen Städten in der Levante erhoben Menschen ihre Stimme für Freiheit und Menschenrechte. In dieser Hinsicht wurden Rap- und Hip-Hop-Künstler von dieser Bewegung beeinflusst und versuchten, ihr Handwerk zusammenzubringen, um eine kulturelle Bewegung zu initiieren, die mit den Erfahrungen der Menschen und ihren Forderungen auf der Straße in Einklang steht.\n" +
                "\n" +
                "Share3 wird diesen Künstlern eine Plattform geben, um ihre Talente zu präsentieren, ihre Geschichten zu teilen und diese kulturelle Bewegung in der Levante sowie in Europa voranzutreiben, wo viele Menschen (einschließlich Künstler) aus der Levante einen neuen Ort gefunden haben, an dem sie sich frei ausdrücken können."
        },
        {
            img: share3_3,
            title: 'share3',
            description: "Share3 ‚Ar : Street‘ ist ein Hip-Hop-Festival für aufstrebende Talente aus der Region Levant (Sham) im Nahen Osten.\n" +
                "\n" +
                "Auf den Straßen von Damaskus, Beirut und anderen Städten in der Levante erhoben Menschen ihre Stimme für Freiheit und Menschenrechte. In dieser Hinsicht wurden Rap- und Hip-Hop-Künstler von dieser Bewegung beeinflusst und versuchten, ihr Handwerk zusammenzubringen, um eine kulturelle Bewegung zu initiieren, die mit den Erfahrungen der Menschen und ihren Forderungen auf der Straße in Einklang steht.\n" +
                "\n" +
                "Share3 wird diesen Künstlern eine Plattform geben, um ihre Talente zu präsentieren, ihre Geschichten zu teilen und diese kulturelle Bewegung in der Levante sowie in Europa voranzutreiben, wo viele Menschen (einschließlich Künstler) aus der Levante einen neuen Ort gefunden haben, an dem sie sich frei ausdrücken können."
        },

    ]

    return (
        <div className="GalleryPage">
            <br /><br />

            <WSPGallery
                galleryImages={share3Images}
            />
        </div>
    );
}

export default Share3Page;

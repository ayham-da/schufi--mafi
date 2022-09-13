import './GalleryPage.css';

import CommunityPage from "./Community/Community";
import HakayaPage from "./Hakaya/Hakaya";
import IstSyrienSicherPage from "./Ist_Syrien_Sicher/IstSyrianSicher";
import IwanPage from "./Iwan/Iwan";
import LayaliPage from "./Layali/Layali";
import MusiqanaPage from "./Musiqana/Musiqana";
import YallaPage from "./Yalla/Yalla";
import WorkshopPage from "./Workshop/Workshop";




function GalleryPage() {
    return (
        <div className="Gallery">
            <CommunityPage/>
            <LayaliPage/>
            <YallaPage/>
            <IstSyrienSicherPage/>
            <IwanPage/>
            <HakayaPage/>
            <WorkshopPage/>
            <MusiqanaPage/>



        </div>
    );
}

export default GalleryPage;

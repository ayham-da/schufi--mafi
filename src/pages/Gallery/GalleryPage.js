import './GalleryPage.css';

import CommunityPage from "./Community/Community";
import HakayaPage from "./Hakaya/Hakaya";
import IstSyrienSicherPage from "./Ist_Syrien_Sicher/IstSyrianSicher";
import IwanPage from "./Iwan/Iwan";
import LayaliPage from "./Layali/Layali";
import MusiqanaPage from "./Musiqana/Musiqana";
import YallaPage from "./Yalla/Yalla";
import WorkshopPage from "./Workshop/Workshop";
import Share3 from "./Share3/Share3";
import Fadaa from "./Fadaa/Fadaa";






function GalleryPage() {
    return (
        <div className="Gallery">
            <Share3/>
            <CommunityPage/>
            <Fadaa/>
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

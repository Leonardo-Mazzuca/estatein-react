
import Top from "./Top";
import ContainerItem from "../../GlobalComponents/Container/Container";
import PhotoContainer from "./PhotoContainer";



const PropertiePhotos = () => {

    return (
        <ContainerItem setPadding={"3rem"}> 
            <Top />
            <PhotoContainer />
        </ContainerItem>
    );  



}

export default PropertiePhotos;
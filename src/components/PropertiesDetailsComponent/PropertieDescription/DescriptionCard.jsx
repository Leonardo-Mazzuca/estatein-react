import styled from "styled-components";

const Description = styled.div`
 
  display: flex;
  flex-direction: column;]
  border-radius: 12px;
  border: 1px solid var(--Grey-15);
  padding: 2.5em;
`;

const MiniCard = styled.div`
    border: 1px solid var(--Grey-10);
    padding:2rem;
    flex: 1 0 0;

`;

const cardFooterItem = [
    {
        name: "Bedrooms",
        icon: "/imgs/icons/bed-grey-icon.svg",
        number : "07"
    },
    {
        name: "Bathrooms",
        icon: "/imgs/icons/bath-grey-icon.svg",
        number : "03"

    },
    {
        name: "Area",
        icon: "/imgs/icons/area-icon.svg",
        number : "2,500 Square Feet"

    },
];


const DescriptionCard = () => {
    return (
        <Description>
        <div className="text-start">
          <div className="d-flex gap-2 flex-column">
            <h2>Description</h2>
            <p>
              Discover your own piece of paradise with the Seaside Serenity
              Villa. T With an open floor plan, breathtaking ocean views
              from every room, and direct access to a pristine sandy beach,
              this property is the epitome of coastal living.
            </p>
          </div>
        </div>

        <div className="d-flex mt-3 justify-content-between flex-wrap w-100 gap-2">

            {cardFooterItem.map((item,index)=>
            <MiniCard key={index}>
                <div className="d-flex gap-2 align-items-center">
                    <img src={item.icon} alt={item.name} />
                    <p className="m-0">{item.name}</p>
                </div>
                <div>
                    <h2>{item.number}</h2>
                </div>
            </MiniCard>
            
            )}
        </div>

        
      </Description>
    )
}

export default DescriptionCard;
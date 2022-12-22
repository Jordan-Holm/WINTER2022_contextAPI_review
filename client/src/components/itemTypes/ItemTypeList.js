import ItemTypeShow from "./ItemTypeShow";

const ItemTypeList = ({ itemType }) => (
    <>
        { itemType.map( i => {
            <ItemTypeShow 
                key={i.id}
                {...i}
            />
        })}
    </>
)

export default ItemTypeList;